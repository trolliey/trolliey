import { GET_STORE_PRODUCTS_FAIL, GET_STORE_PRODUCTS_REQUEST, GET_STORE_PRODUCTS_SUCCESS } from "../constants/storeConstants"

//create productr reducer
export const get_store_products_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_STORE_PRODUCTS_REQUEST:
            return { loading: true }
        case GET_STORE_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload }
        case GET_STORE_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}