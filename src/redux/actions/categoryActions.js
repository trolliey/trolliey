import {
    ADD_CATEGORY_FAIL,
    ADD_CATEGORY_REQUEST,
    ADD_CATEGORY_SUCCESS,
    GET_All_CATEGORIES_FAIL,
    GET_All_CATEGORIES_REQUEST,
    GET_All_CATEGORIES_SUCCESS,
    GET_All_SUBCATEGORIES_OF_PARENT_FAIL,
    GET_All_SUBCATEGORIES_OF_PARENT_REQUEST,
    GET_All_SUBCATEGORIES_OF_PARENT_SUCCESS
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
export const add_category_Action = (category, picture, parent_id) => (dispatch) => {
    dispatch({
        type: ADD_CATEGORY_REQUEST,
        payload: { category, picture, parent_id }
    })
    axios.post(`${apiUrl}/category/create`, {
        name: category,
        category_picture: picture,
        parent: parent_id
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

//get all subcategories
export const get_all_subcategories_Action = (category_slug) => (dispatch) =>{
    dispatch({
        type: GET_All_SUBCATEGORIES_OF_PARENT_REQUEST,
        payload: { category_slug }
    })
    axios.get(`${apiUrl}/sub_category/all/${category_slug}`).then(res => {
        dispatch({
            type: GET_All_SUBCATEGORIES_OF_PARENT_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_All_SUBCATEGORIES_OF_PARENT_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}