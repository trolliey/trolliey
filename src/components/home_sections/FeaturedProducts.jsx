import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/spinner'
import { get_featured_products_Actions } from '../../redux/actions/featuredProductsActions'
import ProductItem from '../product_item/ProductItem'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'

function FeaturedProducts() {
    const _featured_p = useSelector(state => state.get_featured_products)
    const { featured_products, loading, error } = _featured_p
    const dispatch = useDispatch()
    const  history = useHistory()

    useEffect(() => {
        dispatch(get_featured_products_Actions())
    }, [dispatch])

    return (
        <div className="items flex-col">
            <div className="text-lg py-8 flex flex-row items-center justify-between">
                <p className="font-semibold text-gray-700 capitalize ">featured products</p>
                <div onClick={() => history.push('/explore')} className="text-new-primary capitalize font-semibold flex flex-row items-center cursor-pointer hover:text-new-light">
                    View all
                    <ArrowRightIcon height={16} width={16} className="ml-2" />
                </div>
            </div>
            <div className={`${loading || error ? "flex-1 flex w-full " : "grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 "}  gap-4`}>
                {
                    loading ? (
                        <div className="w-full flex flex-col items-center py-8">
                            <Spinner colorScheme="blue" thickness={3} />
                        </div>
                    ) : error ? (
                        <p className="text-gray-700 font-semibold text-lg text-center py-8 w-full">Could not load featured products, Try reloading the page! </p>
                    ) : (
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
                    )
                }

            </div>
        </div>
    )
}

export default FeaturedProducts
