import React from 'react'

export default function Header({ data }) {
    console.log("headdata", data)
    return (
        <div className='flex justify-between items-end text-white'>
            <h1 className='text-2xl'>Hello<br /><span className='font-bold'>{data.firstName}</span> </h1>
            <button className='  bg-red-500 text-lg  text-white font-md outline-none border-none rounded-full px-2  '>Logout</button>
        </div>
    )
}
