import React, { useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import MobileNavDrawer from '../drawers/MobileNavDrawer'
import logo from '../../assets/logo.png'
import BlueButton from '../buttons/BlueButton'
import NavSearch from '../search/NavSearch'

function ComingSoonNavbar() {

    const _add_to_cart = useSelector(state => state.add_to_cart)
    const { basket } = _add_to_cart
    const [open_cart, setOpenCart] = useState(false)
    const history = useHistory()
    const _logged_in = useSelector(state => state.user_login)
    const { userInfo } = _logged_in

    const toggle_cart = () => {
        !open_cart ? setOpenCart(true) : setOpenCart(false)
    }
    return (

        <div className="bg-white ">
            <div className="md:flex hidden flex-row items-center  h-16 lg:px-0 md:16 md:px-4 px-2 space-x-4 max-w-7xl mx-auto justify-between">
                <div onClick={() => history.push('/')} className="uppercase md:flex hidden cursor-pointer font-bold text-sm text-gray-700 flex flex-row items-center">
                    <img src={logo} alt="logo representing the website icon" className="md:h-32 h-24" />
                </div>
                <div className="flex-1"></div>

                <div className="md:flex hidden">
                    <BlueButton
                        text="Notify Me"
                        outline
                        onClick={() => history.push('/')}
                    />

                </div>
            </div>

            <div className="md:hidden flex flex-row items-center h-16 max-w-7xl mx-auto justify-between">
                <div onClick={() => history.push('/')} className="cursor-pointer mx-auto text-gray-700 flex flex-row items-center">
                    <img src={logo} alt="logo representing the website icon" className="h-32" />
                </div>
            </div>
        </div>

    );
}

export default ComingSoonNavbar;
