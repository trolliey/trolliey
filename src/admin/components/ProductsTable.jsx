import React, { useState } from "react"
import ProductsDropdown from "./ProductsDropdown"
import { SearchIcon } from "@heroicons/react/outline"
import BlueButton from "../../components/buttons/BlueButton"
import { useDispatch } from "react-redux"
import { set_search_query_Action } from "../../redux/actions/searchAction"
import moment from 'moment'
import BlackButton from "../../components/buttons/BlackButton"

export default function ProductsTable({ products, next_page, prev_page, result }) {
    const [search_query, setSearchQuery] = useState('')
    const dispatch = useDispatch()

    const search_item = () => {
        dispatch(set_search_query_Action(search_query))
    }
    
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <div className="flex flex-row items-center space-x-2 w-full mb-4 ">
                <div className="flex flex-row items-center border border-gray-200 rounded px-4 py-1 flex-1">
                    <SearchIcon height={16} width={16} className="text-gray-300" />
                    <input
                        type="text"
                        placeholder="Search product by name or id"
                        onChange={e => setSearchQuery(e.target.value)}
                        className="p-2 bg-gray-100 flex-1 outline-none border-none" />
                </div>
                <BlueButton text="Search" onClick={search_item} />
            </div>
            <div className="grid grid-cols-5 capitalize py-2 border-b border-gray-300 mb-2 bg-white p-2 rounded-t">
                <div className="flex flex-row col-span-1 items-center gap-4">
                    <div className="text-gray-900 font-semibold">
                        title
                    </div>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900 font-semibold">category</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900 font-semibold">status</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900 font-semibold">created</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900 font-semibold"></p>
                </div>
            </div>
            {
                products?.map((product, index) => (
                    <div key={index} className="grid grid-cols-5 py-2 border-b border-gray-300 mb-2 text-sm items-center">
                        3
                        <div className="flex col-span-1 px-2">
                            <p className="text-gray-700">{product.category}</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-700">{product.status}</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-700">{moment(product.createdAt).fromNow()}</p>
                        </div>
                        <div className="flex col-span-1">
                            <div className="flex flex-col cursor-pointer">
                                <ProductsDropdown id={product._id} owner={product.owner} />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="flex flex-row w-full py-16 justify-between">
                <div className="self-start">
                    {
                        result?.previous ? (
                            <BlackButton
                                text="Previous Page"
                                onClick={prev_page}
                            />
                        ) : <div className="flex"></div>
                    }
                </div>
                <div className="self-end">
                    {
                        result?.next ? (
                            <BlackButton
                                text="Next Page"
                                onClick={next_page} />
                        ) : <div className="flex"></div>
                    }
                </div>
            </div>
        </div>
    )
}
