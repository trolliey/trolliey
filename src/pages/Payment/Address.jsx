import { useState } from 'react'
import { useSelector } from 'react-redux'
import telecash_logo from '../../assets/telecash1.png'
import ecocash_logo from '../../assets/eco_cash.svg'
import { apiUrl } from '../../utils/apiUrl'
import axios from 'axios'

function Address({ pay_on_delivery }) {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')

    const [full_name, setFullName] = useState('')
    const [province, setProvince] = useState('')
    const [contact_phone_number, setContactPhoneNumber] = useState('')
    const [method, setMethod] = useState('ecocash')
    const [paying_number, setPayingNumber] = useState('')
    const _add_to_cart = useSelector(state => state.add_to_cart)
    const { basket } = _add_to_cart

    const _user_login = useSelector(state => state.user_login)
    const { userInfo } = _user_login

    const process_payment = () => {
        console.log(full_name, contact_phone_number, address, province, pay_on_delivery, city, paying_number, method)
        axios.post(`${apiUrl}/order/create`, {
            full_name: full_name,
            pay_on_delivery: pay_on_delivery,
            address: address,
            city: city,
            province: province,
            contact_phone_number: contact_phone_number,
            paying_number: paying_number,
            payment_type: method,
            products: basket
        }, {
            headers: {
                Authorization: userInfo?.token
            }
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    console.log(basket)

    return (
        <div className="bg-white w-full items-center">
            <main className="flex md:flex-row flex-col items-center">
                {/* Checkout form */}
                <section
                    aria-labelledby="payment-heading"
                    className="mx-auto"
                >
                    <div className='mt-4 mx-4'>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-500">Address where you want item delivered to and phone number of person to receive the package.</p>
                    </div>
                    <div className="max-w-lg mx-4">

                        <div className="mt-6 flex flex-col">
                            <div className="flex flex-col space-y-4 mb-4">

                                <div className="col-span-full">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            onChange={e => setFullName(e.target.value)}
                                            id="name"
                                            name="name"
                                            autoComplete="cc-name"
                                            className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                        Contact Phone Number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            onChange={e => setContactPhoneNumber(e.target.value)}
                                            id="contact-number"
                                            name="contact-number"
                                            autoComplete="contact-number"
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

                                <div className="flex flex-row items-center gap-4">
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
                                </div>



                                {
                                    pay_on_delivery ? (
                                        <div onClick={process_payment} className="bg-blue-dark cursor-pointer hover:bg-blue-primary text-white font-semibold w-full col-span-full p-2 rounded text-center flex flex-col items-center">
                                            Order Items Now
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex border-t border-gray-300 py-4 flex-col">
                                                <p className='text-gray-700 font-semibold capitalize text-sm'>select payment method <span className='text-gray-500 font-medium'>(if not selected we default to ecocash)</span></p>
                                                <div className="flex flex-row items-center my-4 gap-4">
                                                    <div
                                                        onClick={() => setMethod('ecocash')}
                                                        className={`${method === 'ecocash' ? 'bg-gray-200' : 'bg-white'} p-2 rounded cursor-pointer hover:bg-gray-200`}>
                                                        <img src={ecocash_logo} alt="select telecash payment method" className='h-4' />
                                                    </div>
                                                    <div
                                                        onClick={() => setMethod('telecash')}
                                                        className={`${method === 'telecash' ? 'bg-gray-200' : 'bg-white'} p-1 rounded cursor-pointer hover:bg-gray-200`}>
                                                        <img src={telecash_logo} alt="select telecash payment method" className='h-12' />
                                                    </div>

                                                </div>

                                                <div className="col-span-full">
                                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                                        Paying Number
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            onChange={e => setPayingNumber(e.target.value)}
                                                            id="paying-number"
                                                            name="paying-number"
                                                            className="block w-full border-gray-200 p-2 border outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div onClick={process_payment} className="bg-blue-dark cursor-pointer hover:bg-blue-primary text-white font-semibold w-full col-span-full p-2 rounded text-center flex flex-col items-center">
                                                Pay For Items
                                            </div>
                                        </>
                                    )
                                }
                                <div className="my-4"></div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Address;
