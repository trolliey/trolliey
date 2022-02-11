import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import GeneralLayout from '../../layouts/GeneralLayout'
import { set_search_query_Action } from '../../redux/actions/searchAction'
import { data } from '../../utils/data'
import slugify from '../../utils/slugify'

function Categories() {
    const dispatch = useDispatch()

    const history = useHistory()

    const search_by_category = (category) => {
        dispatch(set_search_query_Action(category))
        history.push('/explore')
    }

    return (
        <GeneralLayout title={'Categories'} description={'All our available categories in Trolliey'}>
            <div className="flex flex-col flex-wrap items-center max-w-7xl">
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mx-auto max-w-7xl bg-white p-4 rounded">
                    {data.categories.map((category, index) => (
                        <div onClick={()=>search_by_category(slugify(category.name))}  key={index} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer hover:text-blue-primary col-span-1">
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
            <img src={image} alt="" className='h-24' />
            </div>
            <p className='text-center'>{text}</p>
        </div>
    )
}

export default Categories
