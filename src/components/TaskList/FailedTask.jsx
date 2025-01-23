import React from 'react'

export default function FailedTask() {
    return (
        <>


            <div className='h-full w-[350px] flex-shrink-0 bg-orange-400 rounded-xl p-6 text-white'>
                <div className='flex justify-between items-center '>
                    <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>High</h3>
                    <h4>22Jan 2024</h4>
                </div>
                <h2 className='text-2xl font-bold mt-5'>Do your workout</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque facilis fuga natus ipsam tenetur.</p>
                <div className='mt-2'>
                    <button className='bg-red-500  rounded-md px-2 py-1 text-sm mt-2 w-full'>Failed </button>
                </div>
            </div>
        </>
    )
}
