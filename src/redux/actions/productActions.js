import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS
} from "../constants/productConstants"
import axios from 'axios'
import { apiUrl } from "../../utils/apiUrl"

//create a product
export const create_product_Action = (token, values, additional_features, pictures) => (dispatch) => {

    dispatch({
        type: CREATE_PRODUCT_REQUEST,
        payload: token
    })


    const product = {
        title: values.name,
        description: values.description,
        price: values.price,
        category: values.category,
        sub_category: values.sub_category,
        brand: values.brand,
        condition: values.condition,
        sub_title: values.sub_title,
        stock: values.in_stock,
        discount_price: values.discount,
        shipping_type: values.shipping_offered,
        shipping_area: values.shipping_radius,
        shipping_price: values.shipping_price,
        additional_features: additional_features,
        pictures: pictures
    }
    axios.post(`${apiUrl}/product/create`, {
        product,
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: res.status
        })
    }).catch(error => {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })

}

// get all products
export const get_all_products_Action = (query, page, limit) => (dispatch) => {
    dispatch({
        type: GET_ALL_PRODUCTS_REQUEST,
    })
    axios.post(`${apiUrl}/product/all?page=${page}&limit=${limit}`, {
        search: query
    }).then(res => {
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}


// get single product actions
export const get_single_product_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_SINGLE_PRODUCT_REQUEST,
        payload: id
    })
    axios.get(`${apiUrl}/product/single/${id}`).then(res => {
        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}