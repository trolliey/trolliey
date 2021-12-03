import React from 'react'
import { useSelector } from 'react-redux'
import StoreLayout from '../../layouts/StoreLayout'
import { BriefcaseIcon, LocationMarkerIcon, BadgeCheckIcon, ShareIcon } from '@heroicons/react/solid'

function AboutStore() {

    const _info = useSelector(state => state.get_store_products)
    const { products } = _info

    console.log(products?.store)

    return (
        <StoreLayout>
            <p className="text-gray-500 font-semibold mb-2">{products?.store?.name}</p>
            <p className="text-gray-900 text-xl font-semibold">Store description</p>

            <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-100 p-1 rounded flex flex-row items-center text-xs mr-2">
                    <BriefcaseIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">reviews</p>
                </div>
                <div className="bg-gray-100 p-1 rounded flex flex-row items-center text-xs mr-2">
                    <LocationMarkerIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">Location</p>
                </div>
                <div className="p-1 rounded flex flex-row items-center text-xs mr-2">
                    <ShareIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">Share this store</p>
                </div>
            </div>

            <p className="text-gray-900 text-xl font-semibold capitalize mt-8 mb-4">about this store</p>
            <div className="text-gray-700">{!products?.store?.description ?
                (<p>
                    products?.store?.description
                </p>) : (<p>
                    This store has no description
                </p>)}
            </div>
        </StoreLayout>
    )
}

export default AboutStore
