import {
    APPROVE_STORE_FAIL,
    APPROVE_STORE_REQUEST,
    APPROVE_STORE_SUCCESS,
    CREATE_SINGLE_STORE_INFO_FAIL,
    CREATE_SINGLE_STORE_INFO_REQUEST,
    CREATE_SINGLE_STORE_INFO_SUCCESS,
    EDIT_SINGLE_STORE_INFO_FAIL,
    EDIT_SINGLE_STORE_INFO_REQUEST,
    EDIT_SINGLE_STORE_INFO_SUCCESS,
    GET_ALL_STORES_FAIL,
    GET_ALL_STORES_REQUEST,
    GET_ALL_STORES_SUCCESS,
    GET_DASHBOARD_PRODUCTS_FAIL,
    GET_DASHBOARD_PRODUCTS_REQUEST,
    GET_DASHBOARD_PRODUCTS_SUCCESS,
    GET_STORE_PRODUCTS_FAIL,
    GET_STORE_PRODUCTS_REQUEST,
    GET_STORE_PRODUCTS_SUCCESS
} from "../constants/storeConstants"

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

//create productr reducer
export const get_dashboard_products_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_DASHBOARD_PRODUCTS_REQUEST:
            return { loading: true }
        case GET_DASHBOARD_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload }
        case GET_DASHBOARD_PRODUCTS_FAIL:
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
            return { create_loading: false, message: 'Sucessfully Applied!' }
        case CREATE_SINGLE_STORE_INFO_FAIL:
            return { create_loading: false, create_error: 'Error applying for store. Try again later' }
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

// APROVE STORE REDCUER
export const approve_store_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case APPROVE_STORE_REQUEST:
            return { loading: true }
        case APPROVE_STORE_SUCCESS:
            return { loading: false, message: 'Sucessfully!' }
        case APPROVE_STORE_FAIL:
            return { loading: false, error: 'Error approving for store. Try again later' }
        default:
            return state
    }
}

// edit single store info
export const edit_store_info_Reducer = (state = { store_edit_loading: false }, action) => {
    switch (action.type) {
        case EDIT_SINGLE_STORE_INFO_REQUEST:
            return { store_edit_loading: true }
        case EDIT_SINGLE_STORE_INFO_SUCCESS:
            return { store_edit_loading: false, store_edit_message: 'Sucessfully Edited!' }
        case EDIT_SINGLE_STORE_INFO_FAIL:
            return { store_edit_loading: false, store_edit_error: 'Error editing for store. Try again later' }
        default:
            return state
    }
}