import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import BlueButton from '../buttons/BlueButton';
import Error from '../alerts/Error';
import SuccessAlert from '../alerts/SuccessAlert';
import { login_user_Action } from '../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/full_logo.png'

function LoginModal({onClose, isOpen, setRegisterOn}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show_password, setShowPassword] = useState(false)
    const _login = useSelector(state => state.user_login)
    const { message, loading, error } = _login
    const history = useHistory()

    const dispatch = useDispatch()

    const login_user_handler = () => {
        dispatch(login_user_Action(email, password))
    }

    useEffect(() => {
        if (message === 'Login Success!') {
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
    }, [history, message])


    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <div className="flex flex-col justify-center py-4 sm:px-6 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img src={logo} alt="login page indicator of website" className="mx-auto self-center h-16 py-2" />
                            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>

                        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className=" py-8 px-4 sm:rounded-lg sm:px-10">
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

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-primary focus:ring-red-400 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="/register" className="font-medium text-blue-primary hover:text-red-400">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
                                    {message && <SuccessAlert message={message} />}
                                    {error && <Error error={error} />}
                                    <div>
                                        <BlueButton text="Sign In" className="w-full" onClick={login_user_handler} loading={loading} />
                                    </div>
                                    <p onClick={() => setRegisterOn(true)} className="text-center text-gray-500 hover:text-gray-700 font-semibold text-sm my-4 cursor-pointer">Not registered? Register instead!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default LoginModal;
