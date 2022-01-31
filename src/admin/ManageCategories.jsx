import React, { useState } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import SubCategoryComponent from './components/sub_category_component/SubCategoryComponent'
import { data } from '../utils/data'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ManageCategories() {
    //for adding category
    const [parent_id, setParent_id] = useState('')

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
                                    <div className='bg-white'>
                                        <SubCategoryComponent category_slug={slugify(category.name)} />
                                    </div>
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
