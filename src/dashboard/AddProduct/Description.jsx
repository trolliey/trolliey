import React from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import Tags from '../../components/tags/Tags';
import DashboardLayout from '../../layouts/DashboardLayout'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

function Description({ nextStep, handleChange, values, prevStep, setAdditional_features }) {
    const selectedTags = (tags) => {
        setAdditional_features(tags)
    };
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="p-4 w-full">
                        <p className="mb-4 text-lg text-gray-700 border-b border-gray-300 pb-4">Title and description</p>
                        <div className="grid md:grid-cols-3 col-span-1 gap-4 mb-8">
                            <div className="col-span-1">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 capitalize">
                                    Product title
                                </label>
                                <input
                                    id="brand"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    name="name"
                                    className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    placeholder="e.g tomatoes"
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 capitalize">
                                    Product condition
                                </label>
                                <input
                                    id="brand"
                                    value={values.condition}
                                    onChange={handleChange('condition')}
                                    name="condition"
                                    className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    placeholder="brand new"
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 capitalize">
                                    Product Sub-title
                                </label>
                                <input
                                    id="brand"
                                    value={values.sub_title}
                                    onChange={handleChange('sub_title')}
                                    name="sub_title"
                                    className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    placeholder="e.g tomatoes"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 col-span-1 gap-4 mb-8">
                            <div className="col-span-1">
                                <label htmlFor="in_stock" className="block text-sm font-medium text-gray-700 capitalize">
                                    amount In stock
                                </label>
                                <input
                                    id="in_stock"
                                    value={values.in_stock}
                                    onChange={handleChange('in_stock')}
                                    name="in_stock"
                                    type="number"
                                    className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    placeholder="0"
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 capitalize">
                                    Product type
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={values.type}
                                    onChange={handleChange('type')}
                                    className="mt-1 block w-full pl-3 pr-10 p-2 text-base border border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                >
                                    <option>private</option>
                                    <option>public</option>
                                </select>
                            </div>

                        </div>

                        <div className=" gap-4 mb-8">
                            <div className="col-span-1">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 capitalize">
                                    Does your product have any additional features?
                                </label>
                                <Tags
                                    selectedTags={selectedTags}
                                    className=""
                                />
                            </div>
                        </div>


                        <div className=" gap-4 mb-8">
                            <div className="col-span-1">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 capitalize">
                                    Description
                                </label>
                                {/* <ReactQuill
                                    value={values.description}
                                    onChange={handleChange('description')}
                                /> */}
                                <textarea
                                    rows={10}
                                    id="description"
                                    value={values.description}
                                    onChange={handleChange('description')}
                                    name="stock"
                                    type="text"
                                    className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    placeholder="Give a thorough description of your product"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex w-full justify-between flex-row">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Keep the name short, buyers know what they want</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline onClick={() => prevStep(values)} />
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

export default Description
