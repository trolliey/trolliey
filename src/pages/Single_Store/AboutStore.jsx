import React from 'react'
import { useSelector } from 'react-redux'
import StoreLayout from '../../layouts/StoreLayout'
import { BriefcaseIcon, LocationMarkerIcon, ShareIcon } from '@heroicons/react/solid'
import { Spinner } from '@chakra-ui/react'
import { useHistory } from 'react-router'

function AboutStore() {

    const _info = useSelector(state => state.get_store_products)
    const { products, loading } = _info
    const history = useHistory()

    console.log(products?.store)

    if (loading) {
        return (
            <StoreLayout>
                <div className="grid items-center content-center bg-white md:p-8 px-4 w-full rounded">
                    <div className="bg-white w-full">
                        <div className="max-w-2xl mx-auto md:py-16 py-4  lg:max-w-7xl lg:px-8 md:px-0 px-0">
                            <div className="flex flex-col items-center">
                                <Spinner
                                    colorScheme="blue"
                                    size="lg"
                                    thickness={3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </StoreLayout>
        )
    }

    return (
        <StoreLayout>
            <p className="text-gray-500 font-semibold mb-2">{products?.store?.name}</p>
            <p className="text-gray-900 text-xl font-semibold">Store links</p>

            <div className="flex flex-row items-center mt-2">
                <div onClick={() => history.push(`/stores/single/reviews/${products?.store.user}`)} className="bg-gray-100 p-1 rounded flex flex-row items-center text-xs mr-2 hover:bg-gray-200 cursor-pointer">
                    <BriefcaseIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">reviews</p>
                </div>
                <div className="bg-gray-100 p-1 rounded flex flex-row items-center text-xs mr-2 hover:bg-gray-200 cursor-pointer">
                    <LocationMarkerIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">Location</p>
                </div>
                <div className="p-1 rounded flex flex-row items-center text-xs mr-2 hover:bg-gray-100 cursor-pointer">
                    <ShareIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">Share this store</p>
                </div>
            </div>

            <p className="text-gray-900 text-xl font-semibold capitalize mt-8 mb-4">about this store</p>
            {products?.store?.description ?
                (<p>
                    {products?.store?.description}
                </p>
                ) : (
                    <p>
                        This store has no description
                    </p>)
            }
        </StoreLayout>
    )
}

export default AboutStore
