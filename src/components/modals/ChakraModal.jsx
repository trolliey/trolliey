import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import BlueButton from '../buttons/BlueButton'

function ChakraModal({ body, title, button_text, modal_action, isOpen, onClose }) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {body}
                    </ModalBody>

                    <ModalFooter>
                        <div className="mr-2">
                            <BlueButton text={'Close'} onClick={onClose} outline />
                        </div>
                        <BlueButton text={button_text} onClick={modal_action} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ChakraModal
