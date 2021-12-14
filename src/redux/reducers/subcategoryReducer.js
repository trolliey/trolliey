import { CREATE_SUBCATEGORY_FAIL, CREATE_SUBCATEGORY_REQUEST, CREATE_SUBCATEGORY_SUCCESS, GET_SUBCATEGORIES_FAIL, GET_SUBCATEGORIES_REQUEST, GET_SUBCATEGORIES_SUCCESS } from "../constants/getSubCategoryConstants"

//get all subcategories for a category reducer
export const get_subcategories_Reducer = (state = { subcat_loading: false }, action) => {
    switch (action.type) {
        case GET_SUBCATEGORIES_REQUEST:
            return { subcat_loading: true }
        case GET_SUBCATEGORIES_SUCCESS:
            return { subcat_loading: false, sub_categories: action.payload }
        case GET_SUBCATEGORIES_FAIL:
            return { subcat_loading: false, subcat_error: action.payload }
        default:
            return state
    }
} 

//create sub cateogry reducer
export const add_subcategory_Reducer = (state = { add_subcat_loading: false }, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY_REQUEST:
            return { add_subcat_loading: true }
        case CREATE_SUBCATEGORY_SUCCESS:
            return { add_subcat_loading: false, sub_category: action.payload, add_subcat_message: 'Sub-Category added!' }
        case CREATE_SUBCATEGORY_FAIL:
            return { add_subcat_loading: false, add_subcat_error: action.payload }
        default:
            return state
    }
}