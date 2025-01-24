import React from 'react'
import Header from '../UIHelper/Header'
import CreateTask from '../UIHelper/CreateTask'
import AllTask from '../UIHelper/AllTask'


export default function AdminDashboard() {
    return (



        <>
            <div className='h-screen text-white p-10'>

                <Header />

                <CreateTask />

                <AllTask />


            </div>
        </>
    )
}
