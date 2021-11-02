import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { GET_STORE_PRODUCTS_FAIL, GET_STORE_PRODUCTS_REQUEST, GET_STORE_PRODUCTS_SUCCESS } from "../constants/storeConstants"

//GET ALL PRODUCTS FOR A SINGLE STORE
export const get_store_products_Actions = (id) => (dispatch) =>{
    dispatch({
        type: GET_STORE_PRODUCTS_REQUEST,
        payload: id // id of the user
    })
    axios.get(`${apiUrl}/store/single/${id}`).then(res=>{
        dispatch({
            type: GET_STORE_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error=>{
        dispatch({
            type: GET_STORE_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}