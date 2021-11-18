import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router'
import ProductItem from '../../components/product_item/ProductItem'
import UserAvatar from '../../components/user_avatar/UserAvatar'
import GeneralLayout from '../../layouts/GeneralLayout'
import { get_store_products_Actions } from '../../redux/actions/storeActions'

const page_links = [
    { name: 'Products', location: '/stores/single/:id' },
    { name: 'About', location: '/stores/single/about/:id' },
]

function SingleStore() {
    const { id } = useParams()
    const _info = useSelector(state => state.get_store_products)
    const { loading, products, error } = _info
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        dispatch(get_store_products_Actions(id))
    }, [dispatch, id])

    console.log(location.pathname)

    if (loading) {
        return (
            <GeneralLayout>
                <div className="grid items-center content-center bg-white md:p-8 px-4 w-full rounded min-h-screen">
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
            </GeneralLayout>
        )
    }

    return (
        <GeneralLayout>
            <div className="flex w-full rounded min-h-screen">
                <div className=" w-full rounded overflow-hidden">
                    <div className="max-w-2xl mx-auto lg:max-w-7xl">
                        <div className="flex flex-col">
                            <div className="flex flex-col bg-white">
                                <div className="header relative w-full lg:h-80 md:h-64 h-40 bg-gray-200">
                                    <div className="absolute md:flex hidden bg-gray-200 border-4 border-white rounded-full -bottom-12 md:left-12 left-4 ">
                                        <UserAvatar size="2xl" name={products?.store?.name} />
                                    </div>
                                    <div className="absolute md:hidden flex bg-gray-200 border-4 border-white rounded-full -bottom-12 md:left-12 left-4 ">
                                        <UserAvatar size="xl" name={products?.store?.name} />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center md:mt-20 mt-16 mx-2 border-t border-gray-200 pt-4">
                                    {
                                        page_links?.map((link, index) => (
                                            <p onClick={()=> console.log(link.location)} key={index} className={`${location.pathname === link.location ? "border-b-4 border-blue-700 " : " "} mr-4 pb-4 text-gray-700 font-semibold `}>{link.name}</p>
                                        ))
                                    }
                                </div>
                            </div>

                            <p className="my-8 mx-4 capitalize text-gray-700 font-semibold text-lg">All Store products</p>
                            <div className={`${loading || error ? "flex-1 flex w-full " : `grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2`}  gap-4 relative  p-4 bg-white rounded`}>
                                {
                                    loading ? (
                                        <div className="w-full flex flex-col items-center py-8">
                                            <Spinner colorScheme="blue" thickness={3} />
                                        </div>
                                    ) : error ? (
                                        <p className="text-gray-700 font-semibold text-lg text-center py-8 w-full">Could not load products, Try reloading the page! </p>
                                    ) : (
                                        <>
                                            {
                                                products?.products.length >= 1 ? (
                                                    <>
                                                        {
                                                            products?.products?.map((product, index) => (
                                                                <ProductItem
                                                                    key={index}
                                                                    picture={product.pictures[0]}
                                                                    price={product.price}
                                                                    discount_price={product.discount_price}
                                                                    name={product.title}
                                                                    description={product.description}
                                                                    rating={product.rating}
                                                                    id={product._id}
                                                                />
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    <div className="flex lg:col-span-5 md:col-span-3 col-span-2">
                                                        <p className="text-lg text-gray-700 text-center flex-1 p-1 cursor-pointer hover:bg-gray-50 rounded w-full font-semibold my-4 capitalize">The store has not products yet.</p>
                                                    </div>
                                                )
                                            }
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

export default SingleStore
