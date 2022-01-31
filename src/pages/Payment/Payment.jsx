import { InformationCircleIcon } from '@heroicons/react/solid'
import { Button, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import CustomModal from '../../components/modals/CustomModal'
import Error from '../../components/alerts/Error'
import ecocash from '../../assets/eco_cash.svg'
import { useSelector } from 'react-redux'
import { getBasketTotal } from '../../utils/getBasketTotal'

function Payment() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modal_body, setModalBody] = useState('')
    const [pay_button, setPayButton] = useState()
    const [card_name, setCardName] = useState('')
    const [card_number, setCardNumber] = useState('')
    const [expiry_date, setExpiryDate] = useState('')
    const [cvv, setCVV] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postal_code, setPostalCode] = useState('')
    const [err, setErr] = useState()

    const _add_to_cart = useSelector(state => state.add_to_cart)
    const { basket } = _add_to_cart

    const pay_first = () => {
        if (!card_number || !cvv || !expiry_date) {
            setErr('Please enter all details above')
        } else {
            onOpen()
            setModalBody('Continue to pay $150 for 10 properties?')
            setPayButton(<Button colorScheme="blue" onClick={() => {
                console.log('amount payed')
                console.log(card_name, card_number, expiry_date, cvv, address, city, province, postal_code)
            }}>Confirm</Button>)
        }
    }

    console.log(basket)

    return (
        <GeneralLayout>
            <div className="bg-white">
                <main className="flex md:flex-row flex-col">
                    <div className="lg:min-h-screen lg:overflow-hidden lg:flex lg:flex-row-reverse md:w-3/5 w-full">


                        {/* Checkout form */}
                        <section
                            aria-labelledby="payment-heading"
                            className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
                        >
                            <div className='md:mt-16 mt-4 mx-4'>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive the package.</p>
                            </div>
                            <div className="max-w-lg mx-4">
                                

                                <div className="mt-6">
                                    <div className="grid grid-cols-12 gap-y-6 gap-x-4">

                                        <div className="col-span-full">
                                            <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    onChange={e => setCardName(e.target.value)}
                                                    id="name-on-card"
                                                    name="name-on-card"
                                                    autoComplete="cc-name"
                                                    className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                                Contact Number
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    onChange={e => setCardNumber(e.target.value)}
                                                    id="card-number"
                                                    name="card-number"
                                                    autoComplete="cc-number"
                                                    className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>



                                        <div className="col-span-full">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                Address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    onChange={e => setAddress(e.target.value)}
                                                    id="address"
                                                    name="address"
                                                    autoComplete="street-address"
                                                    className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full sm:col-span-4">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    onChange={e => setCity(e.target.value)}
                                                    id="city"
                                                    name="city"
                                                    className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full sm:col-span-4">
                                            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                                                Province
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    onChange={e => setProvince(e.target.value)}
                                                    id="province"
                                                    name="province"
                                                    className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full sm:col-span-4">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                Postal code
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    onChange={e => setPostalCode(e.target.value)}
                                                    id="postal-code"
                                                    name="postal-code"
                                                    autoComplete="postal-code"
                                                    className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="flex flex-col md:w-2/5 w-full">
                        <p className='text-lg my-4 text-gray-700 font-semibold'>Your Order</p>
                        <div className="grid grid-cols-2 text-gray-700 font-semibold bg-gray-100 p-4">
                            <p>Products</p>
                            <p>Subtotal</p>
                        </div>
                        {
                            basket?.length < 1 ? (
                                <p className="grid grid-cols-2 p-2 bg-gray-50 text-center">
                                    No item in basket
                                </p>
                            ):(
                                <>
                                {
                            basket?.map((item, index) => (
                                <div key={index} className="grid grid-cols-2 p-2 bg-gray-50">
                                    <p className='col-span-1'>{item.name}</p>
                                    <p className='col-span-1'>{item.price}</p>
                                </div>
                            ))
                        }
                                </>
                            )
                        }
                        <div className="grid grid-cols-2 text-gray-700 font-semibold ">
                            <p className='p-4 bg-gray-100'>Total</p>
                            <p className='bg-gray-50 p-4'>{getBasketTotal(basket)}</p>
                        </div>

                        <div className="grid grid-cols-2 text-gray-700 font-semibold mt-6 border-b border-gray-200">
                            <div className="flex col-span-1 bg-gray-100 p-4 cursor-pointer">
                                <img src={ecocash} alt="ecocash logo for choosinf payment method" className='h-4' />
                            </div>
                            <div className="flex col-span-1 bg-gray-50 p-4 cursor-pointer">
                                <img src={ecocash} alt="ecocash logo for choosinf payment method" className='h-4' />
                            </div>
                        </div>

                        <div className="flex flex-col w-full p-4">
                            <p className='text-sm text-gray-500 font-semibold pb-2'>Enter ecocash number:</p>
                            <input type="text" placeholder='07XX7X4XX5' className='border-gray-300 w-full rounded outline-none border p-2' />
                            {err && <Error error={err} />}
                            <button
                                onClick={pay_first}
                                className="w-full mt-6 bg-blue-dark border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-primary focus:outline-none">
                                Pay $50
                            </button>
                            <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
                                <InformationCircleIcon className="w-5 h-5 text-gray-500 mr-1.5" aria-hidden="true" />
                                More info about our packages
                            </p>
                            <CustomModal
                                onOpen={onOpen}
                                onClose={onClose}
                                isOpen={isOpen}
                                modal_body={modal_body}
                                submit_button={pay_button}
                                modal_title={'Confirm payment'}
                            />
                        </div>

                    </div>
                </main>
            </div>
        </GeneralLayout>
    )
}

export default Payment
