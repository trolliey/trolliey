import React from 'react'
import {PencilIcon, TrashIcon} from '@heroicons/react/outline'
import UsersDropdown from './UsersDropdown'

function UsersTable({ users }) {
    return (
        <div className="flex flex-col mx-4">
            <div className="grid grid-cols-5 items-center rounded-t shadow border-b border-gray-100">
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50  ">
                    name
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    verified
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    email
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    role
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    edit
                </div>
            </div>
            {
                users?.map((user, index) => (
                    <div key={index} className="grid grid-cols-5 w-full bg-white p-2 flex-1 items-center rounded-t shadow border-b text-gray-800 border-gray-100 ">
                        <div className="col-span-1   ">
                            {user.displayName}
                        </div>
                        <div className="col-span-1  ">
                            {user.verified ? 'true' : 'false'}
                        </div>
                        <div className="col-span-1  ">
                            {user.email}
                        </div>
                        <div className="col-span-1  ">
                            {user.role}
                        </div>
                        <div className="col-span-1  text-blue-primary ">
                            <UsersDropdown />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default UsersTable
