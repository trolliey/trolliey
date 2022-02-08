import React, { useState } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import { useSelector, useDispatch } from 'react-redux'
import BlueButton from '../../components/buttons/BlueButton'
import ProductItem from '../../components/product_item/ProductItem'
import StoreLayout from '../../layouts/StoreLayout'
import { get_store_products_Actions } from '../../redux/actions/storeActions'
import { useParams } from 'react-router-dom'

function SingleStore() {
    const _info = useSelector(state => state.get_store_products)
    const { loading, products, error } = _info
    const [search_query, setSearchQuery] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const handle_search_query = () => {
        console.log(search_query)
        dispatch(get_store_products_Actions(id, search_query, page, limit))
    }

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
        <StoreLayout loading={loading} error={error}>
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4 w-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className='flex-1 p-3 text-sm bg-gray-200 rounded order-none outline-none' placeholder='search store products ...' />
                    <div className="flex">
                        <BlueButton text={'Search'} onClick={handle_search_query} />
                    </div>
                </div>
                <p className="m-4 capitalize text-gray-700 font-semibold md:text-lg text-sm text-center">{search_query ? search_query : 'Store Products'}</p>
                <div className={`${loading || error ? "flex-1 flex w-full " : `grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2`}  gap-4 relative  p-4 bg-white rounded`}>
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
                </div>
                <div className="flex self-center">
                    <BlueButton text={'Show More'} />
                </div>
            </div>
        </StoreLayout>
    )
}

export default SingleStore
