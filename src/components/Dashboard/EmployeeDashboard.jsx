import React from 'react'
import Header from '../UIHelper/Header'
import TaskListNumbers from '../UIHelper/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard({ data }) {

    return (
        <>
            <div className=' p-16 bg-[#1C1C1C] h-screen'>

                <Header data={data} />
                <TaskListNumbers data={data} />
                <TaskList data={data} />
            </div>
        </>
    )
}
