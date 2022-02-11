import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DashboardLayout from '../../layouts/DashboardLayout'
import { edit_single_product_Action, get_single_product_Action } from '../../redux/actions/productActions'
import { data } from '../../utils/data'
import BlueButton from '../../components/buttons/BlueButton'

function EditProduct() {
    const _product = useSelector(state => state.get_single_product)
    const [showMore, setShowMore] = useState(false);

    const _info = useSelector(state => state.user_login)
    const { userInfo } = _info
    const _edit_product = useSelector(state => state.edit_product)
    const { edit_loading } = _edit_product

    const { loading, error, product } = _product
    const { id } = useParams()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [access, setAccess] = useState('')
    const [in_stock, setInStock] = useState('')
    const [condition, setCondition] = useState('')
    // eslint-disable-next-line
    const [description, setDescription] = useState('')

    useEffect(() => {
        dispatch(get_single_product_Action(id))
    }, [dispatch, id])

    // update product title
    const change_title = () => {
        const body = {
            title: title
        }
        // console.log(userInfo?.token)
        dispatch(edit_single_product_Action(id, body, userInfo?.token))
        setTitle('')
    }

    // update product category
    const change_category = () => {
        const body = {
            category: category
        }
        // console.log(userInfo?.token)
        dispatch(edit_single_product_Action(id, body, userInfo?.token))
        setTitle('')
    }

    // update product price
    const change_price = () => {
        const body = {
            price: price
        }
        // console.log(userInfo?.token)
        dispatch(edit_single_product_Action(id, body, userInfo?.token))
        setPrice('')
    }

    // update product price
    const change_access = () => {
        const body = {
            product_type: access
        }
        // console.log(userInfo?.token)
        dispatch(edit_single_product_Action(id, body, userInfo?.token))
        setPrice('')
    }

    // update product price
    const change_in_stock = () => {
        console.log(in_stock)
    }
    // update product price
    const change_condition = () => {
        console.log(condition)
    }


    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex-1 w-full grid items-center justify-center content-center min-h-screen">
                    <Spinner size="xl" thickness={3} />
                </div>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <div className="flex-1 w-full grid items-center justify-center content-center min-h-screen">
                    <p className="capitalize text-gray-700 my-4 font-semibold text-center bg-red-100 p-2 rounded">problem loading item. Refresh page</p>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className='p-8 bg-white m-4 rounded shadow min-h-96'>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Product details</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Edit and change product details.</p>
                </div>
                <div className="mt-5 border-t border-gray-200">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Product title</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <span className="flex-grow">{product?.product.title}</span> */}
                                <input
                                    type="text"
                                    className='flex-grow p-2 rounded border border-gray-300 outline-none'
                                    placeholder={product?.product.title}
                                    defaultValue={product?.product.title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={change_title}
                                        text={'Update'}
                                        loading={edit_loading}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Category</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <span className="flex-grow">{product?.product.category}</span> */}
                                <select
                                    name="category"
                                    onChange={e => setCategory(e.target.value)}
                                    defaultValue={product?.product.category}
                                    className='flex-grow p-2 rounded border border-gray-300 outline-none'
                                    id="category">
                                    {data.categories.map((cat, index) => (
                                        <option
                                            key={index}
                                            value={cat.value}
                                        >{cat.name}</option>
                                    ))}
                                </select>
                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={change_category}
                                        text={'Update'}
                                        loading={edit_loading}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Sub-Category</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{product?.product.sub_category}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={() => console.log('not edited')}
                                        text={'Update'}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Price</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <span className="flex-grow"> ${product?.product.price}</span> */}
                                <input
                                    type="number"
                                    className='flex-grow p-2 rounded border border-gray-300 outline-none'
                                    placeholder={product?.product.price}
                                    defaultValue={product?.product.price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={change_price}
                                        text={'Update'}
                                        loading={edit_loading}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Product Access</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <span className="flex-grow"> {product?.product.product_type}</span> */}
                                <select
                                    name="access"
                                    onChange={e => setAccess(e.target.value)}
                                    defaultValue={product?.product.product_type}
                                    className='flex-grow p-2 rounded border border-gray-300 outline-none'
                                    id="category">
                                    <option value={'private'} >{'Private'}</option>
                                    <option value={'public'} >{'Public'}</option>
                                </select>

                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={change_access}
                                        text={'Update'}
                                        loading={edit_loading}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">In Stock</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <span className="flex-grow"> {product?.product.stock}</span> */}
                                <input
                                    type="number"
                                    className='flex-grow p-2 rounded border border-gray-300 outline-none'
                                    placeholder={product?.product.stock}
                                    defaultValue={product?.product.stock}
                                    onChange={(e) => setInStock(e.target.value)}
                                />
                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={change_in_stock}
                                        text={'Update'}
                                        loading={edit_loading}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Condition</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* <span className="flex-grow"> ${product?.product.condition}</span> */}

                                <input
                                    type="text"
                                    className='flex-grow p-2 rounded border border-gray-300 outline-none'
                                    placeholder={product?.product.condition}
                                    defaultValue={product?.product.condition}
                                    onChange={(e) => setCondition(e.target.value)}
                                />

                                <span className="ml-4 flex-shrink-0">
                                    <BlueButton
                                        type="button"
                                        onClick={change_condition}
                                        text={'Update'}
                                        loading={edit_loading}
                                        outline
                                    />
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                    <div className="flex mb-4 flex-col">
                                        {showMore ? <div
                                            className="text-base text-gray-700 space-y-6 leading-normal"
                                            dangerouslySetInnerHTML={{ __html: product?.product?.description }}
                                        /> : <div
                                            className="text-base text-gray-700 space-y-6 leading-normal"
                                            dangerouslySetInnerHTML={{ __html: product?.product?.description.substring(0, 250) }}
                                        />}
                                    </div>
                                    <span onClick={() => setShowMore(!showMore)} className="bg-blue-primary self-center mx-auto text-white font-semibold text-center my-4 p-2 rounded text-xs">
                                        {showMore ? "Show Less" : "Show More"}
                                    </span>

                                </span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </span>
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default EditProduct
