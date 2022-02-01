import React from 'react';
import SellerOrdersTable from '../components/tables/SellerOrdersTable';
import DashboardLayout from '../layouts/DashboardLayout';

function Orders() {
    return (
        <DashboardLayout>
            <div className="flex w-full flex-col">
                <p className='text-center text-gray-700 font-semibold py-8'>A list of all orders from customers</p>
                <SellerOrdersTable/>
            </div>
        </DashboardLayout>
    )
}

export default Orders;