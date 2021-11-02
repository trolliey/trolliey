import {
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