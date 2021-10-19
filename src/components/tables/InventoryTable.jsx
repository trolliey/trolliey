import { ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import BlueButton from '../buttons/BlueButton'

const products = [
    {
        id: 1,
        name: 'Nike shoes',
        brand: 'Nike',
        price: '$20,000',
        category: 'Fashion and beauty',
        stock: '12',
        orders: '2',
        datetime: '2020-07-11',
        date: 'July 11, 2020',
        msrment: '',
        status: 'public',
        currency: 'USD'
    },
    {
        id: 2,
        name: 'Nike shoes',
        brand: 'Nike',
        price: '$20,000',
        category: 'Fashion and beauty',
        stock: '22',
        orders: '20',
        datetime: '2020-07-11',
        date: 'July 11, 2020',
        msrment: '',
        status: 'out_of_stock',
        currency: 'USD'
    },
]

const statusStyles = {
    public: 'bg-green-100 text-green-800',
    out_of_stock: 'bg-yellow-100 text-yellow-800',
    private: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function InventoryTable() {
    const all_length = 200
    return (
        <div>

            {/* //on mobile view  */}
            <div className="shadow sm:hidden">
                <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                    {products?.map((product, index) => (
                        <li key={product.id}>
                            <div className="block px-4 py-4 bg-white hover:bg-gray-50">
                                <span className="flex items-center space-x-4">
                                    <span className="flex-1 flex space-x-2 truncate">
                                        {/* <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                        <p className="flex-shrink-0 h-5 w-5 text-gray-400">{index + 1}</p>
                                        <span className="flex flex-col text-gray-500 text-sm truncate">
                                            <span className="truncate">{product.name}</span>
                                            <span>
                                                <span className="text-gray-900 font-medium">{product.price}</span>{' '}
                                                {product.currency}
                                            </span>
                                            <span className="truncate">{product.category}</span>
                                            {/* <time dateTime={product.datetime}>{product.date}</time> */}
                                        </span>
                                    </span>
                                    <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

                <nav
                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                    aria-label="Pagination"
                >
                    <div className="flex-1 flex justify-between">
                        <div className="flex mr-2">
                            <BlueButton text="Previous" outline />
                        </div>
                        <div className="flex">
                            <BlueButton text="Next" />
                        </div>
                    </div>
                </nav>
            </div>

            {/* Activity table (small breakpoint and up) */}
            <div className="hidden sm:block">
                <div className="max-w-6xl mx-auto ">
                    <div className="flex flex-col mt-2">
                        <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            product
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            category
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            stock
                                        </th>
                                        <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Orders
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products?.map((product, index) => (
                                        <tr key={product.id} className="bg-white">
                                            <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex">
                                                    <div className="group inline-flex space-x-2 truncate text-sm">
                                                        {/* <CashIcon
                                                            className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                            aria-hidden="true"
                                                        /> */}
                                                        <p className="flex-shrink-0 h-5 w-5 text-gray-400">{index + 1}</p>
                                                        <p className="text-gray-500 truncate group-hover:text-gray-900">{product.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900">{product.category}</p>
                                            </td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                <span className="text-gray-900 font-medium">{product.stock} </span>
                                                {product.msrment}
                                            </td>
                                            <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                                <span
                                                    className={classNames(
                                                        statusStyles[product.status],
                                                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                                    )}
                                                >
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                <span >{product.orders}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500 mr-2">
                                                <button className="bg-gray-200 outline-none rounded-full p-1 text-gray-500 hover:text-blue-primary">
                                                    <PencilIcon height={12} width={12} className="" />
                                                </button>
                                                <button className="bg-gray-200 outline-none rounded-full p-1 text-gray-500 hover:text-red-400 ml-2">
                                                    <TrashIcon height={12} width={12} className="" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination */}
                            <nav
                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                aria-label="Pagination"
                            >
                                <div className="hidden sm:block">
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">{products?.length}</span> of{' '}
                                        <span className="font-medium">{all_length}</span> results
                                    </p>
                                </div>
                                <div className="flex-1 flex justify-between sm:justify-end">
                                    <div className="flex mr-2">
                                        <BlueButton text="Previous" outline />
                                    </div>
                                    <div className="flex">
                                        <BlueButton text="Next" />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InventoryTable
