'use client';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toast";
export default function LoginPage() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const router = useRouter()
    const onLogin = async (e: any) => {
        e.preventDefault()

        const res = await axios.post('/api/users/login', {
            email: user.email,
            password: user.password
        })
        console.log(res.data)

        if (res.data.status === 200) router.push('/profile')
        else toast.error(res.data.message)

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Login Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
                        onClick={onLogin}
                    >
                        Login
                    </button>
                    <Link href={'/signup'} className="text-black text-center">Visit Sign Up page</Link>
                </form>
            </div>
        </div>
    );
}
