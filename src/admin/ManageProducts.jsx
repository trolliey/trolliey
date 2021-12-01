import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react'
import AdminLayout from '../layouts/AdminLayout'
import ProductsTable from './components/ProductsTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_all_products_Action } from '../redux/actions/productActions'

function ManageProducts() {

    const _get_all_products = useSelector(state => state.get_all_products)
    const { loading, error, products } = _get_all_products
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_all_products_Action())
    },[dispatch])

    console.log(products)

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
                    <p className="text-gray-700 mx-auto capitalize font-semibold text-center text-lg p-2 bg-red-100 rounded">something went wrong while loading products, try reloading page!</p>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className="flex flex-col w-full flex-1 px-4">
                <p className="text-gray-900 font-semibold text-center my-4">Manage all products</p>
                <div className="flex">
                    <ProductsTable products={products?.products} />

                </div>
            </div>
        </AdminLayout>
    )
}

export default ManageProducts
