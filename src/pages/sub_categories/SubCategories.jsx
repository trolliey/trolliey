import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import GeneralLayout from '../../layouts/GeneralLayout';
import { get_all_subcategories_Action } from '../../redux/actions/categoryActions';
import { set_search_query_Action } from '../../redux/actions/searchAction';
import slugify from '../../utils/slugify';

function SubCategories() {
    const { category } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const sub_cats = useSelector(state => state.get_all_subcats)
    const { sub_categories } = sub_cats

    useEffect(() => {
        dispatch(get_all_subcategories_Action(category))
    }, [dispatch, category])

    const search_handler = (search_query) => {
        dispatch(set_search_query_Action(search_query))
        history.push('/explore')
    }

    return (
        <GeneralLayout title={`Sub-Categories under ${category} `}>
            <div className="flex flex-col flex-wrap items-center max-w-7xl">
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mx-auto max-w-7xl bg-white p-4 rounded">
                    {sub_categories?.sub_categories.map((sub_cat, index) => (
                        <div onClick={() => search_handler(slugify(sub_cat.sub_category))} key={index} className=" transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer hover:text-blue-primary col-span-1">
                            <CategoryItem text={sub_cat.sub_category} image={sub_cat.sub_category_picture} />
                        </div>
                    ))}
                </div>
            </div>
        </GeneralLayout>
    );
}

const CategoryItem = ({ text, image }) => {
    return (
        <div className="bg-white p-2 rounded m-1 grid items-center justify-center content-center shadow w-full">
            <div className='p-4 h-24 grid items-center justify-center content-center'>
                <img src={image} alt="" className='h-24' />
            </div>
            <p className='text-center'>{text}</p>
        </div>
    )
}

export default SubCategories;
