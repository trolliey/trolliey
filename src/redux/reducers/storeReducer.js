import { CREATE_SINGLE_STORE_INFO_FAIL, CREATE_SINGLE_STORE_INFO_REQUEST, CREATE_SINGLE_STORE_INFO_SUCCESS, GET_ALL_STORES_FAIL, GET_ALL_STORES_REQUEST, GET_ALL_STORES_SUCCESS, GET_STORE_PRODUCTS_FAIL, GET_STORE_PRODUCTS_REQUEST, GET_STORE_PRODUCTS_SUCCESS } from "../constants/storeConstants"

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

export const create_single_store_Reducer = (state = { create_loading: false }, action) => {
    switch (action.type) {
        case CREATE_SINGLE_STORE_INFO_REQUEST:
            return { create_loading: true }
        case CREATE_SINGLE_STORE_INFO_SUCCESS:
            return { create_loading: false, message: 'Successfully edited' }
        case CREATE_SINGLE_STORE_INFO_FAIL:
            return { create_loading: false, create_error: action.payload }
        default:
            return state
    }
}

//get all stores
export const get_all_stores_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_STORES_REQUEST:
            return { loading: true }
        case GET_ALL_STORES_SUCCESS:
            return { loading: false, stores: action.payload }
        case GET_ALL_STORES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}