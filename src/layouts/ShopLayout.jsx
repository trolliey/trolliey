import React from 'react'
import GeneralLayout from './GeneralLayout'

function ShopLayout({children}) {
    return (
        <GeneralLayout>
            <div className="bg-white p-4 rounded flex w-full">
                {children}
            </div>
        </GeneralLayout>
    )
}

export default ShopLayout
