import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { SearchIcon } from '@heroicons/react/outline'
import BlueButton from '../components/buttons/BlueButton'
import InventoryTable from '../components/tables/InventoryTable'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react'
import { PlusIcon } from '@heroicons/react/solid'
import useSWR from 'swr'
import { apiUrl } from '../utils/apiUrl'

function Inventory() {
    const history = useHistory()
    const [query, setQuery] = useState('')
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user

    const { data: products  } = useSWR(`${apiUrl}/store/seller/${userInfo?.user?._id}`)

    const search_items_handler = (e) => {
        e.preventDefault()
        setQuery('')
    }

    return (
        <DashboardLayout>
            <div className="p-4">
                <div className="grid md:grid-cols-4 grid-cols-1 flex-row items-center mb-8">
                    <p className="col-span-1 text-lg text-gray-700 font-semibold md:flex hidden">Your Inventory</p>
                    <div className="md:col-span-2 col-span-1 flex flex-row items-center">
                        <form onSubmit={search_items_handler} className="bg-white flex rounded flex-row items-center mr-2 flex-1">

                            <input
                                type="text"
                                name="search"
                                value={query}
                                id="search"
                                className="bg-white px-2 flex-1 md:p-3 p-2 rounded outline-none"
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Search Product"
                            />
                            <button type="submit" className="span px-2 outline-none border-none">
                                <SearchIcon className="text-gray-400 " height={16} width={16} />
                            </button>
                        </form>

                    </div>
                    <div className="col-span-1 justify-end self-end ml-auto">
                        <BlueButton text={<div className='flex flex-row items-center'>
                            <PlusIcon className='text-white' height={16} width={16} />
                            <p>Add Product</p>
                        </div>} onClick={() => history.push('/dashboard/addproduct')} />
                    </div>
                </div>
                {
                    !products ? (
                        <div className='grid items-center content-center justify-center min-h-96'>
                            <Spinner />
                        </div>
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
