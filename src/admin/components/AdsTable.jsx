import React from 'react'

function AdsTable({name, goes_to, added_on, remove_on}) {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-5 capitalize py-2 border-b border-gray-300 mb-2">
                <div className="flex flex-row col-span-1 items-center gap-4">
                    <div className="text-gray-900 font-semibold">
                        name
                    </div>
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
            <div className="grid grid-cols-5 py-2 border-b border-gray-300 mb-2">
                <div className="flex flex-row col-span-1 items-center gap-4">
                    <div className="text-gray-900">
                        {name}
                    </div>
                </div>
                <div className="flex col-span-2">
                    <p className="text-gray-900">{goes_to}</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900">{added_on}</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900">{remove_on}</p>
                </div>
            </div>
        </div>
    )
}

export default AdsTable
