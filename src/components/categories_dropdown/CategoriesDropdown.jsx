import React, { useEffect, useState } from 'react'
import { MenuIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_categories_Action } from '../../redux/actions/categoryActions'

function CategoriesDropdown({ open, name }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [show_categories, setShowCategories] = useState(open)
    const _categoeries = useSelector(state => state.get_all_categories)
    const { cat_loading, cat_error, categories } = _categoeries

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])
    // console.log(categories?.categories)
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
                                <div key={index} onClick={() => history.push('/explore')} className="flex flex-row items-center p-2 border-b border-gray-20 cursor-pointer hover:bg-gray-100">
                                    <ArrowRightIcon className="text-gray-700 mr-3" height={12} width={12} />
                                    <p className="text-gray-700 text-sm font-semibold">{category.category}</p>
                                    <div className="flex-1"></div>
                                    <ChevronRightIcon className="text-gray-700" height={16} width={16} />
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default CategoriesDropdown
