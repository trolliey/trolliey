import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Error from '../../components/alerts/Error'
import SuccessAlert from '../../components/alerts/SuccessAlert'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'
import { create_product_Action } from '../../redux/actions/productActions'

function Success({ values, prevStep, pictures, additional_features, nextStep }) {
    const _product = useSelector(state => state.create_a_product)
    const { error, message, loading } = _product
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const dispatch = useDispatch()

    const save_product = () => {
        // const product = {
        //     title: values.name,
        //     description: values.description,
        //     price: values.price,
        //     category: values.category,
        //     sub_category: values.sub_category,
        //     brand: values.brand,
        //     condition: values.condition,
        //     sub_title: values.sub_title,
        //     stock: values.in_stock,
        //     discount_price: values.discount,
        //     shipping_type: values.shipping_offered,
        //     shipping_area: values.shipping_radius,
        //     shipping_price: values.shipping_price,
        //     additional_features: additional_features
        // }
        dispatch(create_product_Action(userInfo?.token, values, additional_features, pictures))
        // console.log(product)   
    }

    useEffect(() => {
        if (message === 'Product added to inventory') {
            setTimeout(() => {
                nextStep()
            }, 1000);
        }
    }, [message, nextStep, values])
    
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="flex-1 p-4 flex flex-col">
                        <div className="flex pb-4 pl-4 text-gray-700 font-semibold text-lg border-b border-gray-200 mb-4">
                            Final Stage
                        </div>
                        <p className="text-center text-gray-700 font-semibold text-lg">Your have finishied writing information about your product</p>
                        <p className="text-center text-sm text-gray-400">Verify that it is correct below and proceed to add it to your inventory</p>
                        <div className="flex flex-col md:px-4 mt-8">
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product name : </p>
                                <p>{values?.name}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product description : </p>
                                <p>{values?.description}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product category : </p>
                                <p>{values?.category}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product sub-category : </p>
                                <p>{values?.sub_category}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product condition : </p>
                                <p>{values?.condition}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product price : </p>
                                <p>{values?.price}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product discount price : </p>
                                <p>{values?.discount}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product shipping : </p>
                                <p>{values?.shipping_offered}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product shipping price : </p>
                                <p>{values?.shipping_price}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product shipping places : </p>
                                <p>{values?.shipping_radius}</p>
                            </div>
                            <div className="flex flex-row justify-between text-gray-700 py-3 border-b border-gray-200">
                                <p className="capitalize">product properties : </p>
                                <div className="flex flex-col">
                                    {
                                        additional_features.map((feature, index) => (
                                            <p key={index} >{feature}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading && (<p className="p-2 bg-yellow-400 rounded w-full text-center my-2 capitalize text-gray-700 font-semibold">Please wait while we upload you images and saving the product!</p>)}
                    {message && <SuccessAlert message={message} />}
                    {error && <Error error={error} />}
                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex w-full justify-between flex-row">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Make sure the details of the product are ad you want</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline onClick={() => prevStep(values)} />
                                <div className="mx-2"></div>
                                <BlueButton text="Save Product" onClick={save_product} loading={loading} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Success