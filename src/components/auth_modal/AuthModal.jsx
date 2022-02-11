import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

function AuthModal({ isOpen, onClose }) {
    const [register_on, setRegisterOn] = useState(false)
    const _login = useSelector(state => state.user_login)
    const { message } = _login

    useEffect(() => {
        if (message === 'Login Success!') {
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
    }, [message])

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
