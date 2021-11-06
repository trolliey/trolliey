import React from 'react'
import CategoriesDropdown from '../../components/categories_dropdown/CategoriesDropdown'
import SearchInput from '../../components/search/SearchInput'
import GeneralLayout from '../../layouts/GeneralLayout'
import AllProducts from '../../components/home_sections/AllProducts'

function Explore() {
    return (
        <GeneralLayout>
            <div className="bg-white md:p-8 p-2 rounded">
                <div className="top w-full flex flex-row md:gap-8 gap-2">
                    <div className="md:w-1/5 md:flex flex-col hidden">
                        <CategoriesDropdown />

                        <p className="text text-gray-700 mt-8 font-semibold pb-4 border-b border-blue-primary">Refine Search</p>
                        <p>ads and filters go here</p>
                    </div>
                    <div className="flex-1">
                        <SearchInput />
                        <>
                            <AllProducts cols="lg:grid-cols-4 " />
                        </>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Explore
