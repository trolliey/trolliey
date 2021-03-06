import React from 'react'
import { Spinner } from '@chakra-ui/spinner'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { get_all_special_products_Actions } from '../../redux/actions/specialProductsActions'
import ProductItem from '../product_item/ProductItem'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'

function SpecialProducts() {
    const _special_p = useSelector(state => state.get_special_products)
    const { spec_products, loading, error } = _special_p
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(get_all_special_products_Actions())
    }, [dispatch])

    return (
        <div className="items flex-col">
            <div className="text-lg py-8 flex flex-row items-center justify-between">
                <p className="font-semibold text-gray-700 capitalize ">special products</p>
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
                        <p className="text-gray-700 font-semibold text-lg text-center py-8 w-full">Could not load special products, Try reloading the page! </p>
                    ) : (
                        <>
                            {
                                spec_products?.all_products.length >= 1 ? (
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
                                ) : (
                                    <div onClick={() => history.push('/dashboard/inventory')} className="flex lg:col-span-5 md:col-span-3 col-span-2">
                                        <p className="text-lg text-gray-700 text-center flex-1 p-1 cursor-pointer hover:bg-gray-50 rounded w-full font-semibold my-4 capitalize">No special products to show. click here to become a seller?</p>
                                    </div>
                                )
                            }
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default SpecialProducts
