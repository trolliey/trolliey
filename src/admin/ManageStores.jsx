import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import StoresTable from './components/StoresTable'

function ManageStores() {
    return (
        <AdminLayout>
            <p className="text-center text-lg text-gray-700 capitalize font-semibold my-4">manage all stores</p>
            <>
                <StoresTable />
            </>
        </AdminLayout>
    )
}

export default ManageStores
