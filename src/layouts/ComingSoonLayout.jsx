import React from 'react'
import Footer from '../components/navigation/Footer'
import CompareFooter from '../components/compare_item/CompareFooter'
import { useSelector } from 'react-redux'
import ComingSoonNavbar from '../components/navigation/ComingSoonNavbar'

function ComingSoonLayout({ children }) {

    const add_to_compare = useSelector(state => state.add_to_compare)
    const { compare_basket } = add_to_compare

    return (
        <div>
            <div className="z-50 sticky top-0 w-full">
                <ComingSoonNavbar />
            </div>
            <div className="lg:px-0 md:px-16 px-2 bg-white min-h-screen w-full pb-8 ">
                <div className="max-w-7xl mx-auto ">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ComingSoonLayout;
