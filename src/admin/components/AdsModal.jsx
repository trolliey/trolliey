import React, { Fragment, useRef, useState, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { create_new_add_Action, edit_single_ad_Action } from '../../redux/actions/adActions'
import BlueButton from '../../components/buttons/BlueButton'
import Error from '../../components/alerts/Error'
import SuccessAlert from '../../components/alerts/SuccessAlert'

function AdsModal({ open, setOpen, ad_id, loading, error, message }) {
    const cancelButtonRef = useRef(null)
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [deadline, setDeadline] = useState('')
    const [heading, setHeading] = useState('')
    const [body, setBody] = useState('')
    const [picture, setPicture] = useState()

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
                setPicture(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    const dispatch = useDispatch()

    const change_ad = () => {
        if (ad_id) {
            dispatch(edit_single_ad_Action(ad_id, picture, name, link, deadline))
        } else {
            dispatch(create_new_add_Action(picture, name, link, deadline, heading, body))
        }
    }

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    <div className="mt-3 text-center">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Change ad - {ad_id}
                                        </Dialog.Title>
                                        <div className="mt-2">

                                            <input
                                                type="text"
                                                className="outline-none p-2 my-2 rounded border border-gray-300 w-full placeholder-gray-400"
                                                onChange={e => setName(e.target.value)}
                                                placeholder="enter ad owner name" />
                                            <input
                                                type="text"
                                                className="outline-none p-2 my-2 rounded border border-gray-300 w-full placeholder-gray-400"
                                                onChange={e => setLink(e.target.value)}
                                                placeholder="enter ad link" />
                                            <input
                                                type="text"
                                                className="outline-none p-2 my-2 rounded border border-gray-300 w-full placeholder-gray-400"
                                                onChange={e => setDeadline(e.target.value)}
                                                placeholder="enter ad owner deadline" />

                                            <input
                                                type="text"
                                                className="outline-none p-2 my-2 rounded border border-gray-300 w-full placeholder-gray-400"
                                                onChange={e => setHeading(e.target.value)}
                                                placeholder="enter heading" />
                                            <input
                                                type="text"
                                                className="outline-none p-2 my-2 rounded border border-gray-300 w-full placeholder-gray-400"
                                                onChange={e => setBody(e.target.value)}
                                                placeholder="enter ad body" />
                                            <p className="text-left text-gray-700 my-4 capitalize">pick ad image</p>
                                            <div {...getRootProps()} className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                                                <input {...getInputProps()} />
                                                <p className="text-sm">Drag 'n' drop some files here, or click to select files</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {error && <Error error={error} />}
                                {message && <SuccessAlert message={message} />}
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                    <div className="w-full inline-flex justify-center px-4 py-2 sm:col-start-2">
                                        {
                                            ad_id ? (
                                                <BlueButton text="Change ad" onClick={change_ad} loading={loading} />
                                            ) : (
                                                <BlueButton text="Create ad" onClick={change_ad} loading={loading} />
                                            )
                                        }
                                    </div>

                                    <div className="mt-3 w-full inline-flex justify-center px-4 py-2 sm:mt-0 sm:col-start-1">
                                        <BlueButton text="Cancel" onClick={() => setOpen(false)} outline />
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default AdsModal
