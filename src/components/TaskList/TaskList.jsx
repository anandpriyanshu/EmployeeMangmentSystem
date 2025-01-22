import React from 'react'

export default function TaskList() {
    return (
        <>
            <div id="tasklist" className='flex items-center justify-start flex-nowrap gap-10 overflow-x-auto scroll-m-0 w-full h-[40%] mt-10 p-5'>
                <div className='h-full w-[350px] flex-shrink-0 bg-red-400 rounded-xl p-6 text-white'>
                    <div className='flex justify-between items-center '>
                        <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>High</h3>
                        <h4>22Jan 2024</h4>
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Do your workout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque facilis fuga natus ipsam tenetur.</p>
                </div>

                <div className='h-full w-[350px] flex-shrink-0 bg-blue-400 rounded-xl p-6 text-white'>
                    <div className='flex justify-between items-center '>
                        <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>High</h3>
                        <h4>22Jan 2024</h4>
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Do your workout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque facilis fuga natus ipsam tenetur.</p>
                </div>

                <div className='h-full w-[350px] flex-shrink-0 bg-emerald-400 rounded-xl p-6 text-white'>
                    <div className='flex justify-between items-center '>
                        <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>High</h3>
                        <h4>22Jan 2024</h4>
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Do your workout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque facilis fuga natus ipsam tenetur.</p>
                </div>

                <div className='h-full w-[350px] flex-shrink-0 bg-yellow-400 rounded-xl p-6 text-white'>
                    <div className='flex justify-between items-center '>
                        <h3 className='bg-red-500 px-3 py-1 text-sm rounded-sm'>High</h3>
                        <h4>22Jan 2024</h4>
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Do your workout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque facilis fuga natus ipsam tenetur.</p>
                </div>
            </div>
        </>
    )
}
