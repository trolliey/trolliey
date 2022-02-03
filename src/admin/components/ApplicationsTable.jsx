import { SearchIcon } from '@heroicons/react/outline'
import moment from 'moment'
import React, { useState } from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import ApplicationsDropdown from './ApplicationsDropdown'

function ApplicationsTable({ data, loading, error }) {
    const [search_query, setSearchQuery] = useState('')

    const search_item = () => {
        console.log(search_query)
    }
    return (
        <div className="flex flex-col mx-4 w-full">
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
            <div className="grid grid-cols-6 items-center rounded-t shadow border-b border-gray-100 text-gray-800 font-semibold">
                <div className="col-span-1 uppercase p-2 bg-gray-50  ">
                    store name
                </div>
                <div className="col-span-1 uppercase p-2 bg-gray-50 ">
                    email
                </div>
                <div className="col-span-1 uppercase p-2 bg-gray-50 ">
                    number
                </div>
                <div className="col-span-1 uppercase p-2 bg-gray-50 ">
                    stock
                </div>
                <div className="col-span-1 uppercase p-2 bg-gray-50 ">
                    sent
                </div>
                <div className="col-span-1 uppercase p-2 bg-gray-50 ">
                    Actions
                </div>
            </div>

            {
                loading ? (
                    <>
                        {
                            data?.map((info, index) => (
                                <div key={index} className="grid grid-cols-6 w-full bg-white p-2 flex-1 items-center rounded-t shadow border-b text-gray-700 border-gray-100 ">
                                    <div className="col-span-1   ">
                                        loading ...
                                    </div>
                                    <div className="col-span-1  ">
                                        loading ...
                                    </div>
                                    <div className="col-span-1  ">
                                        loading ...
                                    </div>
                                    <div className="col-span-1  ">
                                        loading ...
                                    </div>
                                    <div className="col-span-1  ">
                                        loading ...
                                    </div>
                                    <div className="col-span-1  text-blue-primary ">
                                        <ApplicationsDropdown id={info._id} />
                                    </div>
                                </div>
                            ))
                        }

                    </>
                ) : (
                    <>
                        {
                            data?.map((info, index) => (
                                <div key={index} className="grid grid-cols-6 w-full bg-white p-2 flex-1 items-center rounded-t shadow border-b text-gray-800 border-gray-100 text-sm">
                                    <div className="col-span-1   ">
                                        {info.company_name}
                                    </div>
                                    <div className="col-span-1  ">
                                        {info.email}
                                    </div>
                                    <div className="col-span-1  ">
                                        {info.mobile_number}
                                    </div>
                                    <div className="col-span-1  ">
                                        {info.stock_handle === 'stock_handled_by_trolliey' ? 'keep it' : 'keep myself'}
                                    </div>
                                    <div className="col-span-1  ">
                                        {moment(info.createdAt).fromNow()}
                                    </div>
                                    <div className="col-span-1  text-blue-primary ">
                                        <ApplicationsDropdown id={info._id} />
                                    </div>
                                </div>
                            ))
                        }

                    </>
                )
            }
        </div>
    );
}

export default ApplicationsTable;
