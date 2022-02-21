import React from 'react';
import BuyerOrdersTable from '../components/tables/BuyerOrdersTable';
import DashboardLayout from '../layouts/DashboardLayout';
import useSWR from 'swr'
import { apiUrl } from '../utils/apiUrl';
import axios from 'axios';
import { useSelector } from 'react-redux';

function BuyerOrders() {
  const user_info = useSelector(state => state.user_login)
  const { userInfo } = user_info
  const fetcher = (url, token) => axios.get(url, { headers: { Authorization: token } }).then((res) => res.data);
  const { data, error } = useSWR([`${apiUrl}/order/user`, userInfo?.token], fetcher);

  console.log(data)
  return (
    <DashboardLayout>
      <div className="flex flex-col my-8 w-full">
        <p className='text-gray-700 font-semibold my-8 text-center'>A list of all users orders</p>
        <BuyerOrdersTable data={data?.orders} />
      </div>
    </DashboardLayout>
  );
}

export default BuyerOrders;
