import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider
} from "@chakra-ui/react"
import { UserIcon } from '@heroicons/react/outline'
import UserAvatar from '../user_avatar/UserAvatar'
import Username from '../username/Username'
import { useHistory } from 'react-router'

const dropdown = {
    un_authenticated: [
        { label: 'login', location: '/login' },
        { label: 'register', location: '/register' },
    ]
}

function UserDropdown({ user }) {
    const history = useHistory()
    return (
        <div className="flex">
            <Menu>
                <MenuButton>
                    {
                        user ? (
                            <UserAvatar size="sm" />
                        ) : (
                            <div className="p-2 bg-gray-100 hover:bg-gray-200  rounded-full">
                                <UserIcon height={20} width={20} className="text-gray-700" />
                            </div>
                        )
                    }
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        {
                            user ? (
                                <div onClick={()=> history.push('/dashboard')} className="flex">
                                    <UserAvatar size="sm" />
                                    <Username name={'tatendaZw'} />
                                </div>
                            ) : (
                                <div className="flex">
                                    <UserAvatar size="sm" />
                                    <Username name={'Guest User'} />
                                </div>
                            )
                        }
                    </MenuItem>
                    <MenuDivider />
                    {
                        user ? (
                            <MenuItem>
                                <span className="capitalize text-gray-700 font-semibold">Logout</span>
                            </MenuItem>
                        ) : (
                            <>
                                {
                                    dropdown.un_authenticated.map((option, index) => (
                                        <MenuItem onClick={() => history.push(option.location)} key={index}>
                                            <span className="capitalize">{option.label}</span>
                                        </MenuItem>
                                    ))
                                }
                            </>

                        )
                    }
                </MenuList>
            </Menu>
        </div>
    )
}

export default UserDropdown
