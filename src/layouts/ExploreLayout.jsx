import { StarIcon } from '@heroicons/react/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SearchInput from '../components/search/SearchInput'
import { get_all_categories_Action } from '../redux/actions/categoryActions'
import { set_search_query_Action } from '../redux/actions/searchAction'
import GeneralLayout from './GeneralLayout'

function ExploreLayout({ children }) {
    const _categories = useSelector(state => state.get_all_categories)
    const { cat_loading, categories } = _categories
    const dispatch = useDispatch()
    const [min_price, setMinPrice]= useState(0)
    const [max_price, setMaxPrice] = useState(0)

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    const filter_by_price = () =>{
        console.log(min_price, max_price)
    }

    const filter_by_category = (category) =>{
        dispatch(set_search_query_Action(category))
    }

    return (
        <GeneralLayout>
            <div className="bg-white md:p-8 p-2 rounded max-w-7xl mx-auto">
                <div className="top w-full flex flex-row md:gap-8 gap-2">
                    <div className="md:w-1/5 md:flex flex-col hidden">
                        <p className="text text-gray-700 mt-8 font-semibold pb-4 border-b border-blue-primary">Refine Search</p>

                        {/* //filter by categories */}
                        <>
                            <p className="text-gray-700 font-bold mt-4">Categories</p>
                            {
                                cat_loading ? (
                                    <p className="text-center text-gray-700 font-semibold my-2">Loading ...</p>
                                ) : (
                                    <>
                                        {
                                            categories?.categories.map((category, index) => (
                                                <div key={index} onClick={() => filter_by_category(category.category)} className="flex text-gray-700 hover:text-gray-900 flex-row items-center p-2 cursor-pointer hover:bg-gray-50 rounded">
                                                    {/* <ArrowRightIcon className="text-gray-700 mr-3" height={12} width={12} /> */}
                                                    <p className=" text-sm capitalize ">{category.category}</p>
                                                    <div className="flex-1"></div>
                                                </div>
                                            ))
                                        }
                                        <p className="font-semibold text-center text-sm text-gray-700 my-2 cursor-pointer hover:text-gray-500">Show more</p>
                                    </>
                                )
                            }
                        </>

                        {/* filter by rating  */}
                        <>
                            <p className="text-gray-700 font-bold">Rating</p>
                            <div className="p-2">
                                <div className="flex flex-row space-x-1 cursor-pointer items-center my-2 font-semibold text-gray-600">
                                    {[1, 2, 3, 4].map((star, index) => (
                                        <SolidStarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    {[1].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
                                </div>
                                <div className="flex flex-row space-x-1 cursor-pointer items-center my-2 font-semibold text-gray-600">
                                    {[1, 2, 3].map((star, index) => (
                                        <SolidStarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    {[1, 2].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
                                </div>
                                <div className="flex flex-row space-x-1 cursor-pointer items-center my-2 font-semibold text-gray-600">
                                    {[1, 2].map((star, index) => (
                                        <SolidStarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    {[1, 2, 3].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
                                </div>
                                <div className="flex flex-row space-x-1 cursor-pointer items-center my-2 font-semibold text-gray-600">
                                    {[1].map((star, index) => (
                                        <SolidStarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    {[1, 2, 3, 4].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
                                </div>
                            </div>
                        </>

                        {/* filter by price */}
                        <>
                            <p className="text-gray-700 font-bold">Price</p>
                            <div className="p-2 flex flex-col">
                                <input
                                    type="number"
                                    placeholder="min"
                                    onChange={e=> setMinPrice(e.target.value)}
                                    className="my-2 outline-none border border-gray-200 rounded p-2 text-sm text-gray-700" />
                                <input
                                    type="number"
                                    placeholder="max"
                                    onChange={e=> setMaxPrice(e.target.value)}
                                    className="my-2 outline-none border border-gray-200 rounded p-2 text-sm text-gray-700" />
                                <div className="flex flex-col items-end">
                                    <button onClick={filter_by_price} className="text-sm border bg-white hover:bg-blue-primary hover:text-white border-blue-primary rounded text-blue-primary font-semibold px-2 py-1 uppercase">go</button>
                                </div>
                            </div>
                        </>
                    </div>
                    <div className="flex-1">
                        <SearchInput />
                        {children}
                    </div>
                </div>
            </div>

        </GeneralLayout>
    )
}

export default ExploreLayout
