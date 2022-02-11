import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import BusinessInfo from './BusinessInfo';
import ProductsInfo from './ProductsInfo';

function CreateStore() {
    const [step, setActiveStep] = useState(1);
    const [brands, setBrands] = useState([])

    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        mobile_number: '',
        company_name: '',
        business_category: '',
        company_website: '',
        about: '',
        facebook: '',
        instagram: '',
        twitter: '',
        vat_registered: false,
        busieness_registration_number: '',
        busines_owner_name: '',
        business_owner_email: '',
        number_of_uniqe_products: '',
        brands_products: [],
        stock: false,
        stock_handle: '',
        physical_store: false,
        physical_store_address: '',
        supplier_to_retailer: false,
        registered_account: false
    })

    // go back to previous page
    const prevStep = (new_values) => {
        setState({ ...state, ...new_values });
        setActiveStep(step - 1)
    }

    // proceed to the next step
    const nextStep = (new_values) => {
        setState({ ...state, ...new_values });
        setActiveStep(step + 1)
    }

    // handle field change
    const handleChange = input => e => {
        setState((prev) => ({ ...prev, [input]: e.target.value }));
    }

    const {
        first_name,
        last_name,
        email,
        phone_number,
        mobile_number,
        company_name,
        business_category,
        company_website,
        about,
        facebook,
        instagram,
        twitter,
        vat_registered,
        busieness_registration_number,
        busines_owner_name,
        business_owner_email,
        number_of_uniqe_products,
        brands_products,
        stock,
        stock_handle,
        physical_store,
        physical_store_address,
        supplier_to_retailer,
        registered_account
    } = state

    const values = {
        first_name,
        last_name,
        email,
        phone_number,
        mobile_number,
        company_name,
        business_category,
        company_website,
        about,
        facebook,
        instagram,
        twitter,
        vat_registered,
        busieness_registration_number,
        busines_owner_name,
        business_owner_email,
        number_of_uniqe_products,
        brands_products,
        stock,
        stock_handle,
        physical_store,
        physical_store_address,
        supplier_to_retailer,
        registered_account
    }


    switch (step) {
        case 1:
            return (
                <ContactInfo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <BusinessInfo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    prevStep={prevStep}
                />
            )
        case 3:
            return (
                <ProductsInfo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    prevStep={prevStep}
                    setBrands={setBrands}
                    brands={brands}
                />
            )
        default:
            return (
                <ContactInfo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
    }

}

export default CreateStore;
