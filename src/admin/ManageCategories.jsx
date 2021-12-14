import React, { useEffect, useState } from 'react'
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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ManageCategories() {
    const dispatch = useDispatch()
    const _categories = useSelector(state => state.get_all_categories)
    const { cat_loading, cat_error, categories } = _categories
    const [category, setCategory] = useState('')
    const _new_category = useSelector(state => state.add_category)
    const { add_cat_loading, add_cat_error, add_cat_message } = _new_category
    const [toggle_subcategory_on, setToggleCategory] = useState(false)
    const _add_sub_cat = useSelector(state => state.create_subcategory)
    const { add_subcat_loading, add_subcat_error, add_subcat_message } = _add_sub_cat
    const [sub_cat, setSubCat] = useState('')

    useEffect(() => {
        dispatch(get_all_categories_Action())
    }, [dispatch])

    const toggle_sub_category_Handler = () => {
        toggle_subcategory_on ? setToggleCategory(false) : setToggleCategory(true)
    }

    const add_category = () => {
        dispatch(add_category_Action(category))
        setCategory('')
    }

    const add_sub_cat_Handler = (id) => {
        dispatch(add_subcategory_Action(id, sub_cat))
    }

    console.log(categories)
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
            <div className="flex flex-row items-center w-full">
                <input
                    type="text"
                    className="border border-gray-300 p-2 rounded outline-none flex-1 m-2"
                    placeholder="Add category"
                    onChange={e => setCategory(e.target.value)}
                />
                <div className="mx-2">
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
                    {categories?.categories.map((category, index) => (
                        <Disclosure as="div" key={index} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">

                                            <span className="font-medium text-gray-900">{category.category}</span>
                                            <span className="ml-6 h-7 flex items-center">
                                                <ChevronDownIcon
                                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                        <div className="flex flex-col items-end w-full">
                                            <div className="flex flex-row items-center font-semibold capitalize text-sm">
                                                <span className="text-blue-400 hover:text-blue-700 mr-2 cursor-pointer">Edit </span> |
                                                <span className="mx-2 text-red-400 hover:text-red-700 cursor-pointer"> delete </span> |
                                                <span
                                                    onClick={toggle_sub_category_Handler}
                                                    className="ml-2 cursor-pointer text-gray-700 hover:text-black"> {!toggle_subcategory_on ? "add sub-category" : "cancel"}</span>
                                            </div>
                                            {add_subcat_error && <Error error={add_subcat_error} />}
                                            {add_subcat_message && <SuccessAlert message={add_subcat_message} />}
                                            {
                                                toggle_subcategory_on ? (
                                                    <div className="flex flex-row items-center w-full">
                                                        <input
                                                            type="text"
                                                            className="border border-gray-300 p-2 rounded outline-none flex-1 m-2"
                                                            placeholder="Add sub-category"
                                                            onChange={e => setSubCat(e.target.value)}
                                                        />
                                                        <div className="mx-2">
                                                            <BlueButton
                                                                text="Add Sub-Category"
                                                                onClick={() => add_sub_cat_Handler(category._id)}
                                                                loading={add_subcat_loading}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                        {
                                            category.sub_categories.map(sub_cat => (
                                                <p key={sub_cat.sub_category_id} className="text-base text-gray-600 mx-2">{sub_cat?.sub_category}</p>
                                            ))
                                        }
                                    </Disclosure.Panel>
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
