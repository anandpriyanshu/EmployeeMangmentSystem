import React from 'react'

export default function CreateTask() {
    return (
        <>
            <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="taskTitle" className="block text-sm font-medium">Task Title</label>
                        <input type="text" id="taskTitle" placeholder="Make a UI design" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium">Date</label>
                        <input type="text" id="date" placeholder="dd/mm/yyyy" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="assignTo" className="block text-sm font-medium">Assign to</label>
                        <input type="text" id="assignTo" placeholder="employee name" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium">Category</label>
                        <input type="text" id="category" placeholder="design, dev, etc" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium">Description</label>
                        <textarea id="description" placeholder="Description" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 h-32"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-green-500 text-white rounded-md p-2">Create Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}
