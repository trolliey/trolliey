import { SearchIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import UsersDropdown from './UsersDropdown'

function StoresTable() {
    const [search_query, setSearchQuery] = useState('')

    const search_item = () => {
        console.log(search_query)
    }
    return (
        <div className="flex flex-col mx-4">
            <div className="flex flex-row items-center space-x-2 w-full mb-4 ">
                <div className="flex flex-row items-center border border-gray-200 rounded px-4 py-1 flex-1">
                    <SearchIcon height={16} width={16} className="text-gray-300" />
                    <input
                        type="text"
                        placeholder="Search user by name or id"
                        onChange={e => setSearchQuery(e.target.value)}
                        className="p-2 bg-gray-100 flex-1 outline-none border-none" />
                </div>
                <BlueButton text="Search" onClick={search_item} />
            </div>
            <div className="grid grid-cols-5 items-center rounded-t shadow border-b border-gray-100">
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50  ">
                    logo
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    name
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    email
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    verified
                </div>
                <div className="col-span-1 text-gray-400 uppercase p-2 bg-gray-50 ">
                    edit
                </div>
            </div>

            <div className="grid grid-cols-5 w-full bg-white p-2 flex-1 items-center rounded-t shadow border-b text-gray-800 border-gray-100 ">
                <div className="col-span-1   ">
                    logo
                </div>
                <div className="col-span-1  ">
                    name
                </div>
                <div className="col-span-1  ">
                    email
                </div>
                <div className="col-span-1  ">
                    verified
                </div>
                <div className="col-span-1  text-blue-primary ">
                    <UsersDropdown />
                </div>
            </div>

        </div>
    )
}

export default StoresTable
