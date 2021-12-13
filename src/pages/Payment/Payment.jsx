import { InformationCircleIcon } from '@heroicons/react/solid'
import { Button, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import CustomModal from '../../components/modals/CustomModal'
import Error from '../../components/alerts/Error'

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

    return (
        <GeneralLayout>
            <div className="bg-white">
                <main className="lg:min-h-screen lg:overflow-hidden lg:flex lg:flex-row-reverse">
                    <div className="px-4 py-6 sm:px-6 lg:hidden">
                        <div className="mx-auto flex">
                            <a href="/">
                                <span className="sr-only">Workflow</span>
                                {/* <img
                                    src={logo}
                                    alt="oneroofmarket logo"
                                    className="h-8 w-auto"
                                /> */}
                            </a>
                        </div>
                    </div>

                    <h1 className="sr-only">Checkout</h1>

                    {/* Checkout form */}
                    <section
                        aria-labelledby="payment-heading"
                        className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
                    >
                        <div className="max-w-lg mx-auto">
                            <div className="hidden pt-10 pb-16 lg:flex">
                                <a href="/">
                                    <span className="sr-only">Workflow</span>
                                    {/* <img
                                        src={logo}
                                        alt="oneroofmarket logo"
                                        className="h-8 w-auto"
                                    /> */}
                                </a>
                            </div>

                            <div className="mt-6">
                                <div className="grid grid-cols-12 gap-y-6 gap-x-4">

                                    <div className="col-span-full">
                                        <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                            Name on card
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
                                            Card number
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

                                    <div className="col-span-8 sm:col-span-9">
                                        <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                            Expiration date (MM/YY)
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                onChange={e => setExpiryDate(e.target.value)}
                                                name="expiration-date"
                                                id="expiration-date"
                                                autoComplete="cc-exp"
                                                className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-4 sm:col-span-3">
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                            CVV
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                onChange={e => setCVV(e.target.value)}
                                                name="cvc"
                                                id="cvc"
                                                autoComplete="csc"
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
                                {err && <Error error={err} />}
                                <button
                                    onClick={pay_first}
                                    className="w-full mt-6 bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none">
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
                    </section>
                </main>
            </div>
        </GeneralLayout>
    )
}

export default Payment
