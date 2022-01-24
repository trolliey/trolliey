import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_subcategories_Action } from '../../redux/actions/categoryActions';
import './CategoriesDropdown.css'

function SubCategoryComponent({ category_id, cat_name }) {
    const dispatch = useDispatch()
    const sub_cats = useSelector(state => state.get_all_subcats)
    const { sub_categories, sub_cat_loading, sub_cat_error } = sub_cats

    useEffect(() => {
        dispatch(get_all_subcategories_Action(category_id))
    }, [dispatch, category_id])

    console.log(sub_categories)

    return (
        <div className="megadrop bg-gray-50 border border-gray-200 rounded">
            <p className='text-blue-primary font-semibold items-center text-lg p-4 capitalize'>{cat_name}</p>
            <div className=" px-4 bg-white">
                <ul className='bg-gray-50'>
                    {
                        sub_cat_loading ? (
                            <p>loading</p>
                        ) : sub_cat_error ? (
                            <p>error</p>
                        ) : sub_categories?.result.length < 1 ? (
                            <p className='text-center'>No subcategories to show</p>
                        ) : (
                            <>
                                {
                                    sub_categories?.result.map((sub_cat, index) => (
                                        <li key={index} className='bg-gray-50 cursor-pointer'>
                                            <p className='text-gray-700 font-normal'>{sub_cat.name}</p>
                                        </li>
                                    ))
                                }
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default SubCategoryComponent;
