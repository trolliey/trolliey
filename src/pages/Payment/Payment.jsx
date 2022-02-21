import { LockClosedIcon } from '@heroicons/react/solid'
import { Avatar, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import { useSelector } from 'react-redux'
import { getBasketTotal } from '../../utils/getBasketTotal'
import BlueButton from '../../components/buttons/BlueButton'
import truck from '../../assets/delivery-truck.png'
import Address from './Address'
import PickUpLocation from './PickUpLocation'

function Payment() {
    // for delivery input
    const [do_delivery, setDoDelivery] = useState(false)
    const [do_collection, setDoCollection] = useState(false)
    const [pay_on_delivery, setPayOnDelivery] = useState(false)

    const handle_do_delivery = () => {
        do_delivery ? setDoDelivery(false) : setDoDelivery(true)
        setDoCollection(false)
    }

    const handle_do_collection = () => {
        do_collection ? setDoCollection(false) : setDoCollection(true)
        setDoDelivery(false)
    }

    const _add_to_cart = useSelector(state => state.add_to_cart)
    const { basket } = _add_to_cart


    return (
        <GeneralLayout>
            <div className="w-full items-center">
                <main className=" flex md:flex-row flex-col-reverse  gap-8  max-w-7xl">
                    {/* Checkout form */}
                    <div className="flex flex-col md:w-3/4 w-full">
                        <div className="flex flex-row items-center bg-white justify-between md:p-4 p-2 w-full mx-auto shadow">
                            <div className="flex flex-row items-center md:gap-8 gap-4 overflow-hidden">
                                <div className="picture bg-blue-500 h-16 w-16 rounded-full grid items-center content-center justify-center">
                                    <img src={truck} alt="truck representation" className='w-12 h-12' />
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-gray-700 font-semibold text-sm'>Delivery</p>
                                    <p className='text-gray-400 text-xs'>Courier delivery to your door</p>
                                </div>
                            </div>
                            <BlueButton
                                text={'Deliver My Order'}
                                outline
                                onClick={handle_do_delivery}
                            />
                        </div>
                        {
                            do_delivery && (
                                <div className='bg-white w-full'>
                                    <div className="flex flex-col px-16 py-4">
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-4">
                                            Do you want to pay on delivery? <span className='text-red-600'>*</span>
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="flex items-center p-3 rounded bg-gray-100">
                                                <input
                                                    id="stock_handle"
                                                    name="stock_handle"
                                                    type="radio"
                                                    value={'stock_handled_by_self'}
                                                    onChange={() => setPayOnDelivery(true)}
                                                    className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                    required
                                                />
                                                <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                    I want to pay on delivery
                                                </label>
                                            </div>
                                            <div className="flex items-center p-3 rounded bg-gray-100 mt-2">
                                                <input
                                                    id="stock_handle"
                                                    name="stock_handle"
                                                    type="radio"
                                                    value={'stock_handled_by_trolliey'}
                                                    onChange={() => setPayOnDelivery(false)}
                                                    className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                    required
                                                />
                                                <label htmlFor="push-nothing" className="ml-3 block text-sm font-semibold text-gray-700">
                                                    I want to pay online
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <Address pay_on_delivery={pay_on_delivery} />
                                </div>
                            )
                        }
                        <div className="flex flex-row items-center bg-white justify-between md:p-4 p-2 w-full mx-auto mt-2 shadow">
                            <div className="flex flex-row items-center md:gap-8 gap-4 overflow-hidden">
                                <div className="picture bg-green-500 h-16 w-16 rounded-full grid items-center content-center justify-center">
                                    <img src={truck} alt="truck representation" className='w-12 h-12' />
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-gray-700 font-semibold text-sm'>Collect</p>
                                    <p className='text-gray-400 text-xs'>Collect at our pickup point.</p>
                                </div>
                            </div>
                            <BlueButton text={'Collect My Order'} onClick={handle_do_collection} outline />
                        </div>
                        {
                            do_collection && (
                                <PickUpLocation />
                            )
                        }
                    </div>

                    <div className="md:w-1/4 w-full flex flex-col">
                        <div className="bg-white rounded shadow p-4 w-full">
                            <p className='text-gray-800 font-semibold'>Order Summary</p>
                            <div className="flex flex-row items-center text-gray-400 text-sm w-full justify-between font-semibold mt-4">
                                <p>{basket?.length} items</p>
                                <p>$ {getBasketTotal(basket)}</p>
                            </div>
                            <Divider className='my-4 text-gray-500' color={'gray.400'} />
                            {basket?.map((item, index)=>(
                                <div key={index} className="flex flex-1 flex-row md:gap-4 gap-2 items-center w-full">
                                    <Avatar src={item.picture} />
                                    <div className="flex flex-col">
                                        <p className='text-gray-900 font-semibold'>{item.name}</p>
                                        <p className='text-sm text-gray-500'>{item.price}</p>
                                    </div>
                                    <div className="flex-1"></div>
                                    {/* <div className="ml-auto">
                                        <input type="number" defaultValue={1} />
                                    </div> */}
                                </div>  
                            ))}
                            <Divider className='my-4 text-gray-500' color={'gray.400'} />
                            <div className="flex flex-row items-center w-full justify-between font-semibold mt-4">
                                <p className='text-gray-800 font-bold'>TO PAY</p>
                                <p className='text-blue-primary font-bold'>$ {getBasketTotal(basket)}</p>
                            </div>
                            <Divider className='mt-4 mb-2 text-gray-500' color={'gray.400'} />
                            <div className="flex justify-center flex-row items-center">
                                <LockClosedIcon className='text-gray-500' height={12} width={12} />
                                <p className='text-sm text-gray-500 font-semibold'>Secure Checkout</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </GeneralLayout>
    )
}

export default Payment
