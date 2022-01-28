import { Divider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Error from '../../components/alerts/Error';
import SuccessAlert from '../../components/alerts/SuccessAlert';
import BlueButton from '../../components/buttons/BlueButton';
import Tags from '../../components/tags/Tags';
import GeneralLayout from '../../layouts/GeneralLayout';
import { create_single_store_Actions } from '../../redux/actions/storeActions';

function ProductsInfo({ brands, handleChange, values, setBrands, prevStep }) {
    const [page_err, setPageErr] = useState('')
    const [agreed, setAgreed] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const _logged_in = useSelector(state => state.user_login)
    const { userInfo } = _logged_in

    const _create = useSelector(state => state.create_store)
    const { create_loading, message, create_error } = _create

    const selectedTags = (tags) => {
        setBrands(tags)
    };

    const create_store = () => {
        dispatch(create_single_store_Actions(values, brands, userInfo?.token))
    }

    useEffect(()=>{
        if(message === 'Store Created!'){
            history.push('/store-created')
        }
    },[])

    return (
        <GeneralLayout no_text>
            <div className="py-8 max-w-7xl">
                <div className="bg-white rounded md:p-8 p-4 mx-auto">
                    <p className='text-gray-700 text-lg font-semibold text-center'>Details about the products you sell?</p>

                    <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                        <div className="space-y-8 divide-y divide-gray-200">
                            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                <div>
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Products Information</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            This information will help us provide suitable customers for your shop.
                                        </p>
                                    </div>

                                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Number Of Unique Products <span className='text-red-600'>*</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md shadow-sm">
                                                    <input
                                                        type="number"
                                                        name="number_of_uniqe_products"
                                                        value={values.number_of_uniqe_products}
                                                        onChange={handleChange('number_of_uniqe_products')}
                                                        id="unique-products"
                                                        autoComplete="unique-products"
                                                        className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Which brand of brands or products do you carry <span className='text-red-600'>*</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg flex rounded-md w-full">
                                                    <Tags
                                                        selectedTags={selectedTags}
                                                        className=""
                                                    />
                                                </div>
                                                <p className='text-sm text-gray-400'>Add all your brands, one at a time</p>
                                            </div>
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Do have a physical store? <span className='text-red-600'>*</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="flex items-center p-3 rounded bg-gray-100">
                                                    <input
                                                        id="physical_store"
                                                        name="physical_store"
                                                        type="radio"
                                                        value={'store_available'}
                                                        onChange={handleChange('physical_store')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        Yes, I have a physical store
                                                    </label>
                                                </div>
                                                <div className="flex items-center p-3 rounded bg-gray-100 mt-2">
                                                    <input
                                                        id="stock"
                                                        name="physical_store"
                                                        type="radio"
                                                        value={'store_not_available'}
                                                        onChange={handleChange('physical_store')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        No, I sell through other channels
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            values.physical_store === 'store_available' && (
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                        Enter address of store <span className='text-red-600'>*</span>
                                                    </label>
                                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                        <div className="max-w-lg flex rounded-md shadow-sm">
                                                            <textarea
                                                                id="physical_store_address"
                                                                name="physical_store_address"
                                                                value={values.physical_store_address}
                                                                onChange={handleChange('physical_store_address')}
                                                                rows={7}
                                                                className="max-w-lg shadow-sm block w-full p-3 outline-none sm:text-sm border border-gray-300 rounded-md"
                                                                defaultValue={''}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                How do you like to handle stock? <span className='text-red-600'>*</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="flex items-center p-3 rounded bg-gray-100">
                                                    <input
                                                        id="stock_handle"
                                                        name="stock_handle"
                                                        type="radio"
                                                        value={'stock_handled_by_self'}
                                                        onChange={handleChange('stock_handle')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        To keep my stock and bring only delivered items
                                                    </label>
                                                </div>
                                                <div className="flex items-center p-3 rounded bg-gray-100 mt-2">
                                                    <input
                                                        id="stock_handle"
                                                        name="stock_handle"
                                                        type="radio"
                                                        value={'stock_handled_by_trolliey'}
                                                        onChange={handleChange('stock_handle')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        Let Trolliey keep my stock and deliver for me when items are ordered
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider className='my-8' />
                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                value={agreed}
                                onChange={e => setAgreed(e.target.checked)}
                                className="h-4 w-4 text-blue-primary focus:ring-red-400 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                By applying to sell on Trolliey I agree to the terms and conditions
                            </label>
                        </div>
                        <Divider className='my-8' />
                        <div className=''>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Disclaimer</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Trolliey will contact you before approving your store to check if you are a legit seller. Thank You!.
                            </p>
                        </div>
                    </div>

                    {page_err && <Error error={page_err} />}
                    {message && <SuccessAlert message={message} />}
                    {create_error && <Error error={create_error} />}
                    <div className="flex flex-row items-center w-full justify-between">
                        <div className="">
                            <BlueButton text={'Prev Step'} onClick={() => prevStep(values)} />
                        </div>
                        {
                            values.stock_handle && values.physical_store && values.stock_handle ? (
                                <BlueButton text={'Apply For Store'} onClick={() => create_store()} loading={create_loading} />
                            ) : (
                                <BlueButton text={'Apply For Store'} onClick={() => setPageErr('Please enter all requires fields')} outline />
                            )
                        }
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}

export default ProductsInfo;