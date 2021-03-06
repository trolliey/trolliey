/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { apiUrl } from '../../utils/apiUrl'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductsDropdown({ id, owner }) {
    const history = useHistory()
    const toast = useToast()
    const make_featured = () => {
        axios.post(`${apiUrl}/featured/create/${id}`).then(res => {
            toast({
                title: 'Featured created.',
                description: "Item is now featured.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        })
    }

    const make_special = () => {
        axios.post(`${apiUrl}/special/create/${id}`).then(res => {
            toast({
                title: 'Special created.',
                description: "Item is now special.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        })

    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex z-10 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    Options
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => history.push(`/product/description/${id}`)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    View Product
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => history.push(`/stores/single/${owner}`)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    View Seller
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={make_special}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Make Special
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={make_featured}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Make Featured
                                </div>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >
                                        Block Product
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProductsDropdown
