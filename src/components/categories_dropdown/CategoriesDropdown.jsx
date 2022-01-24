import React, { useEffect, useState } from 'react';
import './CategoriesDropdown.css'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { get_all_categories_Action } from '../../redux/actions/categoryActions';
import { useDispatch, useSelector } from 'react-redux';
import SubCategoryComponent from './SubCategoryComponent'

function CategoriesDropdown() {
    const dispatch = useDispatch()
    const _categories = useSelector(state => state.get_all_categories)
    const { cat_loading, cat_error, categories } = _categories
    const [parent_id, setParentId] = useState('')
    const [cat_name, setCatName] = useState('')

    const handle_hover = (id, name) =>{
        setParentId(id)
        setCatName(name)
    }
    console.log(cat_name)

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    return (
        <div>
            <ul className="menu relative text-gray-700 font-semibold border border-gray-200 rounded w-[150px]">
                <div className="flex flex-row items-center gap-8 bg-blue-primary text-white p-2 justify-between capitalize text-sm">
                    <p>Shop By Category</p>
                    <ChevronDownIcon height={16} width={16} />
                </div>
                <li>
                    {
                        cat_loading ? (
                            <div className="flex flex-row items-center gap-2 py-2 px-4 cursor-pointer justify-between text-sm hover:bg-gray-100">
                                <p>loading...</p>
                            </div>
                        ) : (
                            <>
                                {
                                    categories?.categories.map((category, index) => (
                                        <div key={index} onMouseEnter={() => handle_hover(category._id, category.name)} className="flex flex-row items-center gap-2 py-2 px-4 cursor-pointer justify-between text-sm hover:bg-gray-100">
                                            <p className='capitalize'>{category.name}</p>
                                            <ChevronRightIcon height={16} width={16} className='text-gray-400' />
                                        </div>
                                    ))
                                }
                            </>
                        )
                    }

                    <>
                        <SubCategoryComponent category_id={parent_id} cat_name={cat_name} />
                    </>

                </li>

            </ul>
        </div>
    )
}

export default CategoriesDropdown;
