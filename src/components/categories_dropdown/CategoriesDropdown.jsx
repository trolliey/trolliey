import React, { useEffect, useState } from 'react'
import { MenuIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_categories_Action } from '../../redux/actions/categoryActions'
import { set_search_query_Action } from '../../redux/actions/searchAction'
import './CategoriesDropdown.css'

function CategoriesDropdown({ open, name }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [show_categories, setShowCategories] = useState(open)
    const _categoeries = useSelector(state => state.get_all_categories)
    const { cat_loading, cat_error, categories } = _categoeries

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])
    console.log(categories?.categories)

    const search_by_category = (category) => {
        dispatch(set_search_query_Action(category))
        history.push('/explore')
    }

    if (cat_loading) {
        return (
            <div className="w-full relative flex flex-col">
                <button className="flex flex-row items-center w-full justify-around bg-blue-primary md:p-3 p-2 rounded outline-none border-none">
                    <MenuIcon className="text-white " height={16} width={16} />
                    <p className="lg:flex md:hidden hidden capitalize text-white text-sm font-semibold">loading ...</p>
                    <p className="lg:hidden md:flex hidden capitalize text-white text-sm font-semibold">loading ...</p>
                    <p className="lg:hidden md:hidden hidden capitalize text-white text-sm font-semibold">loading ...</p>
                </button>
            </div>
        )
    }
    if (cat_error) {
        <div onClick={show_categories ? () => setShowCategories(false) : () => setShowCategories(true)} className="w-full relative flex flex-col">
            <button className="flex flex-row items-center w-full justify-around bg-blue-primary md:p-3 p-2 rounded outline-none border-none">
                {!name && <MenuIcon className="text-white " height={16} width={16} />}
                <p className="lg:flex md:hidden hidden capitalize text-white text-sm font-semibold">{name ? name : "shop by categories"}</p>
                <p className="lg:hidden md:flex hidden capitalize text-white text-sm font-semibold">{name ? name : "by categories"}</p>
                <p className="lg:hidden md:hidden hidden capitalize text-white text-sm font-semibold">{name ? name : "shop by categories"}</p>
            </button>
            {
                show_categories ? (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-12">
                        <div onClick={() => history.push('/explore')} className="flex flex-row items-center p-2 border-b border-gray-20 cursor-pointer hover:bg-gray-100">
                            {/* <ArrowRightIcon className="text-gray-700 mr-3" height={12} width={12} /> */}
                            <p className="text-gray-700 text-sm font-semibold">Problem loading categories. Try reloading the page</p>
                            <div className="flex-1"></div>
                            {/* <ChevronRightIcon className="text-gray-700" height={16} width={16} /> */}
                        </div>
                    </div>
                ) : null
            }
        </div>
    }

    return (
        <div onClick={show_categories ? () => setShowCategories(false) : () => setShowCategories(true)} className="w-full relative flex flex-col">
            <button className="flex flex-row items-center w-full justify-around bg-blue-primary md:p-3 p-2 rounded outline-none border-none">
                {!name && <MenuIcon className="text-white " height={16} width={16} />}
                <p className="lg:flex md:hidden hidden capitalize text-white text-sm font-semibold">{name ? name : "shop by categories"}</p>
                <p className="lg:hidden md:flex hidden capitalize text-white text-sm font-semibold">{name ? name : "by categories"}</p>
                <p className="lg:hidden md:hidden hidden capitalize text-white text-sm font-semibold">{name ? name : "shop by categories"}</p>
            </button>
            {
                show_categories ? (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-12">
                        {
                            categories?.categories.map((category, index) => (
                                <div key={index} onClick={() => search_by_category(category.category)} className="relative hover-trigger flex flex-row items-center p-2 border-b border-gray-20 cursor-pointer hover:bg-gray-100">
                                    <ArrowRightIcon className="text-gray-700 mr-3" height={12} width={12} />
                                    <p className="text-gray-700 text-sm font-semibold capitalize">{category.category}</p>
                                    <div className="flex-1"></div>
                                    <ChevronRightIcon className="text-gray-700" height={16} width={16} />
                                    <div class="absolute bg-white border border-grey-100 px-4 py-2 -right-28 hover-target shadow rounded">
                                        {
                                            category.sub_categories.map(sub_cat => (
                                                <div className="flex flex-row items-center">
                                                    <ChevronRightIcon className="text-gray-700" height={12} width={12} />
                                                    {
                                                        category.sub_categories.length < 1 ? (
                                                            <p className="text-gray-700 text-sm font-semibold text-center">No Sub-Categories</p>
                                                        ) : (
                                                            <p key={sub_cat.sub_category_id} className="text-gray-700 font-semibold my-2 text-sm ml-2 capitalize">{sub_cat.sub_category}</p>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <p onClick={() => history.push('/categories')} className="text-gray-700 text-center py-2 capitalize cursor-pointer font-semibold">load more</p>
                    </div>
                ) : null
            }
        </div>
    )
}

export default CategoriesDropdown
