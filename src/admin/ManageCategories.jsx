import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AdminLayout from '../layouts/AdminLayout'
import { add_category_Action } from '../redux/actions/categoryActions'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import BlueButton from '../components/buttons/BlueButton'
import Error from '../components/alerts/Error'
import SuccessAlert from '../components/alerts/SuccessAlert'
import CategoryImageUpload from '../components/image_uploads/CategoryImageUpload'
import SubCategoryComponent from './components/sub_category_component/SubCategoryComponent'
import { data } from '../utils/data'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ManageCategories() {
    const dispatch = useDispatch()
    //for adding category
    const [category, setCategory] = useState('')
    const [parent_id, setParent_id] = useState('')
    const [category_picture, setCategory_picture] = useState()

    const _new_category = useSelector(state => state.add_category)
    const { add_cat_loading, add_cat_error, add_cat_message } = _new_category


    function slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')

        return string.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
    }


    const add_category = () => {
        dispatch(add_category_Action(category, category_picture[0], parent_id))
        setCategory('')
    }

    return (
        <AdminLayout>
            <p className="text-gray-900 font-semibold text-center m-4">Expand to see sub-categories</p>
            <div className="mx-4">
                <dl className="space-y-6 divide-y divide-gray-200">
                    {data?.categories?.map((category, index) => (
                        <Disclosure as="div" key={index} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg" onClick={() => setParent_id(category._id)}>
                                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400" >

                                            <div className="flex flex-row items-center">
                                                <p className='mr-1 text-gray-700'>{index+1}.</p>
                                                <img src={category.icon} alt={category.name} className='h-6 w-6 mr-2' />
                                                <span className="font-medium text-gray-900">{category.name}</span>
                                            </div>
                                            <span className="ml-6 h-7 flex items-center">
                                                <ChevronDownIcon
                                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <>
                                        <SubCategoryComponent category_slug={slugify(category.name)} />
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
