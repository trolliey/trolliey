import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

function Balances() {
    return (
        <DashboardLayout>
            <div className="flex flex-col flex-1 md:m-4 m-2 bg-white rounded p-4 ">
                <p className="text-gray-700 font-semibold text-center">A history of all my withdrawal and deposit history</p>
                <div className="grid grid-cols-3 bg-blue-100 capitalize rounded p-2 mt-4">
                    <div className="col-span-1 text-center">
                        name
                    </div>
                    <div className="col-span-1 text-center">
                        date
                    </div>
                    <div className="col-span-1 text-center">
                        status
                    </div>
                </div>
                <div className="grid grid-cols-3 capitalize rounded p-2 border-b border-gray-200 text-sm text-gray-500">
                    <div className="col-span-1 text-center">
                        rent
                    </div>
                    <div className="col-span-1 text-center">
                        4 days ago
                    </div>
                    <div className="col-span-1 flex flex-col text-center">
                        success
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Balances
