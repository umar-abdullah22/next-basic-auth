'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { POST } from "../api/users/signup/route";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toast";

export default function SignUpPage() {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: ''
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)


    const onSignUp = async(e: any) => {
        e.preventDefault()
        const res = await axios.post('/api/users/signup', user )
        console.log(res)
        if(res.data.success === 200) toast.success(res.data.message)
        else toast.error(res.data.message)

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your username"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
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
                            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
                        onClick={onSignUp}
                        disabled={buttonDisabled}
                    >
                        { buttonDisabled ? 'loading...' : 'Sign Up'}
                    </button>
                    <Link href={'/login'} className="text-black text-center">Visit login page</Link>
                </form>
            </div>
        </div>
    );
}
