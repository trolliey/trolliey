import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/spinner'
import ProductItem from '../product_item/ProductItem'
import { get_all_products_Action } from '../../redux/actions/productActions'
import BlackButton from '../buttons/BlackButton'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'

function AllProducts({ cols, no_text }) {
    const _products = useSelector(state => state.get_all_products)
    const { products, loading, error } = _products
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(get_all_products_Action())
    }, [dispatch])

    return (
        <div className="items flex-col">
            <div className="text-lg py-8 flex flex-row items-center justify-between">
                <p className="font-semibold text-gray-700 capitalize ">all products</p>
                {!no_text && <div onClick={() => history.push('/explore')} className="text-new-primary capitalize font-semibold flex flex-row items-center cursor-pointer hover:text-new-light">
                    View all
                    <ArrowRightIcon height={16} width={16} className="ml-2" />
                </div>}
            </div>
            <div className={`${loading || error ? "flex-1 flex w-full " : `grid ${cols ? cols : "lg:grid-cols-5 "} md:grid-cols-3 grid-cols-2`}  gap-4`}>
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
                    )
                }
            </div>

            <div className="flex flex-col w-full items-center py-16">
                <BlackButton text="Load More" />
            </div>
        </div>
    )
}

export default AllProducts
