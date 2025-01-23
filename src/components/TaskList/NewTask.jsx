import React from 'react'

function NewTask() {
    return (
        <>
            <div className='h-full w-[350px] flex-shrink-0 bg-blue-400 rounded-xl p-6 text-white'>
                <div className='flex justify-between items-center '>
                    <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>{data.category}</h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className='text-2xl font-bold mt-5'>{data.taskTitle}</h2>
                <p>{data.taskDescription}</p>
                <button className='bg-blue-500 rounded-md px-2 py-1 text-sm mt-2'>Accept task</button>
            </div>
        </>
    )
}

export default NewTask