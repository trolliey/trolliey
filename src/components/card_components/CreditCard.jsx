import React from 'react'
import { CreditCardIcon } from '@heroicons/react/solid'
import moment from 'moment'

function CreditCard({date, number, type, picture, user_name, bg_color}) {
    return (
        <div className={`${bg_color ? bg_color : 'bg-gradient-to-r from-blue-dark to-blue-primary ' } p-4 rounded-lg flex flex-col w-full space-y-6 justify-between`}>
            <div className="flex flex-row items-center justify-between">
                <CreditCardIcon height={28} width={28} className="text-yellow-300" />
                <img src={picture} alt="ecocash logo on credit card" className="w-24" />
            </div>
            <div className="flex text-white font-semibold text-center font-mono w-full text-xl">
                <p className='text-center mx-auto'>{number}</p>
            </div>
            <div className="flex text-white text-center text-lg font-mono justify-between">
                <div className="flex flex-col text-left">
                    <p className='text-xs uppercase'>Name on {type}</p>
                    <p className='font-medium'>{user_name}</p>
                </div>
                <div className="flex flex-col text-left">
                    <p className='text-xs uppercase'>Date</p>
                    <p className='font-bold'>{moment(date).format('MM/DD/YYYY')}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard