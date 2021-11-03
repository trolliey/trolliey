import { GET_ALL_SPECIAL_PRODUCTS_FAIL, GET_ALL_SPECIAL_PRODUCTS_REQUEST, GET_ALL_SPECIAL_PRODUCTS_SUCCESS } from "../constants/specialProductConstants"

//geth all categories redicer
export const get_all_special_products_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_SPECIAL_PRODUCTS_REQUEST:
            return { loading: true }
        case GET_ALL_SPECIAL_PRODUCTS_SUCCESS:
            return { loading: false, spec_products: action.payload }
        case GET_ALL_SPECIAL_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}