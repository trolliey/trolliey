import { StarIcon } from '@heroicons/react/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SearchInput from '../components/search/SearchInput'
import { get_all_categories_Action } from '../redux/actions/categoryActions'
import GeneralLayout from './GeneralLayout'

function ExploreLayout({ children }) {
    const _categories = useSelector(state => state.get_all_categories)
    const { cat_loading, categories } = _categories
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    return (
        <GeneralLayout>
            <div className="bg-white md:p-8 p-2 rounded">
                <div className="top w-full flex flex-row md:gap-8 gap-2">
                    <div className="md:w-1/5 md:flex flex-col hidden">
                        {/* <CategoriesDropdown /> */}
                        <p className="text text-gray-700 mt-8 font-semibold pb-4 border-b border-blue-primary">Refine Search</p>
                        {/* // categories */}
                        <>
                            <p className="text-gray-700 font-semibold mt-4">Categories</p>
                            {
                                cat_loading ? (
                                    <p className="text-center text-gray-700 font-semibold my-2">Loading ...</p>
                                ) : (
                                    <>
                                        {
                                            categories?.categories.map((category, index) => (
                                                <div key={index} className="flex text-gray-700 hover:text-gray-900 flex-row items-center p-2 cursor-pointer">
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
                        <>
                            <p className="text-gray-700 font-semibold">Rating</p>
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
                                    {[1,2].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
                                </div>
                                <div className="flex flex-row space-x-1 cursor-pointer items-center my-2 font-semibold text-gray-600">
                                    {[1, 2].map((star, index) => (
                                        <SolidStarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    {[1,2,3].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
                                </div>
                                <div className="flex flex-row space-x-1 cursor-pointer items-center my-2 font-semibold text-gray-600">
                                    {[1].map((star, index) => (
                                        <SolidStarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    {[1,2,3,4].map((star, index) => (
                                        <StarIcon key={index} height={20} width={20} className="text-yellow-500" />
                                    ))}
                                    <p className="text-xs">& Up</p>
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
