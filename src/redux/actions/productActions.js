import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_REQUEST
} from "../constants/productConstants"
import axios from 'axios'
import { apiUrl } from "../../utils/apiUrl"
import { REMOVE_FROM_CART_REQUEST } from "../constants/cartConstants"
import { REGISTER_USER_FAIL } from "../constants/authConstants"
import { storage } from "../../utils/firebase"

//create a product
export const create_product_Action = (token, values, additional_features, pictures, description, store_id) => async (dispatch) => {

    dispatch({
        type: CREATE_PRODUCT_REQUEST,
        payload: token
    })

    const uploads = [];
    const promises = [];
    const now = Date.now()

    pictures.forEach(file => {
        const path = storage.ref().child(`products/${file.name}-${now}`);
        const uploadPromise = path.put(file).then(async snapshot => {
            /** @TODO it's a good idea to do some error handling here */
            const downloadURL = await path.getDownloadURL();
            uploads.push(downloadURL);
        });
        promises.push(uploadPromise);
    })

    await Promise.all(promises); // Wait for all promises to complete
    // console.log(uploads)


    const product = {
        title: values.name,
        description: description,
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
        pictures: uploads,
        store_id: store_id
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
    axios.get(`${apiUrl}/product/all?page=${page}&limit=${limit}`, {
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

//remove a product action
export const remove_product_Action = (id, token) => (dispatch) => {
    dispatch({
        type: REMOVE_PRODUCT_REQUEST,
        payload: { id, token }
    })
    axios.delete(`${apiUrl}/product/delete/${id}`, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: REMOVE_FROM_CART_REQUEST,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

// edit single product
export const edit_single_product_Action = (id,body,token) => (dispatch) => {
    dispatch({
        type: EDIT_PRODUCT_REQUEST,
        payload: { id, token }
    })
    axios.patch(`${apiUrl}/product/edit/${id}`, { body }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: EDIT_PRODUCT_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: EDIT_PRODUCT_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}