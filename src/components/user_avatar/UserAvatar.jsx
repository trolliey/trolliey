import React from 'react'
import { Avatar } from "@chakra-ui/react"

function UserAvatar({ size, name, source }) {
    return (
        <div className="flex">
            <Avatar name={name} size={size} src={source} />
        </div>
    )
}

export default UserAvatar
