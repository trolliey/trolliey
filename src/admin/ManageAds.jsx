import React, { useState } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { PencilIcon, PlusIcon } from '@heroicons/react/outline'
import AdsTable from './components/AdsTable'
import AdsModal from './components/AdsModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get_all_ads_Action } from '../redux/actions/adActions'
import { Spinner } from '@chakra-ui/spinner'
import Error from '../components/alerts/Error'
import moment from 'moment'

function ManageAds() {
    const dispatch = useDispatch()
    const [ad_modal, set_ad_Modal_Open] = useState(false)
    const [ad_id, set_Add_id] = useState('')
    const _create_new_add = useSelector(state => state.create_new_add)
    const { loading, error, message } = _create_new_add

    //get all ads from the store
    const _get_all_ads = useSelector(state => state.get_all_ads)
    const { ads_loading, ads_error, ads } = _get_all_ads

    const open_big_ad = (id) => {
        set_Add_id(id)
        set_ad_Modal_Open(true)
    }

    useEffect(() => {
        dispatch(get_all_ads_Action())
    }, [dispatch])

    return (
        <AdminLayout>
            <div className="flex flex-row items-center">
                <p className="text-gray-700 text-lg text-center font-semibold my-8 capitalize w-full justify-between items-center">manage all ads on the platform</p>
                <div className="flex flex-col mx-8">
                    <div onClick={() => set_ad_Modal_Open(true)} className="flex bg-blue-200 rounded-full p-2 cursor-pointer hover:bg-blue-300">
                        <PlusIcon className="text-gray-700" height={24} width={24} />
                    </div>
                </div>
            </div>

            {/* // first big ad */}
            <div className="flex flex-col w-full">
                <div className="flex flex-col p-4 bg-white rounded mx-4">
                    <div className="flex w-full justify-between px-4">
                        <p className="text-gray-900 font-semibold capitalize">First-large ad - #1</p>
                        <span onClick={() => open_big_ad(ads?.[0]?._id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={ads?.[0]?.name}
                        goes_to={ads?.[0]?.link_to}
                        remove_on={ads?.[0]?.delete_at}
                        added_on={moment(ads?.[0]?.createdAt).fromNow()}
                        heading={'Special discount on sale'}
                        body={'Best collection for kids'}
                    />
                    <div className="picture items-center mx-auto my-4 md:max-h-96 max-h-48 md:h-96 h-auto w-full">
                        {ads_loading ? (
                            <div className="grid content-center items-center h-full w-full bg-gray-50 justify-center">
                                <Spinner
                                    size="lg"
                                />
                            </div>
                        ) : ads_error ? (
                            <div className="grid content-center items-center h-full w-full justify-center">
                                <Error error="Error loading ads, try reloading page" />
                            </div>
                        ) : (
                            <div className="picture items-center mx-auto my-4 md:max-h-96 max-h-48 md:h-96 h-auto bg-gray-50">
                                <img src={ads?.[0]?.image} alt="banner add for big one" className="md:max-h-96 max-h-48 md:h-96 h-auto mx-auto" />
                            </div>
                        )}
                    </div>
                </div>

                {/* // second as */}
                <div className="flex flex-col p-4 bg-white rounded m-4">
                    <div className="flex w-full justify-between px-4">
                        <p className="text-gray-900 font-semibold capitalize">Second ad - #2</p>
                        <span onClick={() => open_big_ad(ads?.[1]?._id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={ads?.[1]?.name}
                        goes_to={ads?.[1]?.link_to}
                        remove_on={ads?.[1]?.delete_at}
                        added_on={moment(ads?.[1]?.createdAt).fromNow()}
                        heading={'Special discount on sale'}
                        body={'Best collection for kids'}
                    />
                    <div className="image items-center mx-auto my-4  w-full">
                        {ads_loading ? (
                            <div className="grid content-center items-center h-full w-full bg-gray-50 justify-center">
                                <Spinner
                                    size="lg"
                                />
                            </div>
                        ) : ads_error ? (
                            <div className="grid content-center items-center h-full w-full justify-center">
                                <Error error="Error loading ads, try reloading page" />
                            </div>
                        ) : (
                            <div className="image items-center mx-auto my-4 max-h-48 md:h-32 bg-gray-50">
                                <img
                                    src={ads?.[1]?.image}
                                    alt="banner add for big one"
                                    className="md:max-h-96 max-h-48 md:h-32 mx-auto object-cover w-full rounded" />
                            </div>
                        )}
                    </div>
                </div>

                {/* // THRID AD */}
                <div className="flex flex-col p-4 bg-white rounded m-4">
                    <div className="flex w-full justify-between px-4">
                        <p className="text-gray-900 font-semibold capitalize">Third ad - #3</p>
                        <span onClick={() => open_big_ad(ads?.[2]?._id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={ads?.[2]?.name}
                        goes_to={ads?.[2]?.link_to}
                        remove_on={ads?.[2]?.delete_at}
                        added_on={moment(ads?.[2]?.createdAt).fromNow()}
                        heading={'Special discount on sale'}
                        body={'Best collection for kids'}
                    />
                    <div className="image items-center mx-auto my-4  w-full">
                        {ads_loading ? (
                            <div className="grid content-center items-center h-full w-full bg-gray-50 justify-center">
                                <Spinner
                                    size="lg"
                                />
                            </div>
                        ) : ads_error ? (
                            <div className="grid content-center items-center h-full w-full justify-center">
                                <Error error="Error loading ads, try reloading page" />
                            </div>
                        ) : (
                            <div className="image items-center mx-auto my-4 max-h-48 md:h-32 bg-gray-50">
                                <img
                                    src={ads?.[2]?.image}
                                    alt="banner add for big one"
                                    className="md:max-h-96 max-h-48 md:h-32 mx-auto object-cover w-full rounded" />
                            </div>
                        )}
                    </div>
                </div>

                {/* // forth ad */}
                <div className="flex flex-col p-4 bg-white rounded m-4">
                    <div className="flex w-full justify-between px-4">
                        <p className="text-gray-900 font-semibold capitalize">Forth ad - #4</p>
                        <span onClick={() => open_big_ad(ads?.[3]?._id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={ads?.[3]?.name}
                        goes_to={ads?.[3]?.link_to}
                        remove_on={ads?.[3]?.delete_at}
                        added_on={moment(ads?.[3]?.createdAt).fromNow()}
                        heading={'Special discount on sale'}
                        body={'Best collection for kids'}
                    />
                    <div className="image items-center mx-auto my-4  w-full">
                        {ads_loading ? (
                            <div className="grid content-center items-center h-full w-full bg-gray-50 justify-center">
                                <Spinner
                                    size="lg"
                                />
                            </div>
                        ) : ads_error ? (
                            <div className="grid content-center items-center h-full w-full justify-center">
                                <Error error="Error loading ads, try reloading page" />
                            </div>
                        ) : (
                            <div className="image items-center mx-auto my-4 max-h-48 md:h-32 bg-gray-50">
                                <img
                                    src={ads?.[3]?.image}
                                    alt="banner add for big one"
                                    className="md:max-h-96 max-h-48 md:h-32 mx-auto object-cover w-full rounded" />
                            </div>
                        )}
                    </div>
                </div>

                {/* // second ad */}
                <div className="flex flex-col p-4 bg-white rounded m-4">
                    <div className="flex w-full justify-between px-4">
                        <p className="text-gray-900 font-semibold capitalize">Fifth ad - #5</p>
                        <span onClick={() => open_big_ad(ads?.[4]?._id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={ads?.[4]?.name}
                        goes_to={ads?.[4]?.link_to}
                        remove_on={ads?.[4]?.delete_at}
                        added_on={moment(ads?.[4]?.createdAt).fromNow()}
                        heading={'Special discount on sale'}
                        body={'Best collection for kids'}
                    />
                    <div className="image items-center mx-auto my-4  w-full">
                        {ads_loading ? (
                            <div className="grid content-center items-center h-full w-full bg-gray-50 justify-center">
                                <Spinner
                                    size="lg"
                                />
                            </div>
                        ) : ads_error ? (
                            <div className="grid content-center items-center h-full w-full justify-center">
                                <Error error="Error loading ads, try reloading page" />
                            </div>
                        ) : (
                            <div className="image items-center mx-auto my-4 max-h-48 md:h-32 bg-gray-50">
                                <img
                                    src={ads?.[4]?.image}
                                    alt="banner add for big one"
                                    className="md:max-h-96 max-h-48 md:h-32 mx-auto object-cover w-full rounded" />
                            </div>
                        )}
                    </div>
                </div>

                {/* // sixth ad */}
                <div className="flex flex-col p-4 bg-white rounded m-4">
                    <div className="flex w-full justify-between px-4">
                        <p className="text-gray-900 font-semibold capitalize">Sixth ad - #6</p>
                        <span onClick={() => open_big_ad(ads?.[5]?._id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <PencilIcon className="text-gray-700" height={16} width={16} />
                        </span>
                    </div>
                    <AdsTable
                        name={ads?.[5]?.name}
                        goes_to={ads?.[5]?.link_to}
                        remove_on={ads?.[5]?.delete_at}
                        added_on={moment(ads?.[5]?.createdAt).fromNow()}
                        heading={'Special discount on sale'}
                        body={'Best collection for kids'}
                    />
                    <div className="image items-center mx-auto my-4  w-full">
                        {ads_loading ? (
                            <div className="grid content-center items-center h-full w-full bg-gray-50 justify-center">
                                <Spinner
                                    size="lg"
                                />
                            </div>
                        ) : ads_error ? (
                            <div className="grid content-center items-center h-full w-full justify-center">
                                <Error error="Error loading ads, try reloading page" />
                            </div>
                        ) : (
                            <div className="image items-center mx-auto my-4 max-h-48 md:h-32 bg-gray-50">
                                <img
                                    src={ads?.[5]?.image}
                                    alt="banner add for big one"
                                    className="md:max-h-96 max-h-48 md:h-32 mx-auto object-cover w-full rounded" />
                            </div>
                        )}
                    </div>
                </div>

                <>
                    <AdsModal
                        loading={loading}
                        error={error}
                        message={message}
                        open={ad_modal}
                        setOpen={set_ad_Modal_Open}
                        ad_id={ad_id} />
                </>
            </div>
        </AdminLayout>
    )
}

export default ManageAds
