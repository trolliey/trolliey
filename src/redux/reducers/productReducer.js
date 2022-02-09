import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL,
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_SUCCESS
} from "../constants/productConstants"

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

//get all products
export const get_all_products_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            return { loading: true }
        case GET_ALL_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload }
        case GET_ALL_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//create product reducer
export const get_single_product_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT_REQUEST:
            return { loading: true }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload }
        case GET_SINGLE_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//remove product redcuert
//create product reducer
export const remove_product_Reducer = (state = { remove_loading: false }, action) => {
    switch (action.type) {
        case REMOVE_PRODUCT_REQUEST:
            return { remove_loading: true }
        case REMOVE_PRODUCT_SUCCESS:
            return { remove_loading: false, removed: action.payload, message: 'Removed successfully' }
        case REMOVE_PRODUCT_FAIL:
            return { remove_loading: false, remove_error: action.payload }
        default:
            return state
    }
}

//remove product redcuert
//create product reducer
export const edit_single_product_Reducer = (state = { edit_loading: false }, action) => {
    switch (action.type) {
        case EDIT_PRODUCT_REQUEST:
            return { edit_loading: true }
        case EDIT_PRODUCT_SUCCESS:
            return { edit_loading: false, edit_message: 'Removed successfully' }
        case EDIT_PRODUCT_FAIL:
            return { edit_loading: false, edit_error: action.payload }
        default:
            return state
    }
}