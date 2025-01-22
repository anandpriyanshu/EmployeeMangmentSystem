import React from 'react'
import Header from '../UIHelper/Header'
import TaskListNumbers from '../UIHelper/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard() {
    return (
        <>
            <div className=' p-16 bg-[#1C1C1C] h-screen'>
                <Header />
                <TaskListNumbers />
                <TaskList />
            </div>
        </>
    )
}
