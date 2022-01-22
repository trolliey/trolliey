import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Divider,
    DrawerFooter,
    DrawerHeader
} from "@chakra-ui/react"
import { MenuIcon, ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import UserAvatar from '../user_avatar/UserAvatar'
import Username from '../username/Username'
import logo from '../../assets/full_logo.png'
import { useHistory } from 'react-router-dom'

function MobileNavDrawer({ user }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show_category, setShowCotegory] = useState(false)
    const history = useHistory()

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
                    <DrawerHeader bg={'white'}>

                        {/* <p className="text-lg font-semibold text-gray-700 uppercase mx-auto text-center my-4">logo</p> */}
                        <div className="flex py-2 text-black font-extrabold font-myriad-pro">
                            <img src={logo} alt="logo for mobile drawer" className='h-6' />
                        </div>
                    </DrawerHeader>
                    {
                        show_category ? (
                            <DrawerBody bg={'white'} p={0}>
                                <Divider />
                                <div className="flex flex-row items-center py-4 bg-white mt-4 px-4">
                                    <UserAvatar size="sm" name={user?.user?.displayName} />
                                    {
                                        user ? (
                                            <Username name={user?.user?.displayName} />
                                        ) : (
                                            <Username name={'Guest User'} />
                                        )
                                    }
                                </div>
                                <Divider />
                                <div className="flex flex-row items-center">
                                    <span onClick={() => setShowCotegory(false)} className='ml-2'>
                                        <ArrowLeftIcon height={20} width={20} />
                                    </span>
                                    <p className='font-semibold capitalize text-center my-4 text-gray-700 mx-auto '>a list of categories</p>
                                </div>
                                <div className="px-4">
                                    <p>Category</p>
                                </div>

                            </DrawerBody>
                        ) : (
                            <DrawerBody bg={'gray.200'} p={0}>
                                <Divider />
                                <div className="flex flex-row items-center py-4 bg-white mt-4 px-4">
                                    <UserAvatar size="sm" name={user?.user?.displayName} />
                                    {
                                        user ? (
                                            <Username name={user?.user?.displayName} />
                                        ) : (
                                            <Username name={'Guest User'} />
                                        )
                                    }
                                </div>
                                <Divider />
                                <div onClick={() => history.push('/explore')} className="capitalize text-gray-700 py-4 bg-white px-4 font-semibold flex flex-row items-center justify-between">
                                    <p>explore products</p>
                                    <ChevronRightIcon height={20} width={20} />
                                </div>
                                <Divider />
                                <div onClick={() => setShowCotegory(true)} className="capitalize text-gray-700 py-4 bg-white px-4 font-semibold flex flex-row items-center justify-between">
                                    <p>shop by categories</p>
                                    <ChevronRightIcon height={20} width={20} />
                                </div>
                                <Divider />
                                <div onClick={() => history.push('/dashboard')} className="capitalize text-gray-700 py-4 bg-white px-4 font-semibold flex flex-row items-center justify-between">
                                    <p>Sell on trolliey</p>
                                    <ChevronRightIcon height={20} width={20} />
                                </div>
                                <Divider />
                                <div onClick={() => history.push('/help')} className="capitalize text-gray-700 py-4 bg-white px-4 font-semibold flex flex-row items-center justify-between">
                                    <p>Help</p>
                                    <ChevronRightIcon height={20} width={20} />
                                </div>
                                <Divider />

                                <Divider />
                            </DrawerBody>
                        )
                    }
                    <Divider />
                    <DrawerFooter width={'full'} borderTopColor={'gray.200'}>
                        <div className="flex flex-row items-center justify-between">
                            <div className='flex flex-row items-center border border-gray-300 rounded-full'>
                                <UserCircleIcon height={28} width={28} className='text-gray-700' />
                                <div className='pr-2 font-semibold '>
                                    {
                                        user ? (
                                            <Username name={user?.user?.displayName} />
                                        ) : (
                                            <Username name={'Guest User'} />
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex-1"></div>
                            {
                                user ? (
                                    <p className='font-bold text-gray-700 ml-8'>Logout</p>
                                ) : (
                                    <p className='font-bold text-gray-700 ml-8'>Join/Login</p>
                                )
                            }
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavDrawer
