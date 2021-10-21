import React from 'react'

function SuccessAlert({message}) {
    return (
        <div className="bg-green-100 text-green-700 text-sm p-2 rounded w-full text-center my-1">
            {message}
        </div>
    )
}

export default SuccessAlert
