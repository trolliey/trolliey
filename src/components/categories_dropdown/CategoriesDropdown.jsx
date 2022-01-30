import React, { useEffect, useState } from 'react';
import './CategoriesDropdown.css'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { get_all_categories_Action } from '../../redux/actions/categoryActions';
import { useDispatch } from 'react-redux';
import SubCategoryComponent from './SubCategoryComponent'
import { data } from '../../utils/data';

function CategoriesDropdown() {
    const dispatch = useDispatch()
    const [parent_id, setParentId] = useState('')
    const [cat_name, setCatName] = useState('')

    const handle_hover = (id, name) => {
        setParentId(id)
        setCatName(name)
    }

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    return (
        <div className='lg:w-60 md:w-96'>
            <ul className="menu relative text-gray-700 font-semibold">
                <div className="flex flex-row items-center gap-8 bg-blue-primary text-white p-3 justify-between capitalize text-sm rounded-t">
                    <p className='pl-2 pr-8 lg:flex md:hidden hidden'>By Category</p>
                    <p className='pl-2 pr-8 lg:hidden md:flex hidden'>By Category</p>

                    <ChevronDownIcon height={16} width={16} />
                </div>
                <li className='border border-gray-200 rounded-b'>
                    <>
                        {
                            data.categories.slice(0, 10)?.map((category, index) => (
                                <div key={index} onMouseEnter={() => handle_hover(category._id, category.name)} className="flex flex-row items-center gap-2 py-2 px-4 cursor-pointer justify-between text-sm hover:bg-gray-100 overflow-ellipsis overflow-hidden">
                                    <p className='capitalize overflow-ellipsis line-clamp-1'>{category.name}</p>
                                    <ChevronRightIcon height={16} width={16} className='text-gray-400' />
                                </div>
                            ))
                        }
                    </>

                    <div className="flex flex-row items-center gap-2 py-2 px-4 cursor-pointer justify-between text-sm hover:bg-gray-100">
                        <p className='capitalize'>all categories</p>
                        <ChevronRightIcon height={16} width={16} className='text-gray-400' />
                    </div>

                    <>
                        <SubCategoryComponent category_id={parent_id} cat_name={cat_name} />
                    </>

                </li>

            </ul>
        </div>
    )
}

export default CategoriesDropdown;
