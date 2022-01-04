import React from 'react'

function AdsTable({ name, goes_to, added_on, remove_on, heading, body }) {
    return (
        <div className="flex-1">
            <div className="grid md:grid-cols-5 grid-cols-2 gap-8">
                <div className="col-span-1">
                    <div className="flex flex-col capitalize">
                        <div className="flex flex-row items-center gap-4 text-gray-900 font-semibold">
                            name
                        </div>
                        <div className="flex flex-row items-center gap-4 text-gray-900 font-semibold">
                            heading
                        </div>
                        <div className="flex flex-row items-center gap-4 text-gray-900 font-semibold">
                            body
                        </div>
                        <div className="flex col-span-2">
                            <p className="text-gray-900 font-semibold">Goes to</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-900 font-semibold">added</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-900 font-semibold">remove</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 col-span-1">
                    <div className="flex flex-col capitalize">
                        <div className="flex flex-row items-center gap-4 text-gray-900 font-semibold capitalize">
                            {name ? name : 'Not specified'}
                        </div>
                        <div className="flex flex-row items-center gap-4 text-gray-900 font-semibold">
                            {heading ? heading : 'Not specified'}
                        </div>
                        <div className="flex flex-row items-center gap-4 text-gray-900 font-semibold">
                            {body ? body : 'Not specified'}
                        </div>
                        <div className="flex col-span-2">
                            <p className="text-gray-900 font-semibold">{goes_to ? goes_to : 'Not specified'}</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-900 font-semibold">{added_on ? added_on : 'Not Specified'}</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-900 font-semibold">{remove_on ? remove_on : 'Not Specified'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdsTable
