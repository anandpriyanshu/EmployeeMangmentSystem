import React, { useState } from 'react'

export default function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const suubmitHandler = (e) => {

        e.preventDefault()

        setemail("")
        setpassword('')

    }
    return (
        <>
            <div className='flex h-screen w-screen justify-center items-center '>
                <div className='border-2 border-red-500 text-white p-16 rounded-md'>
                    Login

                    <form onSubmit={suubmitHandler} className='flex flex-col justify-center items-center gap-5 mt-5'>

                        <input value={email} onChange={(e) => setemail(e.target.value)} required className=' outline-none bg-transparent border-2 rounded-full px-2 py-1 text-xl' type='email' placeholder='Email' />
                        <input value={password} onChange={(e) => setpassword(e.target.value)} required className=' outline-none bg-transparent border-2 rounded-full px-2 py-1 text-xl' type='password' placeholder='password' />
                        <button className=' w-full bg-red-600 outline-none  border-none rounded-full px-2 py-1 text-xl'>Login</button>
                    </form>
                </div>

            </div>
        </>
    )
}
