import React, { useState } from 'react'

export default function Header({ data }) {


    // const [username, setusername] = useState("")

    // if (!data) {
    //     setusername("Hello Admin")
    // } else {
    //     setusername(data.firstName)
    // }

    const logoutUser = () => {
        localStorage.setItem("loggedInUser", "")
        window.location.reload()
    }

    return (
        <div className='flex justify-between items-end text-white'>
            <h1 className='text-2xl'>Hello<br /><span className='font-bold'>username</span> </h1>
            <button onClick={logoutUser} className='  bg-red-500 text-lg  text-white font-md outline-none border-none rounded-full px-2  '>Logout</button>
        </div >
    )
}
