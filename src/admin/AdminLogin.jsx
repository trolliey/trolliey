import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import GeneralLayout from '../layouts/GeneralLayout'
import { login_user_Action } from '../redux/actions/authActions'
import logo from '../assets/logo.png'
import SuccessAlert from '../components/alerts/SuccessAlert'
import Error from '../components/alerts/Error'
import BlueButton from '../components/buttons/BlueButton'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show_password, setShowPassword] = useState(false)
    const _login = useSelector(state => state.user_login)
    const { message, loading, error } = _login
    const dispatch = useDispatch()
    const history = useHistory()

    const login_user_handler = () => {
        dispatch(login_user_Action(email, password))
    }

    useEffect(() => {
        if (message === 'Login Success!') {
            setTimeout(() => {
                history.push('/admin/home')
            }, 1000);
        }
    }, [history, message])

    return (
        <GeneralLayout no_text>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img src={logo} alt="login page indicator of website" className="mx-auto self-center h-32" />
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Sign in to Admin panel</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="space-y-6" >
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
                                        autoComplete="email"
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
                                                <div onClick={() => setShowPassword(true)} className="cursor-pointer">
                                                    <EyeIcon height={20} width={20} className="text-gray-400" />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            
                            {message && <SuccessAlert message={message} />}
                            {error && <Error error={error} />}
                            <div>
                                <BlueButton text="Sign In" className="w-full" onClick={login_user_handler} loading={loading} />
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </GeneralLayout >
    )
}

export default AdminLogin
