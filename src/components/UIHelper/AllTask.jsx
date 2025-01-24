import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export default function AllTask() {

    const authData = useContext(AuthContext)
    console.log(authData.employees)
    return (
        <>
            <div className='bg-[#1C1C1C] rounded mt-5 h-60 p-6' >

                <div className='bg-green-400 py-2 px-4 flex justify-between mb-2'>
                    <h2 className='text-lg font-medium w-1/5'>Name</h2>
                    <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                </div>

                <div>
                    {
                        authData.employees.map((user) => {
                            return (

                                <div className='bg-red-400 py-2 px-4 flex justify-between mb-2'>
                                    <h2 className='text-lg font-medium w-1/5'>{user.firstName}</h2>
                                    <h3 className='text-lg font-medium w-1/5'>{user.taskCounts.newTask}</h3>
                                    <h5 className='text-lg font-medium w-1/5'>{user.taskCounts.active}</h5>
                                    <h5 className='text-lg font-medium w-1/5'>{user.taskCounts.completed}</h5>
                                    <h5 className='text-lg font-medium w-1/5'>{user.taskCounts.failed}</h5>
                                </div>
                            )
                        })
                    }

                </div>

            </div >
        </>
    )
}
