import { Avatar } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { open_chat_Action } from '../../redux/actions/chatActions'

function UserChatItem({ picture, time, message, not_sent_by_you, username, user_id }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const open_chat = () => {
        dispatch(open_chat_Action())
        history.push(`/chat/${user_id}`)
    }

    return (
        <div onClick={open_chat} className="grid grid-cols-5 border-b gap-2 border-gray-200 p-2 cursor-pointer hover:bg-gray-50 items-center">
            <div className="h-12 w-12 col-span-1 overflow-hidden">
                <Avatar picture={picture} name={username} />
            </div>
            <div className="col-span-4 flex flex-col justify-center overflow-ellipsis">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-700 font-semibold text-sm">{username}</p>
                    <p className="text-xs text-gray-400">{moment(time).fromNow()}</p>
                </div>
                {
                    !not_sent_by_you ? (
                        <p className="truncate text-xs text-gray-600"><span className="text-gray-700 font-semibold">you: </span>{message}</p>
                    ) : (
                        <p className="truncate text-xs text-gray-600">{message}</p>
                    )
                }
            </div>
        </div>
    )
}

export default UserChatItem
