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
import firebase from "@firebase/app-compat"
import axios from 'axios'
import { apiUrl } from "../../utils/apiUrl"
import { storage } from "../../utils/firebase"

//create a product
export const create_product_Action = (token, product, pictures) => (dispatch) => {
    dispatch({
        type: CREATE_PRODUCT_REQUEST,
        payload: token
    })
    const picture_array = []
    const promises = []
    pictures.forEach(file => {
        const uploadTask = storage.ref().child(`products/-${Date.now()}`).put(file);
        promises.push(uploadTask);
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                    console.log(`Progress: ${progress}%`);
                }
            },
            error => {
                dispatch({
                    type: CREATE_PRODUCT_FAIL,
                    payload: error.message
                })
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    picture_array.push(downloadURL);
                })
                // do something with the url
            }
        )
    })

    Promise.all(promises).then((response) => {
        axios.post(`${apiUrl}/product/create`, {
            product,
            pictures: picture_array
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
        console.log(picture_array)
    }).catch(errorr => {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: errorr.message
        })
    })



}

// get all products
export const get_all_products_Action = (token, product) => (dispatch) => {
    dispatch({
        type: GET_ALL_PRODUCTS_REQUEST,
        payload: token
    })
    axios.get(`${apiUrl}/product/all`).then(res => {
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