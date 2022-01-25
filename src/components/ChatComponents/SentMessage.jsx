import moment from 'moment'
import React from 'react'

function SentMessage({ message, time }) {
    return (
        <div className="flex flex-col mb-1">
            <div className="text-white bg-blue-900 text-sm p-1 rounded self-end">
                <p className="text-sm">{message}</p>
            </div>
            <p className="text-xs text-gray-400 self-end">{moment(time).fromNow()}</p>
        </div>
    )
}

export default SentMessage
