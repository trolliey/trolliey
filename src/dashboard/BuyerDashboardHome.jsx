import { ArchiveIcon, ShoppingBagIcon, CogIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import UserAvatar from '../components/user_avatar/UserAvatar'
import BlueButton from '../components/buttons/BlueButton'
import DashboardLayout from '../layouts/DashboardLayout'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_store_products_Actions } from '../redux/actions/storeActions'
import DashboardCard from '../components/dashboard_card/DashboardCard'


function BuyerDashboardHome() {

    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_store_products_Actions(userInfo?.user?._id))
    }, [dispatch, userInfo?.user?._id])
    return (
        <DashboardLayout>
            <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                {/* Page header */}
                <div className="bg-white shadow">
                    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                            <div className="flex-1 min-w-0">
                                {/* Profile */}
                                <div className="flex items-center">
                                    <div className="sm:block hidden rounded-full">
                                        <UserAvatar size="lg" source={userInfo?.user?.photoURL} name={userInfo?.user?.displayName} />
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <div className="sm:hidden rounded-full">
                                                <UserAvatar size="lg" source={userInfo?.user?.photoURL} name={userInfo?.user?.displayName} />
                                            </div>
                                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                                Good morning, {userInfo?.user?.displayName}
                                            </h1>
                                        </div>
                                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                            <dt className="sr-only">Account status</dt>
                                            {
                                                userInfo?.user?.verified ? (
                                                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                                        <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400" aria-hidden="true" />
                                                        Verified account
                                                    </dd>
                                                ) : (
                                                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                                        <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        Account not verified
                                                    </dd>
                                                )
                                            }
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">

                                <div className="flex mr-2">
                                    <BlueButton text="Apply To Sell" outline onClick={() => history.push('/become-a-seller')} />
                                </div>
                                <div className="flex">
                                    <BlueButton text="Manage Account" onClick={() => history.push('/dashboard/settings')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Card */}
                            <DashboardCard
                                name='Order History'
                                icon={<ShoppingBagIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
                                location='/dashbord/buyer-orders'
                                amount={'History of orders'}
                                loading={false} />
                            <DashboardCard
                                name='User settings'
                                icon={<CogIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
                                location='/dashboard/usersettings'
                                amount={'Account Settings'}
                                loading={false} />
                            <DashboardCard
                                icon={<ArchiveIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
                                name='Total products'
                                location='/dashboard/buyer-home'
                                amount={'Products Bought'}
                                loading={false} />
                        </div>
                    </div>

                </div>
            </main>

        </DashboardLayout>
    );
}

export default BuyerDashboardHome;
