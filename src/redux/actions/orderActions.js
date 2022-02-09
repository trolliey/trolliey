import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS
} from "../constants/orderContants"

//create an order action
export const create_order_Action = (store_id, token, products, amount, address, pay_on_delivery) => (dispatch) => {
    dispatch({
        type: CREATE_ORDER_REQUEST,
        payload: { store_id, token, products, amount }
    })
    axios.post(`${apiUrl}/order/create/${store_id}`, {
        products: products,
        amount: amount,
        address: address,
        pay_on_delivery: pay_on_delivery
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}