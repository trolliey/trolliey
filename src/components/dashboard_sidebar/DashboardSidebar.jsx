import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    CogIcon,
    CreditCardIcon,
    XIcon,
    ClipboardListIcon,
    UserIcon,
    ShoppingBagIcon,
    ClockIcon,
    TemplateIcon,
    TrendingUpIcon
} from '@heroicons/react/outline'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/icon.png'
import { useSelector } from 'react-redux'

const navigation = [
    { name: 'Home', href: '/dashboard', icon: TemplateIcon, current: false },
    { name: 'Inventory', href: '/dashboard/inventory', icon: ClipboardListIcon, current: false },
    { name: "Customers Orders", href: '/dashboard/orders', icon: ShoppingBagIcon, current: false },
    // { name: 'History', href: '/dashboard/history', icon: ClockIcon, current: false },
    // { name: 'Balances', href: '/dashboard/balances', icon: ScaleIcon, current: false },
    { name: 'Cards', href: '/dashboard/cards', icon: CreditCardIcon, current: false },
    { name: 'Reports', href: '/dashboard/reports', icon: TrendingUpIcon, current: false },
    // { name: 'Recipients', href: '/dashboard/receipts', icon: UserGroupIcon, current: false },
    { name: 'Store Settings', href: '/dashboard/settings', icon: CogIcon },
]
const secondaryNavigation = [
    { name: 'My Orders', href: '/dashboard/buyer-orders', icon: ShoppingBagIcon, current: false },
    { name: 'User Settings', href: '/dashboard/usersettings', icon: UserIcon },

]

const buyer_navigation = [
    { name: 'Home', href: '/dashboard/buyer-home', icon: TemplateIcon, current: false },
    { name: 'My Orders', href: '/dashboard/buyer-orders', icon: ShoppingBagIcon, current: false },
    { name: 'Purchase History', href: '/dashboard/buyer-products', icon: ClockIcon, current: false },
    { name: 'User Settings', href: '/dashboard/usersettings', icon: UserIcon },
]

function DashboardSidebar({ sidebarOpen, setSidebarOpen }) {

    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user

    console.log(userInfo?.user.role)

    const location = useLocation()

    return (
        <div className="h-screen bg-blue-primary">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-primary">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <Link to='/' className="cursor pointer flex-shrink-0 flex items-center px-4">
                                <img src={logo} alt="dashboard indicator of site name" className="self-center mx-auto h-28 my-4" />
                            </Link>
                            {
                                userInfo?.user.role === 'user' ? (
                                    <nav className="mt-5 flex-shrink-0 h-full divide-y divide-blue-dark overflow-y-auto" aria-label="Sidebar">
                                        <div className="px-2 space-y-1">
                                            {buyer_navigation.map((item) => (
                                                <Link to={item.href}
                                                    key={item.name}
                                                    className={`${location.pathname === item.href ? "bg-blue-dark" : "bg-blue-primary"} text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                                                >
                                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>

                                    </nav>
                                ) : (
                                    <nav className="mt-5 flex-shrink-0 h-full divide-y divide-blue-dark overflow-y-auto" aria-label="Sidebar">
                                        <div className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <Link to={item.href}
                                                    key={item.name}
                                                    className={`${location.pathname === item.href ? "bg-blue-dark" : "bg-blue-primary"} text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                                                >
                                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                       
                                        <div className="mt-6 pt-6">
                                            <div className="px-2 space-y-1">
                                                {secondaryNavigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:text-white hover:bg-blue-dark"
                                                    >
                                                        <item.icon className="mr-4 h-6 w-6 text-white" aria-hidden="true" />
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </nav>
                                )
                            }
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow bg-blue-primary pt-5 pb-4 overflow-y-auto">
                        <Link to='/' className="flex items-center flex-shrink-0">
                            <img src={logo} alt="dashboard indicator of site name" className="py-2 h-28 self-center mx-auto" />
                        </Link>
                        {
                            userInfo?.user.role === 'user' ? (
                                <nav className="mt-5 flex-1 flex flex-col divide-y divide-blue-dark overflow-y-auto" aria-label="Sidebar">
                                    <div className="px-2 space-y-1">
                                        {buyer_navigation.map((item) => (
                                            <Link to={item.href}
                                                key={item.name}
                                                className={`${location.pathname === item.href ? "bg-blue-dark" : "bg-blue-primary hover:bg-blue-dark "} text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                                            >
                                                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                </nav>
                            ) : (
                                <nav className="mt-5 flex-1 flex flex-col divide-y divide-blue-dark overflow-y-auto" aria-label="Sidebar">
                                    <div className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link to={item.href}
                                                key={item.name}
                                                className={`${location.pathname === item.href ? "bg-blue-dark" : "bg-blue-primary hover:bg-blue-dark "} text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                                            >
                                                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                   
                                    <div className="mt-6 pt-6">
                                        <div className="px-2 space-y-1">
                                            {secondaryNavigation.map((item) => (
                                                <Link key={item.name} to={item.href}
                                                    href={item.href}
                                                    className={`${location.pathname === item.href ? "bg-blue-dark" : "bg-blue-primary hover:bg-blue-dark "} group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white `}
                                                >
                                                    <item.icon className="mr-4 h-6 w-6 text-white" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </nav>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar
