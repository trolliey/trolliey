import React from 'react'
import Footer from '../components/navigation/Footer'
import GeneralNavbar from '../components/navigation/GeneralNavbar'
import CompareFooter from '../components/compare_item/CompareFooter'
import { useSelector } from 'react-redux'

function GeneralLayout({ children, no_text }) {
    const add_to_compare = useSelector(state => state.add_to_compare)
    const { compare_basket } = add_to_compare

    return (
        <div>
            <div className="z-50 sticky top-0 w-full">
                <GeneralNavbar />
            </div>
            <div className="lg:px-0 md:px-16 px-2 bg-gray-100 min-h-screen w-full pb-8 ">
                <div className="max-w-7xl mx-auto bg-gray-100 ">
                    {
                        !no_text && (<p className="flex text-gray-700 text-sm py-4 font-semibold lg:px-8 md:px-4 px-2 bg-gray-100">Free Shipping On All Order Over $100 Code</p>)
                    }
                    {children}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
            <>
                {compare_basket.length > 0 && <CompareFooter items={compare_basket} />}
            </>
        </div>
    )
}

export default GeneralLayout
