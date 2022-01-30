import { PlusIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

function FileUploadCompoent({multiple, selectedPictures}) {
    let fileObj = []
    let fileArray = []
    const upload_files = []

    const [preview_files, setPreviewFiles] = useState([])
    const [files_to_upload, setUploadFiles] = useState([])

    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
            upload_files.push(fileObj[0][i])
        }
        setPreviewFiles(fileArray)
        setUploadFiles(upload_files)
        selectedPictures([...files_to_upload, upload_files])
    }

    const removePicture = index => {
        setUploadFiles([...files_to_upload.filter(file_to_upload => files_to_upload.indexOf(file_to_upload) !== index)]);
        setPreviewFiles([...preview_files.filter(preview_file => preview_files.indexOf(preview_file) !== index)]);
        selectedPictures([...preview_files.filter(preview_file => preview_files.indexOf(preview_file) !== index)]);
    };

    const addPicture = (event) => {
        fileObj.push(event.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
            upload_files.push(fileObj[0][i])
        }
        setPreviewFiles([...preview_files, fileArray])
        setUploadFiles([...files_to_upload, upload_files])
        selectedPictures([...files_to_upload, upload_files])
    }

    // const uploadFiles = (e) => {
    //     e.preventDefault()
    // }

    return (
        <div className=' bg-white py-2'>
            <div className="grid grid-cols-6 items-center gap-8 my-2 mx-4">
                {preview_files.length >= 1 && <>
                    {(preview_files).map((url, index) => (
                        <div className="relative rounded flex flex-col items-center">
                            <span onClick={() => removePicture(index)} className='cursor-pointer absolute top-0 right-0 bg-white rounded-full p-1'>
                                <XIcon height={12} width={12} className='text-gray-700' />
                            </span>
                            <img src={url} alt="..." className='h-28 rounded' />
                        </div>
                    ))}
                    <div className="relative h-32 w-32 rounded-lg border bg-gray-200 border-dashed border-gray-500 flex justify-center items-center">
                        <div className="absolute">
                            <div className="flex flex-col items-center">
                                <PlusIcon height={20} width={20} className='text-gray-700' />
                            </div>
                        </div>

                        <input onChange={addPicture} type="file" className="h-full w-full opacity-0" name="" />

                    </div>
                </>}
            </div>
            <div className="form-group">
                <div className="px-2">
                    <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                        <div className="md:flex">
                            <div className="w-full p-3">
                                <div className="relative h-12 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                                    <div className="absolute">
                                        <div className="flex flex-col items-center">
                                            <span className="block text-gray-400 font-normal">Click here to add pictures/files</span> </div>
                                    </div>
                                    {
                                        multiple ? (
                                            <input onChange={uploadMultipleFiles} type="file" className="h-full w-full opacity-0" name="" multiple />
                                        ) : (
                                            <input onChange={uploadMultipleFiles} type="file" className="h-full w-full opacity-0" name="" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex" onClick={uploadFiles}>
                upload
            </div> */}
        </div>
    );
}

export default FileUploadCompoent;
