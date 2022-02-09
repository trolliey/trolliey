import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router'
import UserAvatar from '../components/user_avatar/UserAvatar'
import { Spinner } from '@chakra-ui/react'
import { get_store_products_Actions } from '../redux/actions/storeActions'
import GeneralLayout from './GeneralLayout'

const page_links = [
    { name: 'Products', location: '/stores/single' },
    { name: 'About', location: '/stores/single/about' },
    { name: 'Reviews', location: '/stores/single/reviews' }
]

function StoreLayout({ children, loading, error }) {
    const { id } = useParams()
    const _info = useSelector(state => state.get_store_products)
    const { products } = _info
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        dispatch(get_store_products_Actions(id, '', 1, 10))
    }, [dispatch, id])

    console.log(products)

    return (
        <GeneralLayout title={products?.store?.company_name} description={products?.store?.about}>
            <div className="flex w-full rounded min-h-screen">
                <div className=" w-full rounded overflow-hidden">
                    <div className="max-w-2xl mx-auto lg:max-w-7xl">
                        <div className="flex flex-col">
                            <div className="flex flex-col bg-white">
                                <div className="header relative w-full lg:h-80 md:h-64 h-40 bg-gray-200">
                                    <div className="absolute md:flex hidden bg-gray-200 border-4 border-white rounded-full -bottom-16 md:left-12 left-4 ">
                                        <UserAvatar size="2xl" name={products?.store?.company_name} />
                                    </div>
                                    <div className="absolute md:hidden flex bg-gray-200 border-4 border-white rounded-full -bottom-12 md:left-12 left-4 ">
                                        <UserAvatar size="xl" name={products?.store?.company_name} />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center md:mt-20 mt-16 mx-2 border-t border-gray-200 ">
                                    {
                                        page_links?.map((link, index) => (
                                            <p onClick={() => history.push(`${link.location}/${id}`)} key={index} className={`${location.pathname.substring(0, location.pathname.lastIndexOf("/")) === link.location ? "border-t-4 border-blue-700 " : " "} mr-4 pb-4 text-gray-700 font-semibold cursor-pointer pt-4`}>{link.name}</p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="bg-white md:p-4 p-2 rounded my-4">
                                {
                                    loading ? (
                                        <div className="w-full flex flex-col items-center py-8">
                                            <Spinner colorScheme="blue" thickness={3} />
                                        </div>
                                    ) : error ? (
                                        <p className="text-gray-700 font-semibold text-lg text-center py-8 w-full">Could not load products, Try reloading the page! </p>
                                    ) : (
                                        <>

                                            {children}

                                        </>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default StoreLayout