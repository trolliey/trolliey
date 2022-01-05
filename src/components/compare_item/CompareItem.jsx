import React from 'react'
import { XIcon, ChevronRightIcon } from '@heroicons/react/outline'
import BlueButton from '../buttons/BlueButton'
import { useDispatch } from 'react-redux'

function CompareItem({picture, name, add_features, description, id, price}) {
    console.log(id)
    const dispatch = useDispatch()
    const add_to_basket_handler = () =>{}
    return (
        <div className="border border-gray-200 w-full md:p-4 p-2">
            <div className="flex flex-col items-end">
                <div className="md:pb-4 pb-2">
                    <XIcon height={16} height={16} className="text-red-700" />
                </div>
            </div>
            <div className="flex max-h-40 overflow-hidden rounded">
                <img src={picture} alt="showing visula representation of compare item" className="object-contain rounded" />
            </div>
            <p className="text-center md:my-4 my-2 text-gray-700">{name}</p>
            <BlueButton text="Add to cart" className="flex-1 w-full" onClick={add_to_basket_handler} />
            <div className="grid grid-cols-2 text-gray-700 font-semibold self-center md:my-4 my-2">
                <p className='col-span-1'>Price:</p>
                <p className='col-span-1'>{price ? price : 'No price'}</p>
            </div>
            <div className="my-4">
                {
                    add_features?.map((feature, index) => (
                        <div key={index} className="flex flex-row items-center">
                            <ChevronRightIcon height={16} width={16} className="text-gray-700" />
                            <p className="text-gray-700 font-semibold ml-2">{feature}</p>
                        </div>
                    ))
                }
            </div>
            <p className="text-gray-700 font-semibold">{description}</p>
        </div>
    )
}

export default CompareItem
