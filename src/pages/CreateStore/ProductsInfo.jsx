import React, { useState } from 'react';
import Error from '../../components/alerts/Error';
import BlueButton from '../../components/buttons/BlueButton';
import Tags from '../../components/tags/Tags';
import GeneralLayout from '../../layouts/GeneralLayout';

function ProductsInfo({ nextStep, handleChange, values, setBrands, prevStep }) {
    const [page_err, setPageErr] = useState('')

    const selectedTags = (tags) => {
        setBrands(tags)
    };

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
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
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
                                                Do you carry stock? <span className='text-red-600'>*</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="flex items-center p-3 rounded bg-gray-100">
                                                    <input
                                                        id="stock"
                                                        name="stock"
                                                        type="radio"
                                                        value={'store_available'}
                                                        onChange={e => handleChange('stock')}
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
                                                        name="stock"
                                                        type="radio"
                                                        value={'store_available'}
                                                        onChange={e => handleChange('stock')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        No, I sell through other channels
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                How do you like to handle stock? <span className='text-red-600'>*</span>
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <div className="flex items-center p-3 rounded bg-gray-100">
                                                    <input
                                                        id="stock"
                                                        name="stock"
                                                        type="radio"
                                                        value={'store_available'}
                                                        onChange={e => handleChange('stock')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        To keep my stock and bring only delivered items
                                                    </label>
                                                </div>
                                                <div className="flex items-center p-3 rounded bg-gray-100 mt-2">
                                                    <input
                                                        id="stock"
                                                        name="stock"
                                                        type="radio"
                                                        value={'store_available'}
                                                        onChange={e => handleChange('stock')}
                                                        className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                        required
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                        Let Trolliey Keep my stock and deliver for me when items are ordered
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {page_err && <Error error={page_err} />}
                    <div className="flex flex-row items-center w-full justify-between">
                        <div className="">
                            <BlueButton text={'Prev Step'} onClick={() => prevStep(values)} />
                        </div>
                        {
                            values.business_category && values.company_name && values.about && values.business_owner_email ? (
                                <BlueButton text={'Next Step'} onClick={() => nextStep(values)} />
                            ) : (
                                <BlueButton text={'Next Step'} onClick={() => setPageErr('Please enter all requires fields')} outline />
                            )
                        }
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}

export default ProductsInfo;
