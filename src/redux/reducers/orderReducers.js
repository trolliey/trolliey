import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS
} from "../constants/orderContants"

//create order reducer
export const create_order_Reducer = (state = { order_loading: false }, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return { order_loading: true }
        case CREATE_ORDER_SUCCESS:
            return { order_loading: false, order_message: action.payload }
        case CREATE_ORDER_FAIL:
            return { order_loading: false, order_error: action.payload }
        default:
            return state
    }
}
