import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GeneralLayout from '../../layouts/GeneralLayout';
import { create_single_store_Actions } from '../../redux/actions/storeActions';
import { CameraIcon } from '@heroicons/react/outline'
import Dropzone from 'react-dropzone'
import SuccessAlert from '../../components/alerts/SuccessAlert';
import Error from '../../components/alerts/Error';
import BlueButton from '../../components/buttons/BlueButton';
import UserAvatar from '../../components/user_avatar/UserAvatar';
import { useHistory } from 'react-router-dom';

function CreateStore() {
    const [username, setUsername] = useState('')
    const [about, setAbout] = useState('')

    //for image picking
    const [previewSrc, setPreviewSrc] = useState("");
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const [picture, setPicture] = useState(null);
    const dropRef = useRef();
    const [push_type, setpushType] = useState('')
    const _create = useSelector(state => state.create_store)
    const { edit_loading, message, edit_error } = _create

    const _logged_in = useSelector(state => state.user_login)
    const { userInfo } = _logged_in

    const dispatch = useDispatch()
    const history = useHistory()

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

    const create_store = () => {
        dispatch(create_single_store_Actions(username, about, picture, userInfo?.token))
    }

    useEffect(() => {
        if (message === 'Successfully edited') {
            history.push('/login')
            window.location.reload()
        }
    }, [message])

    return (
        <GeneralLayout no_text>
            <p className='py-8 text-gray-700 font-semibold text-center text-2xl capitalize'>Create A Store by providing the details below</p>
            <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
                <div className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    This information will be displayed publicly to anyone who want to by from you.
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                        Photo/Logo (Optional)
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
                                        Store/Business Name
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
                                                required
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
                                            rows={7}
                                            className="max-w-lg shadow-sm block w-full p-3 outline-none sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                            required
                                        />
                                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about your store or your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    We'll always let you know about important changes, but you pick how you want us ro notify you.
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
                                                    Notification Type
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="max-w-lg">
                                                    <p className="text-sm text-gray-500">These are delivered through a way you have chosen.</p>
                                                    <div className="mt-4 space-y-4">
                                                        <div className="flex items-center">
                                                            <input
                                                                id="no-notifications"
                                                                name="no-notifications"
                                                                type="radio"
                                                                value={'no_notifications'}
                                                                onChange={e => setpushType(e.target.id)}
                                                                className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                            />
                                                            <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                                Don't send me notifications
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                id="push_notifications"
                                                                name="push_notifications"
                                                                type="radio"
                                                                value={push_type}
                                                                onChange={e => setpushType(e.target.id)}
                                                                className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                            />
                                                            <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                                Push Notifications
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                id="email_notifications"
                                                                name="email_notifications"
                                                                type="radio"
                                                                value={push_type}
                                                                onChange={e => setpushType(e.target.id)}
                                                                className="focus:ring-blue-primary h-4 w-4 textblue-primary border-gray-300"
                                                            />
                                                            <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                                Send through email
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
                    {message && <SuccessAlert message={message} />}
                    {edit_error && <Error error={edit_error} />}
                    <div className="pt-5">
                        <div className="flex justify-end">
                            <div className="flex mr-2">
                                <BlueButton text="Cancel" outline />
                            </div>
                            <div className="flex">
                                <BlueButton text="Save" onClick={create_store} loading={edit_loading} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>);
}

export default CreateStore;
