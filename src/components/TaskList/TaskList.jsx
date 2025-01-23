import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

export default function TaskList({ data }) {

    return (
        <>
            <div id="tasklist" className='flex items-center justify-start flex-nowrap gap-10 overflow-x-auto scroll-m-0 w-full h-[40%] mt-10 p-5'>
                {/* <AcceptTask />
                <NewTask />
                <CompleteTask />
                <FailedTask /> */}

                {
                    data.tasks.map((curr, idx) => {
                        if (curr.active) {
                            return <AcceptTask key={idx} data={curr} />
                        }

                        if (curr.newtask) {
                            return <NewTask key={idx} data={curr} />
                        }

                        if (curr.completed) {
                            return <CompleteTask key={idx} data={curr} />
                        }

                        if (curr.failed) {
                            return <FailedTask key={idx} data={curr} />
                        }



                    })
                }
            </div>
        </>
    )
}
