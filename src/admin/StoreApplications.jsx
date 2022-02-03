import React, { useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import ApplicationsTable from './components/ApplicationsTable';
import { useDispatch, useSelector } from 'react-redux'
import { get_all_applications_Action } from '../redux/actions/applicationActions';

function StoreApplications() {
  const dispatch = useDispatch()
  const _applications = useSelector(state => state.get_applications)
  const { loading, error, applications } = _applications

  useEffect(() => {
    dispatch(get_all_applications_Action())
  }, [dispatch])

  console.log(applications)

  return (
    <AdminLayout>
      <p className='text-gray-700 font-semibold text-center'>Reject or accent store applications</p>
      <div className="flex flex-col w-full min-h-screen">
        <ApplicationsTable data={applications} loading={loading} error={error} />
      </div>
    </AdminLayout>
  );
}

export default StoreApplications;
