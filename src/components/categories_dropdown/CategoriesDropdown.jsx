import React, { useState } from 'react'
import { MenuIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { data } from '../../utils/data'
import { useHistory } from 'react-router'

function CategoriesDropdown({open}) {
    const [show_categories, setShowCategories] = useState(open)
    const history = useHistory()
    return (
        <div onClick={show_categories ? () => setShowCategories(false) : () => setShowCategories(true)} className="w-full relative flex flex-col">
            <button className="flex flex-row items-center w-full justify-around bg-blue-primary md:p-3 p-2 rounded outline-none border-none">
                <MenuIcon className="text-white " height={16} width={16} />
                <p className="lg:flex md:hidden hidden capitalize text-white text-sm font-semibold">shop by categories</p>
                <p className="lg:hidden md:flex hidden capitalize text-white text-sm font-semibold">by categories</p>
                <p className="lg:hidden md:hidden hidden capitalize text-white text-sm font-semibold">shop by categories</p>
            </button>
            {
                show_categories ? (
                    <div className="absolute w-full bg-white border border-gray-300 rounded mt-12">
                        {
                            data.categories.map((category, index) => (
                                <div key={index} onClick={() => history.push('/explore')} className="flex flex-row items-center p-2 border-b border-gray-20 cursor-pointer hover:bg-gray-100">
                                    <ArrowRightIcon className="text-gray-700 mr-3" height={12} width={12} />
                                    <p className="text-gray-700 text-sm font-semibold">{category.name}</p>
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
