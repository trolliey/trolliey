import axios from 'axios'
import { apiUrl } from '../../utils/apiUrl'
import { CREATE_SUBCATEGORY_FAIL, CREATE_SUBCATEGORY_REQUEST, CREATE_SUBCATEGORY_SUCCESS, GET_SUBCATEGORIES_FAIL, GET_SUBCATEGORIES_REQUEST, GET_SUBCATEGORIES_SUCCESS } from '../constants/getSubCategoryConstants'

//GET ALL SUBCATEGORIRES FOR A CAEGORY
export const get_subcategories_Action = (category) => (dispatch) => {
    dispatch({
        type: GET_SUBCATEGORIES_REQUEST,
        payload: category
    })
    axios.get(`${apiUrl}/sub_category/all/${category}`).then(res => {
        dispatch({
            type: GET_SUBCATEGORIES_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_SUBCATEGORIES_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//create sub category action
export const add_subcategory_Action = (sub_cat, picture, category_slug) => (dispatch) => {
    dispatch({
        type: CREATE_SUBCATEGORY_REQUEST,
        payload: { sub_cat, picture, category_slug }
    })
    axios.post(`${apiUrl}/sub_category/create/${category_slug}`, {
        sub_category: sub_cat,
        sub_category_picture: picture ? picture : '',
        description: ''
    }).then(res => {
        dispatch({
            type: CREATE_SUBCATEGORY_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_SUBCATEGORY_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}