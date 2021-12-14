import {
    ADD_CATEGORY_FAIL,
    ADD_CATEGORY_REQUEST,
    ADD_CATEGORY_SUCCESS,
    GET_All_CATEGORIES_FAIL,
    GET_All_CATEGORIES_REQUEST,
    GET_All_CATEGORIES_SUCCESS
} from "../constants/categoryConstants"
import { apiUrl } from "../../utils/apiUrl"
import axios from "axios"

//get all categories action
export const get_all_categories_Action = () => (dispatch) => {
    dispatch({
        type: GET_All_CATEGORIES_REQUEST
    })
    axios.get(`${apiUrl}/category/all`).then(res => {
        dispatch({
            type: GET_All_CATEGORIES_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_All_CATEGORIES_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

// add a category action
export const add_category_Action = (category) => (dispatch) => {
    dispatch({
        type: ADD_CATEGORY_REQUEST,
        payload: { category }
    })
    axios.post(`${apiUrl}/category/create`, {
        category: category,
        picture: ' '
    }).then(res => {
        dispatch({
            type: ADD_CATEGORY_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: ADD_CATEGORY_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}