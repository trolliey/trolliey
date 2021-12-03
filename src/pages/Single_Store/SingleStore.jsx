import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ProductItem from '../../components/product_item/ProductItem'
import StoreLayout from '../../layouts/StoreLayout'
import { get_store_products_Actions } from '../../redux/actions/storeActions'


function SingleStore() {
    const { id } = useParams()
    const _info = useSelector(state => state.get_store_products)
    const { loading, products, error } = _info
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_store_products_Actions(id))
    }, [dispatch, id])

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

            <p className="my-8 mx-4 capitalize text-gray-700 font-semibold text-lg">All Store products</p>
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

        </StoreLayout>
    )
}

export default SingleStore
