import React from 'react'
import BlueButton from '../buttons/BlueButton'
import { useHistory } from 'react-router'

function CompareFooter({ items }) {
    const history = useHistory()
    console.log(items)
    return (
        <div className="bottom-0 fixed bg-white border-t border-gray-200 shadow w-full md:px-16 px-4 p-4 items-center">
            <div className="grid grid-cols-4 gap-8 justify-between">
                <div className="col-span-1  flex flex-row items-center">
                    <div className="flex">
                        <img src={items[0]?.pictures?.[0]} alt="" className={'h-12 rounded'} />
                    </div>
                    <div className="flex flex-col ml-4">
                        <p className="text-gray-700 text-sm font-semibold">{items?.[0]?.name}</p>
                        <p className="text-blue-primary font-semibold text-lg">{items?.[0]?.price}</p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-row items-center">
                    <div className="flex">
                        <img src={items[1]?.pictures?.[1]} alt="" className={'h-12 rounded'} />
                    </div>
                    <div className="flex flex-col ml-4">
                        <p className="text-gray-700 text-sm font-semibold">{items?.[1]?.name}</p>
                        <p className="text-blue-primary font-semibold text-lg">{items?.[1]?.price}</p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-row items-center">
                    <div className="flex">
                        <img src={items[2]?.pictures?.[2]} alt="" className={'h-12 rounded'} />
                    </div>
                    <div className="flex flex-col ml-4">
                        <p className="text-gray-700 text-sm font-semibold">{items?.[2]?.name}</p>
                        <p className="text-blue-primary font-semibold text-lg">{items?.[2]?.price}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <BlueButton outline text={'Compare Items'} onClick={() => history.push('/compare')} />
                </div>
            </div>
        </div>
    )
}

export default CompareFooter
