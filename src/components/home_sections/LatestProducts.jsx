import React from 'react'
import { data } from '../../utils/data'
import ProductItem from '../product_item/ProductItem'

function LatestProducts() {
    return (
        <div className="items flex-col">
            <p className="text-lg font-semibold text-gray-700 capitalize py-8">Latest products</p>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                {
                    data.products?.map((product, index) => (
                        <ProductItem
                            key={index}
                            picture={product.picture}
                            price={product.price}
                            discount_price={product.discount_price}
                            name={product.name}
                            description={product.descrition}
                            rating={product.rating}
                        />
                    ))
                }

            </div>
        </div>

    )
}

export default LatestProducts
