import React, { useEffect, useState } from 'react'
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
    const _search_query = useSelector(state => state.search_query)
    const { query } = _search_query
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)

    const next_page = () => {
        if (products?.result.next) {
            setPage(page + 1)
        }
    }
    const prev_page = () => {
        if (products?.result.previous) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        dispatch(get_all_products_Action(query, page, limit))
        setLimit(5)
    }, [dispatch, query, page, limit])

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
                                    <div onClick={() => history.push('/dashboard/inventory')} className="flex lg:col-span-5 md:col-span-3 col-span-2">
                                        <p className="text-lg text-gray-700 text-center flex-1 p-1 cursor-pointer hover:bg-gray-50 rounded w-full font-semibold my-4 capitalize">No products to show. click here to become a seller?</p>
                                    </div>
                                )
                            }
                        </>
                    )
                }
            </div>

            <div className="flex flex-row w-full py-16 justify-between">
                <div className="self-start">
                    {
                        products?.result.previous ? (
                            <BlackButton
                                text="Previous Page"
                                onClick={prev_page}
                            />
                        ) : <div className="flex"></div>
                    }
                </div>
                <div className="self-end">
                    {
                        products?.result.next ? (
                            <BlackButton
                                text="Next Page"
                                onClick={next_page} />
                        ) : <div className="flex"></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AllProducts
