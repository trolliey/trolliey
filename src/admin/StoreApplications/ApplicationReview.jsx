import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import BlueButton from '../../components/buttons/BlueButton';
import RedButton from '../../components/buttons/RedButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_dashboard_store_info_Actions } from '../../redux/actions/storeActions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Spinner, useDisclosure } from '@chakra-ui/react';
import ApproveStoreModal from '../components/modals/ApproveStoreModal'

function ApplicationReview() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const _info = useSelector(state => state.get_store_products)
    const { loading, products } = _info
    const dispatch = useDispatch()
    const { id } = useParams()

    const [body_text, setBodyText] = useState('')
    const [modal_heading, setHeading] = useState('')
    const [action, setAction] = useState('')
    const [store_id, setStoreId] = useState('')

    const approve_application = () => {
        setHeading('Approve Application')
        setBodyText('Approve application for user to start selling')
        setAction('approve')
        setStoreId(id)
        onOpen()
    }

    const reject_application = () => {
        setHeading('Reject Applciation')
        setBodyText('Reject applciation for user to start selling')
        setAction('reject')
        setStoreId(id)
        onOpen()
    }

    useEffect(() => {
        dispatch(get_dashboard_store_info_Actions(id))
    }, [dispatch, id])


    console.log(products)

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
                    ) : (
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
                                            <RedButton onClick={reject_application} text={'Reject Application'} />
                                            <BlueButton onClick={approve_application} text={'Approve Application'} />
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <>
                                <ApproveStoreModal
                                    body_text={body_text}
                                    modal_heading={modal_heading}
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    action={action}
                                    store_id={store_id}
                                    />
                            </>
                        </>
                    )
                }
            </div>
        </DashboardLayout>
    );
}

export default ApplicationReview;
