import React, { useState } from 'react'
import BlueButton from '../components/buttons/BlueButton'
import AdminLayout from '../layouts/AdminLayout'

function AdminSettings() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const change_details = () =>{
        console.log(username, password)
    }
    
    return (
        <AdminLayout>
            <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Admin Login Info</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">these will be the details u will use to login to admin panel.</p>
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Username
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="max-w-lg block w-full shadow-sm p-2 border sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Password
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            id="last-name"
                                            autoComplete="family-name"
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
        </AdminLayout>
    )
}

export default AdminSettings
