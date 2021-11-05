import { Spinner } from '@chakra-ui/spinner'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { get_all_special_products_Actions } from '../../redux/actions/specialProductsActions'
import ProductItem from '../product_item/ProductItem'

function SpecialProducts() {
    const _special_p = useSelector(state => state.get_special_products)
    const { spec_products, loading, error } = _special_p
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_special_products_Actions())
    }, [dispatch])

    return (
        <div className="items flex-col">
            <p className="text-lg font-semibold text-gray-700 capitalize py-8">special products</p>
            <div className={`${loading || error ? "flex-1 flex w-full " : "grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 "}  gap-4`}>
                {
                    loading ? (
                        <div className="w-full flex flex-col items-center py-8">
                            <Spinner colorScheme="blue" thickness={3} />
                        </div>
                    ) : error ? (
                        <p className="text-gray-700 font-semibold text-lg text-center py-8 w-full">Could not load special products, Try reloading the page! </p>
                    ) : (
                        <>
                            {
                                spec_products?.all_products?.map((product, index) => (
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

export default SpecialProducts
