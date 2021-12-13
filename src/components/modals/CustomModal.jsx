import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react"

export default function CustomModal({isOpen, onClose, onOpen, submit_button, modal_body, modal_title }) {
    return (
        <>
            {/* <Button w={"full"} colorScheme="blue" onClick={onOpen}>Open Modal</Button> */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modal_title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {modal_body}
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {submit_button}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}