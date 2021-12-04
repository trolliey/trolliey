import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../layouts/AdminLayout'
import { get_all_stores_Action } from '../redux/actions/storeActions'
import StoresTable from './components/StoresTable'

function ManageStores() {

    const _stores = useSelector(state => state.get_all_stores)
    const { loading, stores, error } = _stores
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_stores_Action())
    }, [dispatch])

    console.log(stores, error)

    if (loading) {
        return (
            <AdminLayout>
                <p className="text-center text-lg text-gray-700 capitalize font-semibold my-4">manage all stores</p>
                <div className="grid w-full items-center justify-center content-center">
                    <Spinner size="lg" thickness={3} />
                </div>
            </AdminLayout>
        )
    }

    if (error) {
        return (
            <AdminLayout>
                <p className="text-center text-lg text-gray-700 capitalize font-semibold my-4">manage all stores</p>
                <div className="grid w-full items-center justify-center content-center">
                    try reloading page
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <p className="text-center text-lg text-gray-700 capitalize font-semibold my-4">manage all stores</p>
            <div className="min-h-screen">
                <StoresTable stores={stores} />
            </div>
        </AdminLayout>
    )
}

export default ManageStores
