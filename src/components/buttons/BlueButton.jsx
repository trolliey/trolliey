import React from 'react'

function BlueButton({outline, text, onClick, className}) {
    return (
        <button 
            onClick={onClick ? onClick : ()=> console.log('no action available')} 
            className={`${className} ${outline ? "text-blue-primary bg-white border hover:bg-blue-primary hover:text-white" : "bg-blue-primary text-white hover:bg-blue-dark "} rounded outline-none border-blue-primary `}>
            <div className="text-sm font-semibold md:p-3 p-2 capitalize">{text}</div>
        </button>
    )
}

export default BlueButton
