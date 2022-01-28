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
import logo from '../../assets/logo.png'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

function AuthModal({ isOpen, onClose }) {
    const [register_on, setRegisterOn] = useState(false)
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
                    {
                        register_on ? (
                            <>
                                <RegisterModal onClose={onClose} isOpen={isOpen} setRegisterOn={setRegisterOn} register_on={register_on} />
                            </>
                        ) : (
                            <>
                                <LoginModal onClose={onClose} isOpen={isOpen} setRegisterOn={setRegisterOn} register_on={register_on} />
                            </>
                        )
                    }
                </ModalContent>
            </Modal>
        </div>
    );
}

export default AuthModal;
