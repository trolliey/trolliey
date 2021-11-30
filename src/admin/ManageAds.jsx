import React, { useState } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import image from '../assets/main-banner.jpg'
import { PencilIcon } from '@heroicons/react/outline'
import AdsTable from './components/AdsTable'
import AdsModal from './components/AdsModal'

function ManageAds() {
    const [ad_modal, set_ad_Modal_Open] = useState(false)
    const [ad_id, set_Add_id] = useState('')

    const open_big_ad = (id) => {
        set_Add_id(id)
        set_ad_Modal_Open(true)
    }

    return (
        <AdminLayout>
            <p className="text-gray-700 text-lg text-center font-semibold my-8 capitalize">manage all ads on the platform</p>
            <div className="flex flex-col w-full">
                <div className="flex flex-col p-4 bg-white rounded mx-4">
                    <div className="flex w-full justify-between px-8">
                        <p className="text-gray-700 font-semibold capitalize">First-large ad</p>
                        <span onClick={() => open_big_ad('1')} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={'Tatenda Bako'}
                        goes_to={'www.google.com'}
                        added_on={'3 days ago'}
                        remove_on={'4 days'}
                    />
                    <div className="picture items-center mx-auto my-4">
                        <img src={image} alt="banner add for big one" />
                    </div>
                </div>

                <>
                    <AdsModal open={ad_modal} setOpen={set_ad_Modal_Open} ad_id={ad_id} />
                </>
            </div>
        </AdminLayout>
    )
}

export default ManageAds
