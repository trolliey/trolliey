import React, {useEffect, useState} from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import GeneralLayout from '../../layouts/GeneralLayout'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import logo from '../../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { register_user_Action } from '../../redux/actions/authActions'
import Error from '../../components/alerts/Error'
import SuccessAlert from '../../components/alerts/SuccessAlert'
import { useHistory } from 'react-router'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show_password, setShowPassword] = useState(false)
    const [agreed, setAgreed] = useState(false)
    const dispatch = useDispatch()
    const _register = useSelector(state => state.user_register)
    const { loading, message, error } = _register
    const history = useHistory()

    const register_user_handler = (e) => {
        e.preventDefault()
        dispatch(register_user_Action(username, email, password, agreed))
    }

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                history.push('/login')
            }, 1000);
        }
    }, [message, history])

    return (
        <GeneralLayout no_text>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img src={logo} alt="login page indicator of website" className="mx-auto self-center h-32" />
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Register your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={register_user_handler} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        type="text"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <div className="flex flex-row items-center border border-gray-300 rounded-md shadow-sm px-3 ">

                                        <input
                                            id="password"
                                            name="password"
                                            type={show_password ? "text" : "password"}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                            className="appearance-none block w-full py-2  placeholder-gray-400 focus:outline-none sm:text-sm"
                                        />
                                        {
                                            show_password ? (
                                                <div onClick={() => setShowPassword(false)}>
                                                    <EyeOffIcon height={20} width={20} className="text-gray-400" />
                                                </div>
                                            ) : (
                                                <div onClick={() => setShowPassword(true)}>
                                                    <EyeIcon height={20} width={20} className="text-gray-400" />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        value={agreed}
                                        onChange={e => setAgreed(e.target.checked)}
                                        className="h-4 w-4 text-blue-primary focus:ring-red-400 border-gray-300 rounded"
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                        I agree to the terms and conditions
                                    </label>
                                </div>

                            </div>
                            {error && <Error error={error} />}
                            {message && <SuccessAlert message={message} />}
                            <div>
                                <BlueButton text="Register" className="w-full" loading={loading} />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Register
