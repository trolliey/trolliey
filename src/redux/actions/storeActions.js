import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    APPROVE_STORE_FAIL,
    APPROVE_STORE_REQUEST,
    APPROVE_STORE_SUCCESS,
    CREATE_SINGLE_STORE_INFO_FAIL,
    CREATE_SINGLE_STORE_INFO_REQUEST,
    CREATE_SINGLE_STORE_INFO_SUCCESS,
    GET_ALL_STORES_FAIL,
    GET_ALL_STORES_REQUEST,
    GET_ALL_STORES_SUCCESS,
    GET_DASHBOARD_PRODUCTS_FAIL,
    GET_DASHBOARD_PRODUCTS_REQUEST,
    GET_DASHBOARD_PRODUCTS_SUCCESS,
    GET_STORE_PRODUCTS_FAIL,
    GET_STORE_PRODUCTS_REQUEST,
    GET_STORE_PRODUCTS_SUCCESS,
} from "../constants/storeConstants"

//get all products for a single store
export const get_store_products_Actions = (id, query, page, limit) => (dispatch) => {
    dispatch({
        type: GET_STORE_PRODUCTS_REQUEST,
        payload: id // id of the user
    })
    axios.get(`${apiUrl}/store/single/${id}?page=${page}&limit=${limit}`, {
        search: query
    }).then(res => {
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

//get all products for a single store
export const get_dashboard_store_info_Actions = (id) => (dispatch) => {
    dispatch({
        type: GET_STORE_PRODUCTS_REQUEST,
        payload: id // id of the user
    })
    axios.get(`${apiUrl}/store/store_info/${id}`).then(res => {
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

//get all products for a single store
export const get_products_for_dashboard_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_DASHBOARD_PRODUCTS_REQUEST,
        payload: id // id of the user
    })
    axios.get(`${apiUrl}/store/seller/${id}`).then(res => {
        dispatch({
            type: GET_DASHBOARD_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_DASHBOARD_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//edit single store actions
export const create_single_store_Actions = (values, brands, token) => (dispatch) => {
    dispatch({
        type: CREATE_SINGLE_STORE_INFO_REQUEST,
        payload: { values, brands, token }
    })

    // Create a root reference

    axios.post(`${apiUrl}/store/create`, {
        values,
        brands,
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_SINGLE_STORE_INFO_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_SINGLE_STORE_INFO_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })


}

//get all stores
export const get_all_stores_Action = () => (dispatch) => {
    dispatch({
        type: GET_ALL_STORES_REQUEST
    })
    axios.get(`${apiUrl}/store/all`).then(res => {
        dispatch({
            type: GET_ALL_STORES_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_STORES_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//APPROVE STORE ACTION
export const approve_store_Action = (id) => (dispatch) => {
    dispatch({
        type: APPROVE_STORE_REQUEST,
        dispatch: id
    })
    axios.post(`${apiUrl}/store/approve/${id}`).then(res => {
        dispatch({
            type: APPROVE_STORE_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: APPROVE_STORE_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}