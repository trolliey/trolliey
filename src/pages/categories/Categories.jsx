import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GeneralLayout from '../../layouts/GeneralLayout'
import { get_all_categories_Action } from '../../redux/actions/categoryActions'
import { data } from '../../utils/data'

function Categories() {
    const _categoeries = useSelector(state => state.get_all_categories)
    const { cat_loading, cat_error, categories } = _categoeries
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    return (
        <GeneralLayout>
            <div className="flex flex-row flex-wrap items-center">
                {data.categories.map((category, index) => (
                    <div key={index} className="cursor-pointer hover:text-blue-primary">
                        <CategoryItem text={category.name} />
                    </div>
                ))}
            </div>
        </GeneralLayout>
    )
}

const CategoryItem = ({ text }) => {
    return (
        <div className="bg-white p-2 rounded-lg m-1">
            <p>{text}</p>
        </div>
    )
}

export default Categories
