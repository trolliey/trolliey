import {  CREATE_SINGLE_STORE_INFO_FAIL, CREATE_SINGLE_STORE_INFO_REQUEST, CREATE_SINGLE_STORE_INFO_SUCCESS, GET_STORE_PRODUCTS_FAIL, GET_STORE_PRODUCTS_REQUEST, GET_STORE_PRODUCTS_SUCCESS } from "../constants/storeConstants"

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

export const create_single_store_Reducer = (state = { edit_loading: false }, action) =>{
    switch (action.type) {
        case CREATE_SINGLE_STORE_INFO_REQUEST:
            return { edit_loading: true }
        case CREATE_SINGLE_STORE_INFO_SUCCESS:
            return { edit_loading: false, message: 'Successfully edited' }
        case CREATE_SINGLE_STORE_INFO_FAIL:
            return { edit_loading: false, edit_error: action.payload }
        default:
            return state
    }
}