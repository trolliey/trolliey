import { GET_FEATURED_PRODUCTS_FAIL, GET_FEATURED_PRODUCTS_REQUEST, GET_FEATURED_PRODUCTS_SUCCESS } from "../constants/featuredProductsConstants"

//geth all categories redicer
export const get_featured_products_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_FEATURED_PRODUCTS_REQUEST:
            return { loading: true }
        case GET_FEATURED_PRODUCTS_SUCCESS:
            return { loading: false, featured_products: action.payload }
        case GET_FEATURED_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}