import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS } from "../constants/productConstants"

//create productr reducer
export const create_a_product_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return { loading: true }
        case CREATE_PRODUCT_SUCCESS:
            return { loading: false, message: 'Product added to inventory' }
        case CREATE_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}