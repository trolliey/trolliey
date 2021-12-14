import React from 'react'
import { useSelector } from 'react-redux'
import CompareItem from '../../components/compare_item/CompareItem'
import GeneralLayout from '../../layouts/GeneralLayout'

function Compare() {
    const add_to_compare = useSelector(state => state.add_to_compare)
    const { compare_basket } = add_to_compare

    return (
        <GeneralLayout>
            <div className="grid grid-cols-3">
                {
                    compare_basket?.map((item, index) => (
                        <div key={index} className="col-span-1">
                            <CompareItem 
                                picture={item.pictures[0]}
                                name={item.name}
                                add_features={item.features}
                                description={item.description}
                            />
                        </div>
                    ))
                }
            </div>
        </GeneralLayout>
    )
}

export default Compare