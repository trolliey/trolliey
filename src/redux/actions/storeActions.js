import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    CREATE_SINGLE_STORE_INFO_FAIL,
    CREATE_SINGLE_STORE_INFO_REQUEST,
    CREATE_SINGLE_STORE_INFO_SUCCESS,
    GET_STORE_PRODUCTS_FAIL,
    GET_STORE_PRODUCTS_REQUEST,
    GET_STORE_PRODUCTS_SUCCESS,
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
//edit single store actions
export const create_single_store_Actions = (name, description, logo, token) => (dispatch) => {
    dispatch({
        type: CREATE_SINGLE_STORE_INFO_REQUEST
    })
    axios.post(`${apiUrl}/store/create`, {
        name: name,
        logo: logo,
        banner: 'no baner',
        description: description

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