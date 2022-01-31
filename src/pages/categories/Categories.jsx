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

    console.log(cat_error, cat_loading, categories)

    return (
        <GeneralLayout>
            <div className="flex flex-col flex-wrap items-center max-w-7xl">
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mx-auto max-w-7xl">
                    {data.categories.map((category, index) => (
                        <div  key={index} className="cursor-pointer hover:text-blue-primary col-span-1">
                            <CategoryItem text={category.name} image={category.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </GeneralLayout>
    )
}

const CategoryItem = ({ text, image }) => {
    return (
        <div className="bg-white p-2 rounded m-1 grid items-center justify-center content-center shadow w-full">
            <div className='p-4 grid items-center justify-center content-center'>
            <img src={image} alt="" className='h-16' />
            </div>
            <p className='text-center'>{text}</p>
        </div>
    )
}

export default Categories
