import React from 'react';
import BuyerOrdersTable from '../components/tables/BuyerOrdersTable';
import DashboardLayout from '../layouts/DashboardLayout';

function BuyerOrders() {
  return (
    <DashboardLayout>
        <div className="flex flex-col my-8 w-full">
        <p className='text-gray-700 font-semibold my-8 text-center'>A list of all users orders</p>
            <BuyerOrdersTable />
        </div>
    </DashboardLayout>
  );
}

export default BuyerOrders;
