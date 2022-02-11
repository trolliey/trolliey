import { ArrowLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close_chat_Action, send_message_Action } from '../../redux/actions/chatActions'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { apiUrl } from '../../utils/apiUrl'
import axios from 'axios'
import { socket } from '../../utils/socket'


function ChatBody() {
    const [body, setBody] = useState('')
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user //logged in user
    const { id } = useParams() //user to send message to
    const [rows, setRows] = useState(1);
    const _message = useSelector(state => state.send_message)
    const { send_loading } = _message

    //to gert all messaged
    const [page_loading, setPageLoading] = useState(false)
    const [all_messages, setAllMessages] = useState([])

    useEffect(() => {
        const rowlen = body.split("\n");

        if (rowlen.length > 1) {
            setRows(rowlen.length);
        }
    }, [body]);

    useEffect(() => {
        //get user data from async strage
        setPageLoading(true)
        axios.get(`${apiUrl}/chat/messages/${id}/${userInfo?.user?._id}`, {
            headers: {
                Authorization: userInfo?.token
            }
        }).then(res => {
            setAllMessages(res.data.messages)
            setPageLoading(false)
        })
    }, [id, userInfo?.token, userInfo?.user?._id])

    useEffect(() => {
        socket.on('message', data => {
            setAllMessages((old_messages) => [...old_messages, data])
        })
        // eslint-disable-next-line
    }, [socket])

    const dispatch = useDispatch()

    const close_chat = () => {
        dispatch(close_chat_Action())
    }

    const sentMessage = () => {
        if (body === '') {
            console.log('empty body')
        } else {
            dispatch(send_message_Action(id, userInfo?.token, body))
            setBody('')
        }
    }

    return (
        <div className="flex flex-col w-full md:p-4 p-2 md:h-full h-full">
            <div onClick={close_chat} className="md:hidden flex py-4 mb-2 border-b border-gray-300 flex-row items-center">
                <ArrowLeftIcon height={16} width={16} className='text-gray-700 mr-2' />
                <p className="text-gray-700 text-sm">Close chat</p>
            </div>
            {
                id ? (
                    <>
                        <div className="flex-1"></div>
                        {page_loading ? (
                            <p className="text-center my-16 text-lg font-semibold text-gray-700">Loading ...</p>
                        ) : (
                            <>
                                {
                                    all_messages?.map((message, index) => (
                                        <div key={index} className="flex flex-col">
                                            {
                                                message.sent_by === userInfo?.user?._id ? (
                                                    <SentMessage message={message.body} time={message.createdAt} />
                                                ) : (
                                                    <ReceivedMessage message={message.body} time={message.createdAt} />
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </>
                        )}
                        <div className="text-gray-700 rounded-full bottom-4 w-full mt-4 flex flex-row  pb-8 self-end">
                            <textarea
                                rows={rows}
                                type="text"
                                className="py-3 px-4 rounded-lg flex-1 align-bottom outline-none bg-gray-100"
                                placeholder="Type message..."
                                onChange={e => setBody(e.target.value)}
                            />
                            <div className="flex flex-col self-end">
                                <span onClick={send_loading ? () => console.log('loading') : sentMessage} className="cursor-pointer rounded-full bg-blue-900 p-3 ml-2 hover:bg-blue-800">
                                    <ChevronRightIcon height={20} width={20} className="text-white" />
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-lg text-gray-700 font-semibold flex flex-row items-center w-full h-full">
                        <p className="self-center text-center w-full">Click on a chat to start talking</p>
                    </div>
                )
            }
        </div>
    )
}

export default ChatBody
