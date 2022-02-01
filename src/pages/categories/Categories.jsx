import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import GeneralLayout from '../../layouts/GeneralLayout'
import { get_all_categories_Action } from '../../redux/actions/categoryActions'
import { set_search_query_Action } from '../../redux/actions/searchAction'
import { data } from '../../utils/data'
import slugify from '../../utils/slugify'

function Categories() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    const history = useHistory()

    const search_by_category = (category) => {
        dispatch(set_search_query_Action(category))
        history.push('/explore')
    }

    return (
        <GeneralLayout>
            <div className="flex flex-col flex-wrap items-center max-w-7xl">
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mx-auto max-w-7xl">
                    {data.categories.map((category, index) => (
                        <div onClick={search_by_category(slugify(category.name))}  key={index} className="cursor-pointer hover:text-blue-primary col-span-1">
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
