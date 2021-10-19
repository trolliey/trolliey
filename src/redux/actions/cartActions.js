import { ADD_TO_CART_SUCCESS, REMOVE_FROM_CART_SUCCESS } from "../constants/cartConstants"

export const add_to_cart_Action = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: item
    })
}

//remove from basket
export const remove_from_cart_Action = () => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
    })
}