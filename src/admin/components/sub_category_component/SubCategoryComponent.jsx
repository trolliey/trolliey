import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Disclosure } from '@headlessui/react'
import { add_category_Action, get_all_subcategories_Action } from '../../../redux/actions/categoryActions';
import BlueButton from '../../../components/buttons/BlueButton';
import Error from '../../../components/alerts/Error';
import SuccessAlert from '../../../components/alerts/SuccessAlert';
import CategoryImageUpload from '../../../components/image_uploads/CategoryImageUpload'

function SubCategoryComponent({ category_id }) {
    const _add_sub_cat = useSelector(state => state.create_subcategory)
    const { add_subcat_loading, add_subcat_error, add_subcat_message } = _add_sub_cat
    const sub_cats = useSelector(state => state.get_all_subcats)
    const { sub_categories, sub_cat_loading, sub_cat_error } = sub_cats
    const [toggle_subcategory_on, setToggleCategory] = useState(false)
    const [sub_cat, setSubCat] = useState('')
    const [picture, setPicture] = useState()
    const dispatch = useDispatch()

    const toggle_sub_category_Handler = () => {
        toggle_subcategory_on ? setToggleCategory(false) : setToggleCategory(true)
    }

    const add_sub_cat_Handler = () => {
        dispatch(add_category_Action(sub_cat, picture[0], category_id))
    }
    useEffect(() => {
        dispatch(get_all_subcategories_Action(category_id))
    }, [dispatch, category_id])

    console.log(sub_categories)

    return (<div>
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
                        <div className="flex flex-col w-full">
                            <input
                                type="text"
                                className="border border-gray-300 p-2 rounded outline-none flex-1 m-2"
                                placeholder="add category"
                                onChange={e => setSubCat(e.target.value)}
                            />
                            <CategoryImageUpload setPictures={setPicture} />
                            <div className="mx-2 ml-auto">
                                <BlueButton
                                    text="Add Sub-Category"
                                    onClick={() => add_sub_cat_Handler()}
                                    loading={add_subcat_loading}
                                />
                            </div>
                        </div>
                    ) : null
                }
            </div>
            {sub_cat_error && <Error error={'Error loading sub-categories, try reloading page'} />}
            {
                sub_cat_loading ? (
                    <p>Loading ..</p>
                ) : (
                    <>
                        {
                            sub_categories?.result.length < 1 ? (
                                <p className='text-center text-gray-700 font-semibold'>No sub categories under this category</p>
                            ) : (
                                <>
                                    {
                                        sub_categories?.result.map((sub_cat, index) => (
                                            <p key={index} className="text-base text-gray-600 mx-2">{index+1}. {sub_cat?.name}</p>
                                        ))
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </Disclosure.Panel>
    </div>);
}

export default SubCategoryComponent;