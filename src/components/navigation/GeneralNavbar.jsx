import React, { useState } from 'react'
import { ShoppingCartIcon, BellIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import CartSidebar from '../cart_sidebar/CartSidebar'
import { useHistory } from 'react-router'
import UserDropdown from '../dropdowns/UserDropdown'
import MobileNavDrawer from '../drawers/MobileNavDrawer'
import logo from '../../assets/full_logo.png'
import NavSearch from '../search/NavSearch'
import { Tooltip } from '@chakra-ui/react'
import NotificationMenu from '../nav_menus/NotificationMenu'

function GeneralNavbar() {

    const _add_to_cart = useSelector(state => state.add_to_cart)
    const { basket } = _add_to_cart
    const [open_cart, setOpenCart] = useState(false)
    const history = useHistory()
    const _logged_in = useSelector(state => state.user_login)
    const { userInfo } = _logged_in
    const notifications = []

    const [notifications_menu, setOpenNotificationMenu] = useState(false)

    const toggle_cart = () => {
        !open_cart ? setOpenCart(true) : setOpenCart(false)
    }

    return (
        <div className="bg-white shadow ">
            <div className="md:flex hidden flex-row items-center  h-16 lg:px-0 md:16 md:px-4 px-2 space-x-4 max-w-7xl mx-auto justify-between">
                <div onClick={() => history.push('/')} className="uppercase cursor-pointer font-bold text-sm text-gray-700 flex flex-row items-center">
                    <img src={logo} alt="logo representing the website icon" className="h-32" />
                </div>
                <p className='font-semibold text-gray-700 pr-4 border-r border-gray-300 capitalize cursor-pointer'>Help</p>
                {
                    userInfo?.user?.role === 'seller' ? (
                        <div onClick={() => history.push('/dashboard')} className='font-semibold text-gray-700 capitalize cursor-pointer'>Sell on trolliey</div>
                    ) : (
                        <div onClick={() => history.push('/become-a-seller')} className='font-semibold text-gray-700 capitalize cursor-pointer'>Sell on trolliey</div>
                    )
                }
                <div className="flex-1"></div>
                <>
                    <NavSearch />
                </>
                <Tooltip label={'Notifications'} bg='gray.100' color="gray.700" rounded="lg" size="xs">

                    <div onClick={() => !notifications_menu ? setOpenNotificationMenu(true) : setOpenNotificationMenu(false)} className="relative flex p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                        <BellIcon height={20} width={20} className="text-gray-700" />
                        {
                            notifications?.length >= 1 && (
                                <span className="absolute right-0 top-0 rounded-full bg-blue-primary w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                                    {0}
                                </span>
                            )
                        }
                    </div>
                </Tooltip>

                <>
                    <NotificationMenu show={notifications_menu} setShow={setOpenNotificationMenu} />
                </>

                
                {/* //dropdown when suer icon has been presses */}
                <div className="md:flex hidden rounded-full gap-1 cursor-pointer flex-row items-center">
                    <UserDropdown user={userInfo} />
                    <p className='text-gray-700 font-semibold'>{userInfo?.user?.displayName}</p>
                </div>

                <div onClick={toggle_cart} className="relative flex p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    <ShoppingCartIcon height={20} width={20} className="text-gray-700" />
                    {
                        basket?.length >= 1 && (
                            <span className="absolute right-0 top-0 rounded-full bg-blue-primary w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                                {basket?.length}
                            </span>
                        )
                    }
                </div>



                {/* //drawer when on moblie view */}
                <div className="md:hidden flex">
                    <MobileNavDrawer user={userInfo} />
                </div>

                {/* //sidebar when cart is open */}
                <div>
                    <CartSidebar open={open_cart} setOpen={setOpenCart} cart={basket} />
                </div>
            </div>

            <div className="md:hidden flex flex-row items-center h-16 max-w-7xl mx-auto justify-between">
                <div className="flex flex-row items-center space-x-2">
                    {/* //drawer when on moblie view */}
                    <div className="md:hidden flex pl-4">
                        <MobileNavDrawer user={userInfo} />
                    </div>
                    <div className="relative flex p-4"> </div>
                </div>
                <div className="flex">
                    <div onClick={() => history.push('/')} className="uppercase cursor-pointer font-bold text-sm text-gray-700 flex flex-row items-center">
                        <img src={logo} alt="logo representing the website icon" className="h-8" />
                    </div>
                </div>

                <div className="flex space-x-2 pr-2">

                    <div>
                        <NavSearch />
                    </div>
                    <div onClick={toggle_cart} className="relative flex p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                        <ShoppingCartIcon height={20} width={20} className="text-gray-700" />
                        <span className="absolute right-0 top-0 rounded-full bg-blue-primary w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                            {basket?.length}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GeneralNavbar
