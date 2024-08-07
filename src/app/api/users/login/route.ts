import { connect } from '@/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
connect()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody

        //check if suer already eixsts
        const user = await User.findOne({ email })
        if (!user) return NextResponse.json({ message: 'user does not exist', status: 404 })
        
        //compare password
        const matched = await bcryptjs.compare(password, user.password)

        if (!matched) return NextResponse.json({ message: 'Invalid Password', status: 400 })
        
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' })
        
        const response = NextResponse.json({ message: 'Login successful', status: 200, success: true })
        
        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message, status: 500})
    }
}