import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_subcategories_Action } from '../../redux/actions/categoryActions';
import './CategoriesDropdown.css'

function SubCategoryComponent({ category_id, cat_name, cat_image }) {
    const dispatch = useDispatch()
    const sub_cats = useSelector(state => state.get_all_subcats)
    const { sub_categories, sub_cat_loading, sub_cat_error } = sub_cats

    useEffect(() => {
        dispatch(get_all_subcategories_Action(category_id))
    }, [dispatch, category_id])

    console.log(sub_categories)

    return (
        <div className="megadrop bg-gray-50 border border-gray-200 rounded flex flex-row">
            <div className="w-3/5 ">
                <p className='text-blue-primary font-semibold items-center text-lg p-4 capitalize'>{cat_name}</p>
                <div className=" px-4">
                    <ul className='bg-gray-50'>
                        {
                            sub_cat_loading ? (
                                <p>loading...</p>
                            ) : sub_cat_error ? (
                                <p>error</p>
                            ) : sub_categories?.sub_categories.length < 1 ? (
                                <p className='text-center'>No subcategories to show</p>
                            ) : (
                                <>
                                    {
                                        sub_categories?.sub_categories.map((sub_cat, index) => (
                                            <li key={index} className='bg-gray-50 cursor-pointer hover:text-black hover:font-semibold text-sm p-1 rounded hover:bg-gray-200'>
                                                <p className='text-gray-700 hover:text-black font-normal hover:font-semibold'>{sub_cat.sub_category}</p>
                                            </li>
                                        ))
                                    }
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="w-2/5 bg-white grid items-center justify-center content-center">
                <img src={cat_image} className='h-32' alt="category representation on category component" />
            </div>
        </div>
    );
}

export default SubCategoryComponent;
