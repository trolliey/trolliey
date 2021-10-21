import React from 'react'

export default function Error({ error }) {
    return (
        <div className="bg-red-100 text-red-700 text-sm p-2 rounded w-full text-center my-1">
            {error}
        </div>
    )
}