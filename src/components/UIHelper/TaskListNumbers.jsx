import React from 'react'

export default function TaskListNumbers({ data }) {
    return (
        <>
            <div className='flex mt-6 justify-between screen gap-5 text-center'>
                <div className='w-[45%] p-8 bg-red-400 rounded-xl px-9 py-6 '>
                    <h1 className='text-white text-3xl font-bold'>{data.taskCounts.newTask}</h1>
                    <h1 className='text-white text-xl font-semibold'>New task</h1>
                </div>
                <div className='w-[45%] p-8 bg-yellow-400 rounded-xl px-9 py-6'>
                    <h1 className='text-white text-3xl font-bold'>{data.taskCounts.completed}</h1>
                    <h1 className='text-white text-xl font-semibold'>Completed task</h1>
                </div>
                <div className='w-[45%] p-8 bg-emerald-400 rounded-xl px-9 py-6'>
                    <h1 className='text-white text-3xl font-bold'>{data.taskCounts.active}</h1>
                    <h1 className='text-white text-xl font-semibold'>Active task</h1>
                </div>
                <div className='w-[45%] p-8 bg-blue-400 rounded-xl px-9 py-6'>
                    <h1 className='text-white text-3xl font-bold'>{data.taskCounts.failed}</h1>
                    <h1 className='text-white text-xl font-semibold'>Failed task</h1>
                </div>

            </div>
        </>
    )
}
