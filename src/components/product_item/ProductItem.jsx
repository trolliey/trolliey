import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add_to_cart_Action } from '../../redux/actions/cartActions'
import BlueButton from '../buttons/BlueButton'

function ProductItem({ picture, rating, name, description, price, discount_price, dicount, id }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const add_to_cart = () => {
        const item = {
            picture, rating, description, price, discount_price, id, name
        }
        dispatch(add_to_cart_Action(item))
    }

    return (
        <div className="cursor-pointer relative flex flex-col w-full">
            <div onClick={() => history.push(`/product/description/${id}`)} className="md:h-56 h-40 overflow-hidden rounded bg-gray-100">
                <img src={picture} alt="product" className="flex-1 max-h-full flex-shrink-0 object-cover w-auto h-full" />
            </div>
            <div onClick={() => history.push(`/product/description/${id}`)} className="star flex flex-row items-center my-2">
                {
                    rating?.map((rate, index) => (
                        <StarIcon key={index} className="text-yellow-400" height={16} width={16} />
                    ))
                }
            </div>
            <div onClick={() => history.push(`/product/description/${id}`)} className="flex-1 overflow-ellipsis overflow-hidden">
                <p className="text-gray-400 text-sm ">{name}</p>
                <p className="line-clamp-2 text-sm text-gray-700 my-1 overflow-ellipsis font-semibold">{description}</p>
            </div>

            {/* //price */}
            {
                discount_price ? (
                    <div onClick={() => history.push(`/product/description/${id}`)} className="flex flex-row items-center">
                        <p className="text-gray-900 font-bold mr-2">${price - discount_price}</p>
                        <p className="line-through text-gray-400 text-sm">${price}</p>
                    </div>
                ) : (
                    <div onClick={() => history.push(`/product/description/${id}`)} className="flex flex-row items-center">
                        <p className="text-gray-900 font-bold mr-2">${price}</p>
                    </div>
                )
            }

            <div className="flex mt-1">
                <BlueButton text="add to cart" onClick={add_to_cart} />
            </div>
        </div>
    )
}

export default ProductItem
