import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    GET_SINGLE_STORE_INFO_REQUEST,
    GET_STORE_PRODUCTS_FAIL,
    GET_STORE_PRODUCTS_REQUEST,
    GET_STORE_PRODUCTS_SUCCESS
} from "../constants/storeConstants"

//get all products for a single store
export const get_store_products_Actions = (id) => (dispatch) => {
    dispatch({
        type: GET_STORE_PRODUCTS_REQUEST,
        payload: id // id of the user
    })
    axios.get(`${apiUrl}/store/single/${id}`).then(res => {
        dispatch({
            type: GET_STORE_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_STORE_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

// get sinlge store info
export const get_single_store_info_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_SINGLE_STORE_INFO_REQUEST,
        payload: id
    })
}