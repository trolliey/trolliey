import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/spinner'
import { get_featured_products_Actions } from '../../redux/actions/featuredProductsActions'
import ProductItem from '../product_item/ProductItem'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'
import ProductLoading from '../product_item/ProductLoading'

function FeaturedProducts() {
    const _featured_p = useSelector(state => state.get_featured_products)
    const { featured_products, loading, error } = _featured_p
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(get_featured_products_Actions())
    }, [dispatch])

    return (
        <div className="items flex-col bg-white rounded md:px-8 px-4 w-full">
            <div className="md:text-lg text-sm py-8 flex flex-row items-center justify-between">
                <p className="font-semibold text-gray-700 capitalize ">featured products</p>
                <div onClick={() => history.push('/explore')} className="text-new-primary capitalize font-semibold flex flex-row items-center cursor-pointer hover:text-new-light">
                    View all
                    <ArrowRightIcon height={16} width={16} className="ml-2" />
                </div>
            </div>
            <div >
                {
                    loading ? (
                        <div className={`${loading || error ? "flex-1 flex w-full " : "grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 "}  gap-4`}>
                             {
                                [1, 2, 3, 4, 5]?.map((item, index) => (
                                    <div key={index} className="flex">
                                        <ProductLoading />
                                    </div>
                                ))
                            }
                        </div>
                    ) : error ? (
                        <p className="text-gray-700 font-semibold text-center py-8 w-full md:text-lg text-sm">Could not load featured products, Try reloading the page! </p>
                    ) : (
                        <div className={`${loading || error ? "flex-1 flex w-full " : "grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 "}  gap-4`}>
                            {
                                featured_products?.all_products.length >= 1 ? (
                                    <>
                                        {
                                            featured_products?.all_products?.map((product, index) => (
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
                                    <div onClick={() => history.push('/dashboard/inventory')} className="flex lg:col-span-5 md:col-span-3 col-span-2">
                                        <p className="md:text-lg text-sm text-gray-700 text-center flex-1 p-1 cursor-pointer hover:bg-gray-50 rounded w-full font-semibold my-4 capitalize">No featured products to show. click here to become a seller?</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FeaturedProducts
