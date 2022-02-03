import React, { useEffect } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import BlueButton from '../../components/buttons/BlueButton';
import RedButton from '../../components/buttons/RedButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_store_products_Actions } from '../../redux/actions/storeActions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Spinner } from '@chakra-ui/react';

function ApplicationReview() {
    const _info = useSelector(state => state.get_store_products)
    const { loading, products } = _info
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(get_store_products_Actions(id))
    }, [dispatch, id])

    console.log(products?.store)

    return (
        <DashboardLayout>
            <div className='p-8 bg-white m-4 rounded shadow min-h-96'>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application for store.</p>
                </div>
                {
                    loading ? (
                        <div className="grid items-center content-center justify-center">
                            <Spinner />
                        </div>
                    ):(
                        <>
                        <div className="mt-5 border-t border-gray-200 flex flex-col w-full">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                                <span className="flex-grow">{products?.store?.first_name} {products?.store?.last_name}</span>

                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Application for</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Store Opening on Trolliey</span>

                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{products?.store?.email}</span>

                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{products?.store?.mobile_number} | {products?.store?.phone_number} </span>

                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Store name</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.company_name}</span>

                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                    {products?.store?.about}
                                </span>
                            </dd>
                        </div>

                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Physical store</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.physical_store === 'store_not_available' ? 'No physical store' : 'Physical store available'}</span>

                            </dd>
                        </div>

                        {
                            products?.store?.physical_store !== 'store_not_available' && (
                                <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                                    <dt className="text-sm font-medium text-gray-500">Physical store</dt>
                                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <span className="flex-grow"> {products?.store?.store_address}</span>

                                    </dd>
                                </div>
                            )
                        }

                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Stock handling</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.stock_handle === "stock_handled_by_trolliey" ? 'Allow Trolliey to keep my stock' : 'I will keep my own stock'}</span>

                            </dd>
                        </div>

                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Business category</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.business_category}</span>

                            </dd>
                        </div>

                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Company website</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.company_website}</span>

                            </dd>
                        </div>

                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Facebook page</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.facebook}</span>

                            </dd>
                        </div>

                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Instagram page</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow"> {products?.store?.instagram}</span>
                            </dd>
                        </div>


                        <div className="flex flex-row items-center self-end ml-auto gap-8 pt-4">
                            <div className="flex-1"></div>
                            <div className="flex gap-8 flex-row items-center">
                                <RedButton text={'Reject Application'} />
                                <BlueButton text={'Approve Application'} />
                            </div>
                        </div>
                    </dl>
                </div>
                        </>
                    )
                }
            </div>
        </DashboardLayout>
    );
}

export default ApplicationReview;
