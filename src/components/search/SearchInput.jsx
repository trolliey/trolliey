import React, { useState } from 'react'
import { data } from '../../utils/data'
import BlueButton from '../buttons/BlueButton'

function SearchInput() {
    const [search_query, setSearchQuery] = useState('')
    const [search_category, setSearchCategory] = useState('')

    const search_handler = () => {
        console.log(search_category, search_query)
    }

    return (
        <div className="flex flex-row items-center">
            <div className="flex flex-row search_and_dropdown border items-center border-gray-300 w-full rounded mr-2">
                <select 
                    onChange={e => setSearchCategory(e.target.value)} 
                    name="categories" 
                    id="categories" 
                    className="md:block hidden outline-none border-none md:p-3 p-2 mr-3 text-xs font-semibold text-gray-700 rounded">
                    {data.categories.map((category, index) => (
                        <option key={index} value={category.value}>{category.name}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search Product Here..."
                    className="md:p-3 p-2 text-xs rounded-r border-l border-gray-200 flex-1 outline-none"
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            <BlueButton text="Search" onClick={search_handler} />
        </div>
    )
}

export default SearchInput
