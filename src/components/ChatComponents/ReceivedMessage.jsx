import React from 'react'

function ReceivedMessage({message}) {
    return (
        <div className="bg-gray-100 mb-1 text-sm p-1 rounded self-start">
            <p className="text-gray-800 text-sm">{message}</p>
        </div>
    )
}

export default ReceivedMessage
