import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardLayout from '../layouts/DashboardLayout'
import { Spinner } from '@chakra-ui/react'
import { get_store_products_Actions } from '../redux/actions/storeActions'
import BlueButton from '../components/buttons/BlueButton'
import SuccessAlert from '../components/alerts/SuccessAlert'
import Error from '../components/alerts/Error'

function UserSettings() {
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const dispatch = useDispatch()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postal, setPostal] = useState('')
    const _create = useSelector(state => state.create_store)
    const { edit_loading, message, edit_error } = _create
    const _info = useSelector(state => state.get_store_products)
    const { loading, products } = _info

    useEffect(() => {
        dispatch(get_store_products_Actions(userInfo?.user?._id))
    }, [dispatch, userInfo?.user?._id])

    const change_details = (e) => {
        e.preventDefault()
        console.log('details changed')
    }

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex-1 h-full min-h-screen w-full grid items-center justify-center">
                    <Spinner
                        thickness={0.7}
                        size="lg"
                    />
                </div>
            </DashboardLayout>

        )
    }

    return (
        <DashboardLayout>
            <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        First name
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            value={firstname}
                                            onChange={e => setFirstname(e.target.value)}
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="max-w-lg block w-full shadow-sm p-2 border sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Last name
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            value={lastname}
                                            onChange={e => setLastname(e.target.value)}
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Email address
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="block max-w-lg w-full shadow-sm border p-2 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Country / Region
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            value={country}
                                            onChange={e => setCountry(e.target.value)}
                                            className="max-w-lg block border p-2 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option>Zimbabwe</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Street address
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            value={street}
                                            onChange={e => setStreet(e.target.value)}
                                            autoComplete="street-address"
                                            className="block max-w-lg w-full shadow-sm border p-2 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        City
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        State / Province
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            value={province}
                                            onChange={e => setProvince(e.target.value)}
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        ZIP / Postal
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="zip"
                                            id="zip"
                                            value={postal}
                                            onChange={e => setPostal(e.target.value)}
                                            autoComplete="postal-code"
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <div className="flex mr-2">
                                <BlueButton text="Cancel" outline />
                            </div>
                            <div className="flex">
                                <BlueButton text="Save" onClick={change_details} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    )
}

export default UserSettings
