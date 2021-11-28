import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import {
    UserGroupIcon,
    ClipboardListIcon,
    DatabaseIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import { useHistory } from 'react-router'

const home_links = [
    { heading: 'Products', description: 'All products in the platform show here and you can manage', icon: <DatabaseIcon height={28} width={28} className="text-gray-700" />, location: '/admin/products' },
    { heading: 'Ads', description: 'Add and remove ads from explore page', icon: <ClipboardListIcon height={28} width={28} className="text-gray-700" />, location: '/admin/ads' },
    { heading: 'Users', description: 'Manage users and their roles', icon: <UserGroupIcon height={28} width={28} className="text-gray-700" />, location: '/admin/users' },
    { heading: 'Stores', description: 'Manage individual stores and how they behave', icon: <ShoppingCartIcon height={28} width={28} className="text-gray-700" />, location: '/admin/stores' },
]

function Admin() {
    return (
        <AdminLayout>
            <p className="text-gray-700 text-xl font-semibold text-center mt-8">Welcome to the admin dashboard</p>
            <p className="text-gray-400 text-center text-sm mb-8">What do you want to manage today?</p>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 w-full px-4">
                {
                    home_links?.map((link, index) => (
                        <HomeItem
                            location={link.location}
                            key={index}
                            icon={link.icon}
                            heading={link.heading}
                            description={link.description} />
                    ))
                }
            </div>
        </AdminLayout>
    )
}

const HomeItem = ({ heading, icon, description, location }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push(location)} className="flex p-4 bg-white col-span-1 rounded gap-4 cursor-pointer">
            <div className="flex flex-col">
                <div className="flex flex-col p-2 rounded-full bg-gray-100">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-900 font-semibold text-lg capitalize">{heading}</p>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default Admin
