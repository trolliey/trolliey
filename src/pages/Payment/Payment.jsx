import { InformationCircleIcon } from '@heroicons/react/solid'
import { Button, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import CustomModal from '../../components/modals/CustomModal'
import Error from '../../components/alerts/Error'
import ecocash from '../../assets/eco_cash.svg'
import { useSelector } from 'react-redux'
import { getBasketTotal } from '../../utils/getBasketTotal'
import PayNow from '../PayNow/PayNow'

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

    const [pay_modal, setPayModalOpen] = useState(false)

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
            <div className="bg-white w-full items-center">
                <main className="flex md:flex-row flex-col items-center">
                    {/* Checkout form */}
                    <section
                        aria-labelledby="payment-heading"
                        className=" p-8 mx-auto"
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
                                    <div onClick={() => setPayModalOpen(true)} className="bg-blue-dark cursor-pointer hover:bg-blue-primary text-white font-semibold w-full col-span-full p-2 rounded text-center flex flex-col items-center">
                                        Pay For Items
                                    </div>
                                    <>
                                        <PayNow isOpen={pay_modal} setIsOpen={setPayModalOpen} items={items} />
                                    </>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </GeneralLayout>
    )
}

export default Payment
