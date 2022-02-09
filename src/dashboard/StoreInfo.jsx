import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlueButton from '../components/buttons/BlueButton'
import DashboardLayout from '../layouts/DashboardLayout'
import Dropzone from 'react-dropzone'
import { Spinner } from '@chakra-ui/react'
import { edit_store_info_Action, get_store_products_Actions } from '../redux/actions/storeActions'
import { useRef } from 'react'
import { CameraIcon } from '@heroicons/react/outline'
import UserAvatar from '../components/user_avatar/UserAvatar'
import SuccessAlert from '../components/alerts/SuccessAlert'
import Error from '../components/alerts/Error'
import { storage } from '../utils/firebase'
import firebase from 'firebase/compat'

function StoreInfo() {

    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [about, setAbout] = useState('')

    //for image picking
    const [previewSrc, setPreviewSrc] = useState("");
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const [picture, setPicture] = useState(null);
    const dropRef = useRef();
    const [push_type, setpushType] = useState('')
    const _info = useSelector(state => state.get_store_products)
    const { loading } = _info

    const _edit_store = useSelector(state => state.edit_store)
    const { store_edit_loading, store_edit_error, store_edit_message } = _edit_store

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

    //change the profile picture
    const changeProPic = (e) => {
        e.preventDefault();
        var uploadTask = storage.ref().child(`images/${picture.name}-${Date.now()}`).put(picture)
        uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    const body = {
                        logo: downloadURL
                    }
                    dispatch(edit_store_info_Action(body, userInfo?.user?._id))
                });
            }
        );

    };

    // edit  store name
    const change_store_name = () => {
        const body = {
            company_name: username
        }
        dispatch(edit_store_info_Action(body, userInfo?.user?._id))
        setUsername('')
    }

    //change the description of the store
    const change_about = () => {
        const body = {
            about: about
        }
        dispatch(edit_store_info_Action(body, userInfo?.user?._id))
        setAbout('')
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

    //show this if user has a store ot not

    return (
        <DashboardLayout>
            <p className="bg-blue-dark font-semibold text-center p-2 my-2 mx-4 text-white rounded capitalize">Edit store info</p>
            <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                <div className="space-y-8 divide-y divide-gray-200">
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
                                                                        loading={store_edit_loading}
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
                                <div className="flex flex-col w-full">
                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Store Name
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
                                    {store_edit_message && <SuccessAlert message={store_edit_message} />}
                                    {store_edit_error && <Error error={store_edit_error} />}
                                    <div className="ml-auto mt-2">
                                        <BlueButton
                                            text={'Change Name'}
                                            outline
                                            onClick={change_store_name}
                                            loading={store_edit_loading} />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
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
                                    {store_edit_message && <SuccessAlert message={store_edit_message} />}
                                    {store_edit_error && <Error error={store_edit_error} />}
                                    <div className="ml-auto">
                                        <BlueButton
                                            onClick={change_about}
                                            text={'Change Description'}
                                            loading={store_edit_loading}
                                            outline />
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

                </div>
            </div>
        </DashboardLayout>
    )
}

export default StoreInfo
