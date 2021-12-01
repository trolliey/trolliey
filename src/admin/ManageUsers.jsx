import { Spinner } from '@chakra-ui/spinner'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AdminLayout from '../layouts/AdminLayout'
import { get_all_users_Action } from '../redux/actions/userActions'
import UsersTable from './components/UsersTable'

function ManageUsers() {
    const _get_all_users = useSelector(state => state.get_all_users)
    const { loading, users, error } = _get_all_users
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_users_Action())
    }, [dispatch])

    console.log(users?.users)

    if (loading) {
        return (
            <AdminLayout>
                <div className="w-full md:pt-8 pt-4 min-h-screen h-screen grid items-center justify-center content-center">
                    <Spinner size="xl" thickness={3} />
                </div>
            </AdminLayout>
        )
    }

    if (error) {
        return (
            <AdminLayout>
                <div className="flex w-full md:pt-8 pt-4">
                    <p className="text-gray-700 mx-auto capitalize font-semibold text-center text-lg p-2 bg-red-100 rounded">something went wrong while loading users, try reloading page!</p>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className="min-h-screen">
                <p className="text-center text-lg text-gray-700 capitalize font-semibold my-4">manage all users</p>
                <>
                    <UsersTable users={users?.users} />
                </>
            </div>
        </AdminLayout>
    )
}

export default ManageUsers
