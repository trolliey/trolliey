import React from 'react'
import { useSelector } from 'react-redux'
import CompareItem from '../../components/compare_item/CompareItem'
import GeneralLayout from '../../layouts/GeneralLayout'

function Compare() {
    const add_to_compare = useSelector(state => state.add_to_compare)
    const { compare_basket } = add_to_compare

    return (
        <GeneralLayout>
            {
                compare_basket?.length < 1 ? (
                    <div className="grid items-center content-center justify-center h-96">
                        <p className='="text-gray-00 font-semibold'>
                            No items to compare
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 grid-cols-2">
                        {
                            compare_basket?.map((item, index) => (
                                <div key={index} className="col-span-1">
                                    <CompareItem
                                        picture={item.pictures[0]}
                                        name={item.name}
                                        add_features={item.features}
                                        description={item.description}
                                        price={item.price}
                                        id={item.id}
                                    />
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </GeneralLayout>
    )
}

export default Compare
