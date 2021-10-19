import React from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'

function Pricing({ handleChange, values, prevStep, nextStep }) {
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="flex-1 p-4 flex flex-col capitalize text-lg text-gray-700">
                        pricing and shipping
                    </div>
                    <div className="border-b border-gray-200 "></div>
                    <div className="mx-4 grid grid-cols-2 gap-4 my-8">
                        <div className="col-span-1">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 capitalize">
                                item price
                            </label>
                            <input
                                id="price"
                                value={values.stock}
                                onChange={handleChange('price')}
                                name="price"
                                type="number"
                                className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                placeholder="$0"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="discount" className="block text-sm font-medium text-gray-700 capitalize">
                                item discount price (optional)
                            </label>
                            <input
                                id="discount"
                                value={values.discount}
                                onChange={handleChange('discount')}
                                name="discount"
                                type="number"
                                className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                placeholder="$0"
                            />
                        </div>
                    </div>
                    <div className="m-4 grid grid-cols-2 gap-4 mb-8">
                        <div className="col-span-1">
                            <label htmlFor="shipping_offered" className="block text-sm font-medium text-gray-700 capitalize">
                                Do your offer shipping?
                            </label>
                            <select
                                id="shipping_offered"
                                name="shipping_offered"
                                value={values.type}
                                onChange={handleChange('shipping_offered')}
                                className="mt-1 block w-full pl-3 pr-10 p-2 text-base border border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md capitalize"
                            >
                                <option>yes</option>
                                <option>no</option>
                                <option>on bulk goods</option>
                                <option>only on subscribers</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="shipping_price" className="block text-sm font-medium text-gray-700 capitalize">
                                How much more for shipping?
                            </label>
                            <input
                                id="shipping_price"
                                value={values.shipping_price}
                                onChange={handleChange('shipping_price')}
                                name="shipping_price"
                                type="number"
                                className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                placeholder="$0"
                            />
                        </div>
                    </div>
                    <div className="m-4 grid grid-cols-2 gap-4 mb-8">
                        <div className="col-span-1">
                            <label htmlFor="shipping_radius" className="block text-sm font-medium text-gray-700 capitalize">
                                What areas do you ship to?
                            </label>
                            <input
                                id="shipping_radius"
                                value={values.shipping_radius}
                                onChange={handleChange('shipping_radius')}
                                name="shipping_radius"
                                type="text"
                                className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                placeholder="Everywhere"
                            />
                        </div>
                        
                    </div>
                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="w-full justify-between flex flex-row items-center">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Price plays a major role in the success business</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline onClick={() => prevStep(values)} />
                                <div className="mx-2"></div>
                                <BlueButton text="Next" onClick={() => nextStep(values)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Pricing
