import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { SearchIcon, PlusIcon } from '@heroicons/react/outline'
import BlueButton from '../components/buttons/BlueButton'
import InventoryTable from '../components/tables/InventoryTable'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_store_products_Actions } from '../redux/actions/storeActions'
import { Spinner } from '@chakra-ui/react'

function Inventory() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const _store_p = useSelector(state => state.get_store_products)
    const { loading, products, error } = _store_p

    const search_items_handler = (e) => {
        e.preventDefault()
        setQuery('')
        console.log(query)
    }

    useEffect(() => {
        dispatch(get_store_products_Actions(userInfo?.user?._id))
    }, [dispatch, userInfo?.user?._id])

    return (
        <DashboardLayout>
            <div className="p-4">
                <div className="grid md:grid-cols-3 grid-cols-1 flex-row items-center mb-8">
                    <p className="col-span-1 text-lg text-gray-700 font-semibold md:flex hidden">Your Inventory</p>
                    <div className="md:col-span-2 col-span-1 flex flex-row items-center">
                        <form onSubmit={search_items_handler} className="bg-white flex rounded flex-row items-center mr-2 flex-1">
                            <button type="submit" className="span px-2 outline-none border-none">
                                <SearchIcon className="text-gray-400 " height={16} width={16} />
                            </button>
                            <input
                                type="text"
                                name="search"
                                value={query}
                                id="search"
                                className="bg-white px-2 flex-1 md:p-3 p-2 rounded outline-none"
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Search Product"
                            />
                        </form>
                        <BlueButton
                            onClick={() => history.push('/dashboard/addproduct')}
                            className={'hover:text-white text-blue-primary'}
                            text={<div className="flex flex-row items-center">
                                <p className="text-sm mr-2">Add</p>
                                <PlusIcon height={12} width={12} />
                            </div>}
                            outline
                        />
                    </div>
                </div>

                {
                    loading ? (
                        <div className="grid items-center justify-center w-full min-h-screen">
                            <Spinner 
                                colorScheme="blue"
                                size="xl"
                                thickness={3}
                            />
                        </div>
                    ) : error ? (
                        <p className="text-center text-gray-700 font-semibold text-lg my-2 py-2 bg-red-100 rounded">There seems to be an error loading your products. Try reloading your page</p>
                    ) : (
                        <>
                            <InventoryTable data={products} />
                        </>
                    )
                }
            </div>
        </DashboardLayout>
    )
}

export default Inventory
