import React, { useEffect } from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { get_all_categories_Action } from '../../redux/actions/categoryActions'
import { get_subcategories_Action } from '../../redux/actions/subCategoryActions'
import ImageUpload from '../../components/image_uploads/ImageUpload'

function Category({ nextStep, handleChange, values, setPictures }) {
    const _categoeries = useSelector(state => state.get_all_categories)
    const { cat_loading, categories } = _categoeries
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

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
                                                            }}>{category.name}</option>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
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

                            <ImageUpload setPictures={setPictures} />

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
