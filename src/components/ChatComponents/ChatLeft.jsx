import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_user_chats_Action } from '../../redux/actions/chatActions'
import UserChatItem from './UserChatItem'

function ChatLeft() {

    const _user = useSelector(state => state.user_login)
    const _chats = useSelector(state => state.get_all_chats)
    const { chats, loading } = _chats
    const dispatch = useDispatch()

    const { userInfo } = _user

    useEffect(() => {
        dispatch(get_all_user_chats_Action(userInfo?.token))
    }, [dispatch])

    console.log(chats)

    return (
        <div className="flex flex-col w-full ">
            <div className="input border-t border-gray-100 w-full">
                <input type="text" placeholder="Search..." className="text-gray-700 p-2 bg-gray-100 w-full outline-none border-none" />
            </div>
            {
                loading ? (
                    <p className="text-lg text-gray-700 text-center font-semibold my-4">Loading...</p>
                ) : (
                    <>
                        {
                            chats?.map((chat, index) => (
                                <Fragment key={index}>
                                    <UserChatItem
                                        time={chat.createdAt}
                                        picture={chat.user_picture}
                                        message={chat.last_message}
                                        username={chat.message_username}
                                        not_sent_by_you={chat.sent_by_you}
                                        room_id={chat.room_id}
                                        user_id={chat.user_id}
                                    />
                                </Fragment>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default ChatLeft
