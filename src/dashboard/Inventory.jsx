import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { SearchIcon } from '@heroicons/react/outline'
import BlueButton from '../components/buttons/BlueButton'
import InventoryTable from '../components/tables/InventoryTable'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_products_for_dashboard_Action } from '../redux/actions/storeActions'
import { Spinner } from '@chakra-ui/react'

function Inventory() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const _store_p = useSelector(state => state.get_dashboard_products)
    const { products, loading } = _store_p

    const search_items_handler = (e) => {
        e.preventDefault()
        setQuery('')
        console.log(query)
    }

    useEffect(() => {
        dispatch(get_products_for_dashboard_Action(userInfo?.user?._id))
    }, [dispatch, userInfo?.user?._id])

    console.log(products)

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
                        <BlueButton text="Add Product" outline onClick={() => history.push('/dashboard/addproduct')} />
                    </div>
                </div>
                {
                    loading ? (
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
