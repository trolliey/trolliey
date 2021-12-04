import React, { useEffect } from 'react'
import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DashboardLayout from '../../layouts/DashboardLayout'
import { get_single_product_Action } from '../../redux/actions/productActions'

function EditProduct() {
    const _product = useSelector(state => state.get_single_product)
    const { loading, error, product } = _product
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_single_product_Action(id))
    }, [dispatch, id])

    console.log(product)

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex-1 w-full grid items-center justify-center content-center min-h-screen">
                    <Spinner size="xl" thickness={3} />
                </div>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <div className="flex-1 w-full grid items-center justify-center content-center min-h-screen">
                <p className="capitalize text-gray-700 my-4 font-semibold text-center bg-red-100 p-2 rounded">problem loading item. Refresh page</p>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className="flex-1 w-full">
                <p className="capitalize text-gray-700 my-4 font-semibold text-lg text-center">edit a product</p>
            </div>
        </DashboardLayout>
    )
}

export default EditProduct
