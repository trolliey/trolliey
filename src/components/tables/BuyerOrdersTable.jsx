import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { remove_product_Action } from '../../redux/actions/productActions'
import BlueButton from '../buttons/BlueButton'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import RedButton from '../buttons/RedButton'

function BuyerOrdersTable({ data }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const { isOpen, onOpen, onClose } = useDisclosure()

    const delete_product = (id) => {
        dispatch(remove_product_Action(id, userInfo?.token))
    }

    return (
        <div>

            {/* //on mobile view  */}
            <div className="shadow sm:hidden w-full">
                <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                    {data?.map((product, index) => (
                        <li key={product?._id}>
                            <div className="block px-4 py-4 bg-white hover:bg-gray-50">
                                <span className="flex items-center space-x-4">
                                    <span className="flex-1 flex space-x-2 truncate">
                                        {/* <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                        <p className="flex-shrink-0 h-5 w-5 text-gray-400">{index + 1}</p>
                                        <span className="flex flex-col text-gray-500 text-sm truncate">
                                            <span className="truncate">{'title'}</span>
                                            <span>
                                                <span className="text-gray-900 font-medium">Price - ${'price'}</span>{' '}
                                                {/* {product?.currency} */}
                                            </span>
                                            <span className="truncate">{'category'}</span>
                                            {/* <time dateTime={product?.datetime}>{product?.date}</time> */}
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
                                            items
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            payment
                                        </th>
      
                                        <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                            Status
                                        </th>

                                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data?.map((product, index) => (
                                        <tr key={product?._id} className="bg-white">
                                            <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex">
                                                    <div className="group inline-flex space-x-2 truncate text-sm">
                                                        {/* <CashIcon
                                                    className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                /> */}
                                                        <p className="flex-shrink-0 h-5 w-5 text-gray-400">{index + 1}</p>
                                                        <p className="text-gray-500 truncate group-hover:text-gray-900 flex flex-col space-y-2">
                                                            {
                                                                product?.ordered_products?.map((item, index) => (
                                                                    <div key={index} className="item text-gray-700 font-semibold">
                                                                       {index+1}. {item.name}
                                                                    </div>
                                                                ))
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900 capitalize">
                                                    {
                                                        product.pay_on_delivery ? (
                                                            <p>to pay on delivery</p>
                                                        ) : (
                                                            <p>{product.payment_type}</p>
                                                        )
                                                    }
                                                </p>
                                            </td>
                           

                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                {
                                                    product.status === 'pending' ? (
                                                        <span className='bg-blue-700 text-white text-xs font-semibold py-1 px-2 animate-pulse capitalize rounded-full text-center' >{product.status}</span>
                                                    ):(
                                                        <span className='bg-green-700 text-white text-xs font-semibold py-1 px-2 rounded-full text-center' >{product.status}</span>
                                                    )
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500 mr-2">
                                                <button onClick={() => history.push(`/dashboard/edit-product/${'product?._id'}`)} className="bg-gray-200 outline-none rounded-full p-1 text-gray-500 hover:text-blue-primary">
                                                    <PencilIcon height={12} width={12} className="" />
                                                </button>
                                                <button onClick={onOpen} className="bg-gray-200 outline-none rounded-full p-1 text-gray-500 hover:text-red-400 ml-2">
                                                    <TrashIcon height={12} width={12} className="" />
                                                </button>
                                            </td>
                                            <>

                                                <Modal isOpen={isOpen} onClose={onClose}>
                                                    <ModalOverlay />
                                                    <ModalContent>
                                                        <ModalHeader>Delete Product</ModalHeader>
                                                        <ModalCloseButton />
                                                        <ModalBody>
                                                            <p className='text-center'>Are you sure you want to delete the product</p>
                                                        </ModalBody>

                                                        <ModalFooter>
                                                            <RedButton text={'Close'} colorScheme='blue' mr={3} onClick={onClose} outline />
                                                            <div className="mr-1"></div>
                                                            <RedButton text={'Confirm Delete'} variant='ghost' onClick={() => delete_product('product?._id')} />
                                                        </ModalFooter>
                                                    </ModalContent>
                                                </Modal>
                                            </>
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
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">{'length'}</span> of{' '}
                                        <span className="font-medium">{'length'}</span> results
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
    );
}

export default BuyerOrdersTable;
