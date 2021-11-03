import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { GET_ALL_SPECIAL_PRODUCTS_FAIL, GET_ALL_SPECIAL_PRODUCTS_REQUEST, GET_ALL_SPECIAL_PRODUCTS_SUCCESS } from "../constants/specialProductConstants"

// get all special products
export const get_all_special_products_Actions = () => (dispatch) => {
    dispatch({
        type: GET_ALL_SPECIAL_PRODUCTS_REQUEST
    })
    axios.get(`${apiUrl}/special/all`).then(res => {
        dispatch({
            type: GET_ALL_SPECIAL_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_SPECIAL_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}