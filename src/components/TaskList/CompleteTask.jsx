import React from 'react'

export default function CompleteTask({ data }) {
    return (
        <>

            <div className='h-full w-[350px] flex-shrink-0 bg-yellow-400 rounded-xl p-6 text-white'>
                <div className='flex justify-between items-center '>
                    <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>{data.category}</h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className='text-2xl font-bold mt-5'>{data.taskTitle}</h2>
                <p>{data.taskDescription}</p>
                <div className='mt-2'>
                    <button className='bg-green-500  rounded-md px-2 py-1 text-sm mt-2 w-full'>Complete</button>
                </div>
            </div>
        </>
    )
}
