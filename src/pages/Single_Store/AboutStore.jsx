import React from 'react'
import { useSelector } from 'react-redux'
import StoreLayout from '../../layouts/StoreLayout'
import { BadgeCheckIcon, BriefcaseIcon, ShareIcon } from '@heroicons/react/solid'
import { Spinner } from '@chakra-ui/react'
import { useHistory } from 'react-router'

function AboutStore() {

    const _info = useSelector(state => state.get_store_products)
    const { products, loading } = _info
    const history = useHistory()

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
            {
                !products?.store.verified ? (
                    <div className="flex flex-row items-center mb-4 gap-2">
                        <p className="text-gray-900 md:text-3xl text-lg font-extrabold ">{products?.store?.company_name}</p>
                        <BadgeCheckIcon className='text-blue-700' height={20} width={20} />
                    </div>
                ):(
                    <p className="text-gray-900 md:text-2xl text-3xl font-extrabold mb-4">{products?.store?.company_name}</p>
                )
            }
            <p className="text-gray-700 capitalize text-sm font-semibold">Store links</p>

            <div className="flex flex-row items-center mt-2">
                <div onClick={() => history.push(`/stores/single/reviews/${products?.store.user}`)} className="bg-gray-100 p-1 rounded flex flex-row items-center text-xs mr-2 hover:bg-gray-200 cursor-pointer">
                    <BriefcaseIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">reviews</p>
                </div>
                <div className="p-1 rounded flex flex-row items-center text-xs mr-2 hover:bg-gray-100 cursor-pointer">
                    <ShareIcon height={12} width={12} className="text-gray-500" />
                    <p className="text-gray-500 ml-1 font-semibold">Share this store</p>
                </div>
            </div>

            <p className="text-gray-900 text-xl font-semibold capitalize mt-8 mb-4">about this store</p>
            {products?.store?.about ?
                (<p>
                    {products?.store?.about}
                </p>
                ) : (
                    <p className='text-center text-gray-700 font-semibold'>
                        This store has no description
                    </p>)
            }
        </StoreLayout>
    )
}

export default AboutStore
