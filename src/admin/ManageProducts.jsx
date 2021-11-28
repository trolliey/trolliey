import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import ProductsTable from './components/ProductsTable'

function ManageProducts() {
    return (
        <AdminLayout>
            <div className="flex flex-col w-full flex-1 px-4">
                <p className="text-gray-900 font-semibold text-center my-8">Manage all products</p>
                <div className="flex">
                <ProductsTable />

                </div>
            </div>
        </AdminLayout>
    )
}

export default ManageProducts
