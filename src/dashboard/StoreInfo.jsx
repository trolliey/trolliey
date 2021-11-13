import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import BlueButton from '../components/buttons/BlueButton'
import DashboardLayout from '../layouts/DashboardLayout'
import Dropzone from 'react-dropzone'
import { Spinner } from '@chakra-ui/react'
import { get_store_products_Actions } from '../redux/actions/storeActions'
import { useRef } from 'react'
import { CameraIcon } from '@heroicons/react/outline'
import UserAvatar from '../components/user_avatar/UserAvatar'


function StoreInfo() {

    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const dispatch = useDispatch()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [about, setAbout] = useState('')

    //for image picking
    const [previewSrc, setPreviewSrc] = useState("");
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const [picture, setPicture] = useState(null);
    const dropRef = useRef();

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postal, setPostal] = useState('')
    const [push_type, setpushType] = useState('')
    const _create = useSelector(state => state.create_store)
    const { edit_loading, message, edit_error } = _create
    const _info = useSelector(state => state.get_store_products)
    const { loading, products } = _info

    useEffect(() => {
        dispatch(get_store_products_Actions(userInfo?.user?._id))
    }, [dispatch, userInfo?.user?._id])

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setPicture(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    };

    const changeProPic = (e) => {
        e.preventDefault();
    };

    const change_details = (e) => {
        e.prevenrDefault()
        console.log('details changed')
    }

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex-1 h-full min-h-screen w-full grid items-center justify-center">
                    <Spinner
                        thickness={0.7}
                        size="lg"
                    />
                </div>
            </DashboardLayout>

        )
    }

    if (products) {
        return (
            <DashboardLayout>
                <p>you are a store</p>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                        Photo/Logo
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <div className="flex items-center">
                                            <div className="flex flex-row self-center items-end pb-4">
                                                <div className="relative">
                                                    <div className="self-center bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                                                        <UserAvatar size="xl" source={userInfo?.user?.photoURL} />
                                                    </div>


                                                    <Dropzone onDrop={onDrop}>
                                                        {({ getRootProps, getInputProps }) => (
                                                            <div
                                                                {...getRootProps({ className: "drop-zone" })}
                                                                ref={dropRef}
                                                            >
                                                                <input {...getInputProps()} />
                                                                <div className="cursor-pointer absolute right-0 bottom-0 bg-gray-300 rounded-full p-2 border-2 border-white">
                                                                    <CameraIcon
                                                                        width={24}
                                                                        height={24}
                                                                        className="text-blue-300 hover:text-blue-500"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Dropzone>

                                                </div>

                                                {previewSrc ? (
                                                    isPreviewAvailable ? (
                                                        <div className="flex flex-row ml-2 items-center">

                                                            <UserAvatar source={previewSrc} size="xl" alt="Preview" />

                                                            {1 > 5 ? (
                                                                <span
                                                                    className="bg-blue-900 opacity-75 p-1 my-1 text-sm cursor-pointer hover:bg-blue-800 rounded-lg text-white text-center"
                                                                >
                                                                    Uploading...
                                                                </span>
                                                            ) : (
                                                                <div className="flex flex-col ml-2">
                                                                    <BlueButton
                                                                        outline
                                                                        onClick={changeProPic}
                                                                        text="Save Image"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="preview-message">
                                                            <p>No preview available for this file</p>
                                                        </div>
                                                    )
                                                ) : (
                                                    <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm ml-2">
                                                        <p>Select picture</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Username
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <div className="max-w-lg flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                                trolliey.com/
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                value={username}
                                                onChange={e => setUsername(e.target.value)}
                                                id="username"
                                                autoComplete="username"
                                                className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        About
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            value={about}
                                            onChange={e => setAbout(e.target.value)}
                                            rows={3}
                                            className="max-w-lg shadow-sm block w-full p-3 outline-none sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about your store or your business.</p>
                                    </div>
                                </div>

                              
                            </div>
                        </div>

                        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        First name
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            value={firstname}
                                            onChange={e => setFirstname(e.target.value)}
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="max-w-lg block w-full shadow-sm p-2 border sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Last name
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            value={lastname}
                                            onChange={e => setLastname(e.target.value)}
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Email address
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="block max-w-lg w-full shadow-sm border p-2 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Country / Region
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            value={country}
                                            onChange={e => setCountry(e.target.value)}
                                            className="max-w-lg block border p-2 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option>Zimbabwe</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Street address
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            value={street}
                                            onChange={e => setStreet(e.target.value)}
                                            autoComplete="street-address"
                                            className="block max-w-lg w-full shadow-sm border p-2 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        City
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        State / Province
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            value={province}
                                            onChange={e => setProvince(e.target.value)}
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        ZIP / Postal
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="zip"
                                            id="zip"
                                            value={postal}
                                            onChange={e => setPostal(e.target.value)}
                                            autoComplete="postal-code"
                                            className="max-w-lg block w-full shadow-sm border p-2 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    We'll always let you know about important changes, but you pick what else you want to hear about.
                                </p>
                            </div>
                            <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">

                                <div className="pt-6 sm:pt-5">
                                    <div role="group" aria-labelledby="label-notifications">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                            <div>
                                                <div
                                                    className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                                                    id="label-notifications"
                                                >
                                                    Push Notifications
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="max-w-lg">
                                                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                                    <div className="mt-4 space-y-4">
                                                        <div className="flex items-center">
                                                            <input
                                                                id="push-everything"
                                                                name="push-notifications"
                                                                type="radio"
                                                                value={push_type}
                                                                onChange={e => setpushType(e.target.id)}
                                                                className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                            />
                                                            <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                                Everything
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                id="push-email"
                                                                name="push-notifications"
                                                                type="radio"
                                                                value={push_type}
                                                                onChange={e => setpushType(e.target.id)}
                                                                className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                            />
                                                            <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                                Only messages
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                id="push-nothing"
                                                                name="push-notifications"
                                                                type="radio"
                                                                value={push_type}
                                                                onChange={e => setpushType(e.target.id)}
                                                                className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                            />
                                                            <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                                No push notifications
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <div className="flex mr-2">
                                <BlueButton text="Cancel" outline />
                            </div>
                            <div className="flex">
                                <BlueButton text="Save" onClick={change_details} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    )
}

export default StoreInfo
