import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

function Cards() {
    return (
        <DashboardLayout>
            <div className="flex flex-col flex-1 md:m-4 m-2 bg-white rounded p-4 ">
                <p className="text-gray-700 font-semibold text-center capitalize">Info about how you want to withdraw and send money </p>
               
            </div>
        </DashboardLayout>
    )
}

export default Cards
