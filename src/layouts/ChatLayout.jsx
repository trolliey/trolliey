import React from 'react'
import GeneralNavbar from '../components/navigation/GeneralNavbar'


function ChatLayout({ children }) {
    return (
        <div>
            <GeneralNavbar />
            <div className="body">
                {children}
            </div>
        </div>
    )
}

export default ChatLayout