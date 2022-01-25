import React from 'react'
import { useSelector } from 'react-redux'
import ChatBody from '../../components/ChatComponents/ChatBody'
import ChatLeft from '../../components/ChatComponents/ChatLeft'
import ChatLayout from '../../layouts/ChatLayout'


function Chat() {
    const _toggle_chat = useSelector(state => state.toggle_chat)
    const { chat_state } = _toggle_chat

    return (
        <ChatLayout >
            <div className="w-full md:flex hidden flex-row min-h-screen">
                <div className="w-1/4 border-r border-gray-200" >
                    <ChatLeft />
                </div>
                <div className="w-3/4" >
                    <ChatBody />
                </div>
            </div>
            <div className="md:hidden flex">
                {
                    chat_state === 'open' ? (
                        <div className="w-full min-h-screen flex-col">
                            <ChatBody />
                        </div>
                    ) : (
                        <div className="w-full">
                            <ChatLeft />
                        </div>
                    )
                }
            </div>
        </ChatLayout>
    )
}

export default Chat