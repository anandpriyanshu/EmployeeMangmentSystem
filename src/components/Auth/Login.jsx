import React, { useState } from 'react'

export default function Login({ handleLogin }) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {

        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword('')

    }
    return (
        <>
            <div className='flex h-screen w-screen justify-center items-center '>
                <div className='border-2 border-red-500 text-white p-16 rounded-md'>
                    Login

                    <form onSubmit={submitHandler} className='flex flex-col justify-center items-center gap-5 mt-5'>

                        <input value={email} onChange={(e) => setEmail(e.target.value)} required className=' outline-none bg-transparent border-2 rounded-full px-2 py-1 text-xl' type='email' placeholder='Email' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} required className=' outline-none bg-transparent border-2 rounded-full px-2 py-1 text-xl' type='password' placeholder='password' />
                        <button className=' w-full bg-red-600 outline-none  border-none rounded-full px-2 py-1 text-xl'>Login</button>
                    </form>
                </div>

            </div>
        </>
    )
}
