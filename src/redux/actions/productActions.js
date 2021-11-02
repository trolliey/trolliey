import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS } from "../constants/productConstants"
import axios from 'axios'
import { apiUrl } from "../../utils/apiUrl"

//create a product
export const create_product_Action = (token, product) => (dispatch) => {
    dispatch({
        type: CREATE_PRODUCT_REQUEST,
        payload: token
    })
    axios.post(`${apiUrl}/product/create`, {
        product
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