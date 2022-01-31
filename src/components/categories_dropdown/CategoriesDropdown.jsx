import React, { useEffect, useState } from 'react';
import './CategoriesDropdown.css'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { get_all_categories_Action } from '../../redux/actions/categoryActions';
import { useDispatch } from 'react-redux';
import SubCategoryComponent from './SubCategoryComponent'
import { data } from '../../utils/data';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { set_search_query_Action } from '../../redux/actions/searchAction';

function CategoriesDropdown() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [category_slug, setCategorySlug] = useState('')
    const [cat_name, setCatName] = useState('')
    const [category_image, setCategoryImage] = useState()

    function slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')

        return string.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
    }

    const handle_hover = (slug, name, imag) => {
        setCategorySlug(slug)
        setCatName(name)
        setCategoryImage(imag)

    }
    const search_handler = (search_query) => {
        dispatch(set_search_query_Action(search_query))
        history.push('/explore')
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
                                <div
                                    key={index}
                                    onClick={() => search_handler(slugify(category.name))}
                                    onMouseEnter={() => handle_hover(slugify(category.name), category.name, category.icon)}
                                    className="flex flex-row items-center gap-2 py-2 px-4 cursor-pointer justify-between text-sm hover:bg-gray-100 overflow-ellipsis overflow-hidden">
                                    <p className='capitalize overflow-ellipsis line-clamp-1'>{category.name}</p>
                                    <ChevronRightIcon height={16} width={16} className='text-gray-400' />
                                </div>
                            ))
                        }
                    </>

                    <div onClick={() => history.push('/categories')} className="flex flex-row items-center gap-2 py-2 px-4 cursor-pointer justify-between text-sm hover:bg-gray-100">
                        <p className='capitalize'>all categories</p>
                        <ChevronRightIcon height={16} width={16} className='text-gray-400' />
                    </div>

                    <>
                        <SubCategoryComponent category_id={category_slug} cat_name={cat_name} cat_image={category_image} />
                    </>

                </li>

            </ul>
        </div>
    )
}

export default CategoriesDropdown;
