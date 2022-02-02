import { LockClosedIcon } from '@heroicons/react/solid'
import { Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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

    const [items, setItems] = useState([])

    useEffect(() => {
        basket.map(basket_item => {
            setItems(prevArray => [...prevArray, {
                title: basket_item.name,
                amount: basket_item.price,
                quantity: 1,
                image: basket_item.picture
            }])
        })
    }, [])

    console.log(basket)

    return (
        <GeneralLayout>
            <div className="w-full items-center">
                <main className=" grid grid-cols-4 gap-8  max-w-7xl">
                    {/* Checkout form */}
                    <div className="flex flex-col col-span-3">
                        <div className="flex flex-row items-center bg-white justify-between p-4 w-full mx-auto shadow">
                            <div className="flex flex-row items-center gap-8 overflow-hidden">
                                <div className="picture bg-blue-500 h-16 w-16 rounded-full grid items-center content-center justify-center">
                                    <img src={truck} alt="truck representation" className='w-12 h-12' />
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-gray-700 font-semibold text-sm'>Delivery</p>
                                    <p className='text-gray-400 text-xs'>Courier delivery to your door</p>
                                </div>
                            </div>
                            <BlueButton text={'Deliver My Order'} outline onClick={handle_do_delivery} />
                        </div>
                        {
                            do_delivery && (
                                <Address />
                            )
                        }
                        <div className="flex flex-row items-center bg-white justify-between p-4 w-full mx-auto mt-2 shadow">
                            <div className="flex flex-row items-center gap-8 overflow-hidden">
                                <div className="picture bg-green-500 h-16 w-16 rounded-full grid items-center content-center justify-center">
                                    <img src={truck} alt="truck representation" className='w-12 h-12' />
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-gray-700 font-semibold text-sm'>Collect</p>
                                    <p className='text-gray-400 text-xs'>Collect at our pickup point. Open 6 days a week</p>
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

                    <div className="flex flex-col">
                        <div className="col-span-1 bg-white rounded shadow p-4">
                            <p className='text-gray-800 font-semibold'>Order Summary</p>
                            <div className="flex flex-row items-center text-gray-400 text-sm w-full justify-between font-semibold mt-4">
                                <p>{basket?.length} items</p>
                                <p>$ {getBasketTotal(basket)}</p>
                            </div>
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
