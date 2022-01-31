import React from 'react'
import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'
import Category from './Category';
import Description from './Description';
import FinalMessage from './FinalMessage';
import Pricing from './Pricing';
import Success from './Success';


function AddProduct() {
    const [additional_features, setAdditional_features] = useState([])
    const [pictures, setPictures] = useState([])
    const [step, setActiveStep] = useState(1);
    const [quill_description,setQuillDescription] = useState('')

    const [state, setState] = useState({
        category: '',
        sub_category: '',
        brand: '',
        name: '',
        description: '',
        condition: '',
        type: '',
        title: '',
        price: '',
        discount: '',
        in_stock: '',
        sub_title:'',
        shipping_offered: '',
        shipping_price: '',
        shipping_radius:''
    })

    // go back to previous page
    const prevStep = (new_values) => {
        setState({...state, ...new_values });
        setActiveStep(step - 1)
    }

    // proceed to the next step
    const nextStep = (new_values) => {
        setState({...state, ...new_values });
        setActiveStep(step + 1)
    }

    // handle field change
    const handleChange = input => e => {
        setState((prev) => ({ ...prev, [input]: e.target.value }));
    }

    const {
        category,
        sub_category,
        name,
        description,
        condition,
        type,
        title,
        price,
        discount,
        in_stock,
        brand,
        sub_title,
        shipping_offered,
        shipping_price,
        shipping_radius
    } = state;

    const values = {
        category,
        sub_category,
        name,
        description,
        condition,
        type,
        title,
        price,
        discount,
        in_stock,
        brand,
        sub_title,
        shipping_offered,
        shipping_price,
        shipping_radius
    }

    switch (step) {
        case 1:
            return (
                <Category
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    setPictures={setPictures}
                />
            )
        case 2:
            return (
                <Description
                    nextStep={nextStep}
                    handleChange={handleChange}
                    prevStep={prevStep}
                    values={values}
                    setQuillDescription={setQuillDescription}
                    setAdditional_features={setAdditional_features}
                />
            )
        case 3:
            return (
                <Pricing
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 4:
            return (
                <Success
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                    additional_features={additional_features}
                    pictures={pictures}
                    nextStep={nextStep}
                    quill_description={quill_description}
                />
            )
        case 5:
            return (
                <FinalMessage
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                    additional_features={additional_features}
                    pictures={pictures}
                />
            )
        default:
            return (
                <DashboardLayout>
                    <div className="grid md:grid-cols-3 grid-cols-1 flex-row items-center mb-8">
                        <p className="col-span-1 text-lg text-gray-700 font-semibold md:flex hidden">Your Inventory Page</p>
                    </div>
                </DashboardLayout>
            )
    }


}

export default AddProduct
