import { ADD_NEW_AD_FAIL, ADD_NEW_AD_REQUEST, ADD_NEW_AD_SUCCESS } from "../constants/adConstants"

//create new ad 
export const create_new_add_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case ADD_NEW_AD_REQUEST:
            return { loading: true }
        case ADD_NEW_AD_SUCCESS:
            return { loading: false, ad: action.payload }
        case ADD_NEW_AD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}