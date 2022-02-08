import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DashboardLayout from '../../layouts/DashboardLayout'
import { get_single_product_Action } from '../../redux/actions/productActions'

function EditProduct() {
    const _product = useSelector(state => state.get_single_product)
    const [isReadMore, setIsReadMore] = useState(true);
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
            <div className='p-8 bg-white m-4 rounded shadow min-h-96'>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Product details</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Edit and change product details.</p>
                </div>
                <div className="mt-5 border-t border-gray-200">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Product title</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{product?.product.title}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Category</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{product?.product.category}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Sub-Category</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{product?.product.sub_category}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Price</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> ${product?.product.price}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                    <div
                                        className="text-base text-gray-700 space-y-6 leading-normal"
                                        dangerouslySetInnerHTML={{ __html: product?.product?.description }}
                                    />
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </span>
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default EditProduct
