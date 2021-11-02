import { GET_SUBCATEGORIES_FAIL, GET_SUBCATEGORIES_REQUEST, GET_SUBCATEGORIES_SUCCESS } from "../constants/getSubCategoryConstants"

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