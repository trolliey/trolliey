import React, {useState} from 'react';
import AdminLayout from '../layouts/AdminLayout';
import ApplicationsTable from './components/ApplicationsTable';

function StoreApplications() {

    const [search_query, setSearchQuery] = useState('')

    const search_item = () => {
        console.log(search_query)
    }

  return (
    <AdminLayout>
        <p className='text-gray-700 font-semibold text-center'>Reject or accent store applications</p>
        <div className="flex flex-col w-full">
            <ApplicationsTable />
        </div>
    </AdminLayout>
  );
}

export default StoreApplications;
