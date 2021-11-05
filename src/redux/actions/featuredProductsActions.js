import axios from 'axios'
import { apiUrl } from '../../utils/apiUrl'
import { GET_FEATURED_PRODUCTS_REQUEST, GET_FEATURED_PRODUCTS_SUCCESS, GET_FEATURED_PRODUCTS_FAIL } from '../constants/featuredProductsConstants'

//GET FEATIURED PRODUCTS
export const get_featured_products_Actions = () => (dispatch) => {
    dispatch({
        type: GET_FEATURED_PRODUCTS_REQUEST
    })
    axios.get(`${apiUrl}/featured/all`).then(res => {
        dispatch({
            type: GET_FEATURED_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_FEATURED_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}