import { connect } from '@/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const { username, email, password } = reqBody

        console.log(req.body)

        //check if suer already eixsts
        const user = await User.findOne({ email })
        if (user) return NextResponse.json({ message: 'user already exists', status: 409 })
        
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        console.log(savedUser)

        return NextResponse.json({message: 'User created successfully', status: 200})
    }
    catch (error: any) {
        return NextResponse.json({ message: error.message, status: 500})
    }
}