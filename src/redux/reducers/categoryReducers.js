import { GET_All_CATEGORIES_FAIL, GET_All_CATEGORIES_REQUEST, GET_All_CATEGORIES_SUCCESS } from "../constants/categoryConstants"

//geth all categories redicer
export const get_all_categories_Reducer = (state = { cat_loading: false }, action) => {
    switch (action.type) {
        case GET_All_CATEGORIES_REQUEST:
            return { cat_loading: true }
        case GET_All_CATEGORIES_SUCCESS:
            return { cat_loading: false, categories: action.payload }
        case GET_All_CATEGORIES_FAIL:
            return { cat_loading: false, cat_error: action.payload }
        default:
            return state
    }
}   