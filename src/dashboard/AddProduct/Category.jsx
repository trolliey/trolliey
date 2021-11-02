import React, { useCallback, useEffect } from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'
import { useDropzone } from 'react-dropzone' //try file ppond
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { get_all_categories_Action } from '../../redux/actions/categoryActions'
import { get_subcategories_Action } from '../../redux/actions/subCategoryActions'

function Category({ nextStep, handleChange, values, setPictures }) {
    const _categoeries = useSelector(state => state.get_all_categories)
    const { cat_loading, categories } = _categoeries
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    const maxSize = 1048576;
    const onDrop = useCallback(acceptedFiles => {
        // console.log(acceptedFiles);
        setPictures(acceptedFiles)
    }, [setPictures]);

    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
        onDrop,
        accept: 'image/*',
        minSize: 0,
        maxSize,
    });

    const isFileTooLarge = rejectedFiles?.length > 0 && rejectedFiles[0].size > maxSize;

    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1 overflow-hidden">
                    <div className="flex-1 p-4 flex flex-col">
                        <p className="text-gray-700 mb-4 text-lg border-b border-gray-300 pb-4 capitalize">Category and pictures</p>
                        <div>
                            {/* //categories  */}
                            <div className="flex md:flex-row flex-col gap-4 w-full mb-8">
                                <div className="flex-1">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange('category')}
                                        className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    >
                                        {
                                            cat_loading ? (
                                                <option>loading ... </option>
                                            ) : cat_loading ? (
                                                <option>error, reload page</option>
                                            ) : (
                                                <>
                                                    {
                                                        categories?.categories.map((category, index) => (
                                                            <option key={index} onClick={() => {
                                                                dispatch(get_subcategories_Action(category._id))
                                                            }}>{category.category}</option>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="sub-category" className="block text-sm font-medium text-gray-700">
                                        Sub-Category
                                    </label>
                                    <select
                                        id="sub-category"
                                        name="sub-category"
                                        value={values.sub_category}
                                        onChange={handleChange('sub_category')}
                                        className="mt-1 block w-full pl-3 pr-10 p-2 text-base border border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    >
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                            </div>

                            {/* //brand */}
                            <div className="flex-1 mb-8">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                                    product brand
                                </label>
                                <input
                                    id="brand"
                                    value={values.brand}
                                    onChange={handleChange('brand')}
                                    name="brand"
                                    className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    placeholder="e.g Nike"
                                />
                            </div>

                            {/* //pitures  */}
                            <div className="gap-4 mb-8 flex-1">
                                <ul className="list-group my-4">
                                    {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                                        <li key={acceptedFile.name} className="list-group-item text-gray-700 text-sm font-semibold list-group-item-success">
                                            {acceptedFile.name}
                                        </li>
                                    ))}
                                </ul>
                                <div className="">
                                    <label htmlFor="pictures" className="block text-sm font-medium text-gray-700 capitalize">
                                        Product pictures
                                    </label>
                                    <div className="mt-1">
                                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-100" {...getRootProps()}>
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-primary hover:text-blue-secondary p-1"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" {...getInputProps()} />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                    {!isDragActive && 'Click here or drop a file to upload!'}
                                                    {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                                    {isDragReject && "File type not accepted, sorry!"}
                                                    {isFileTooLarge && (
                                                        <div className="text-danger mt-2">
                                                            File is too large.
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Choose an appropriate category</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline className="opacity-50" />
                                <div className="mx-2"></div>
                                <BlueButton text="Next" onClick={() => nextStep(values)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Category
