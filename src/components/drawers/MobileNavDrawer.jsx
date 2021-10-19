import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Divider
} from "@chakra-ui/react"
import { MenuIcon } from '@heroicons/react/outline'
import UserAvatar from '../user_avatar/UserAvatar'
import Username from '../username/Username'

function MobileNavDrawer({ user }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <div onClick={onOpen}>
                <MenuIcon height={20} width={20} className="text-gray-700" />
            </div>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <p className="text-lg font-semibold text-gray-700 uppercase mx-auto text-center my-4">logo</p>
                        <Divider />
                        <div className="flex flex-row items-center my-4">
                            <UserAvatar size="sm" />
                            {
                                user ? (
                                    <Username name={'tatendaZw'} />
                                ) : (
                                    <Username name={'Guest User'} />
                                )
                            }
                        </div>
                        <Divider />

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavDrawer
