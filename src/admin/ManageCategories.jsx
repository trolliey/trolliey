import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AdminLayout from '../layouts/AdminLayout'
import { add_category_Action, get_all_categories_Action } from '../redux/actions/categoryActions'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import BlueButton from '../components/buttons/BlueButton'
import { Spinner } from '@chakra-ui/react'
import Error from '../components/alerts/Error'
import SuccessAlert from '../components/alerts/SuccessAlert'
import { add_subcategory_Action } from '../redux/actions/subCategoryActions'
import CategoryImageUpload from '../components/image_uploads/CategoryImageUpload'
import SubCategoryComponent from './components/sub_category_component/SubCategoryComponent'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ManageCategories() {
    const dispatch = useDispatch()
    const _categories = useSelector(state => state.get_all_categories)
    const { cat_loading, cat_error, categories } = _categories

    //for adding category
    const [category, setCategory] = useState('')
    const [parent_id, setParent_id] = useState('')
    const [category_picture, setCategory_picture] = useState()

    const _new_category = useSelector(state => state.add_category)
    const { add_cat_loading, add_cat_error, add_cat_message } = _new_category
    

    console.log(category_picture)

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    
    const add_category = () => {
        dispatch(add_category_Action(category, category_picture[0], parent_id))
        setCategory('')
    }

    

    console.log(categories?.categories)
    if (cat_loading) {
        return (
            <AdminLayout>
                <div className="grid w-full my-16 items-center justify-center content-center">
                    <Spinner />
                </div>
            </AdminLayout>
        )
    }

    if (cat_error) {
        return (
            <AdminLayout>
                <div className="grid w-full my-16 items-center justify-center content-center">
                    <p className="text-gray-700 bg-red-100 p-2 rounded font-semibold">Error loading categories, try reloading page</p>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            {add_cat_error && <Error error={add_cat_error} />}
            {add_cat_message && <SuccessAlert message={add_cat_message} />}
            <div className="flex flex-col w-full">
                <p className='my-4 text-gray-700 font-semibold text-lg text-center'>NB: If adding a parent category search for the parent category and copy its id</p>
                <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-8 gap-2">
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded outline-none flex-1 my-2"
                        placeholder="Add category"
                        onChange={e => setCategory(e.target.value)}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded outline-none flex-1 my-2"
                        placeholder="Add parent-category id"
                        onChange={e => setParent_id(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="art">
                        Category Picture
                    </label>
                    <CategoryImageUpload setPictures={setCategory_picture} />
                </div>
                <div className="mx-2 flex-end ml-auto">
                    <BlueButton
                        text="Add category"
                        onClick={add_category}
                        loading={add_cat_loading}
                    />
                </div>
            </div>
            <p className="text-sm text-gray-500 font-semibold ml-4">Expand to see sub-categories</p>
            <div className="mx-4">
                <dl className="space-y-6 divide-y divide-gray-200">
                    {categories?.categories?.map((category, index) => (
                        <Disclosure as="div" key={index} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg" onClick={() => setParent_id(category._id)}>
                                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400" >

                                            <span className="font-medium text-gray-900">{category.name}</span>
                                            <span className="ml-6 h-7 flex items-center">
                                                <ChevronDownIcon
                                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <>
                                        <SubCategoryComponent category_id={parent_id} />
                                    </>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </AdminLayout>
    )
}

export default ManageCategories
