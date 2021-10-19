import React, { useState } from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import CartSidebar from '../cart_sidebar/CartSidebar'
import { useHistory } from 'react-router'
import UserDropdown from '../dropdowns/UserDropdown'
import MobileNavDrawer from '../drawers/MobileNavDrawer'
import logo from '../../assets/logo.png'

function GeneralNavbar() {

    const _add_to_cart = useSelector(state => state.add_to_cart)
    const { basket } = _add_to_cart
    const [open_cart, setOpenCart] = useState(false)
    const history = useHistory()

    const toggle_cart = () => {
        !open_cart ? setOpenCart(true) : setOpenCart(false)
    }

    return (
        <div className="bg-white shadow flex flex-row items-center h-16 lg:px-32 md:px-16 px-2 space-x-4">
            <div onClick={() => history.push('/')} className="uppercase cursor-pointer font-bold text-sm text-gray-700 flex flex-row items-center">
                <img src={logo} alt="logo representing the website icon" className="h-32" />
            </div>
            <div className="flex-1"></div>
            <div className="md:flex hidden relative p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <HeartIcon height={20} width={20} className="text-gray-700" />
                <span className="absolute right-0 top-0 rounded-full bg-blue-primary w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                    0
                </span>
            </div>
            <div onClick={toggle_cart} className="relative flex p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <ShoppingCartIcon height={20} width={20} className="text-gray-700" />
                <span className="absolute right-0 top-0 rounded-full bg-blue-primary w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                    {basket?.length}
                </span>
            </div>

            {/* //dropdown when suer icon has been presses */}
            <div className="md:flex hidden rounded-full cursor-pointer">
                <UserDropdown user={false} />
            </div>

            {/* //drawer when on moblie view */}
            <div className="md:hidden flex">
                <MobileNavDrawer />
            </div>

            {/* //sidebar when cart is open */}
            <div>
                <CartSidebar open={open_cart} setOpen={setOpenCart} cart={basket} />
            </div>
        </div>
    )
}

export default GeneralNavbar
