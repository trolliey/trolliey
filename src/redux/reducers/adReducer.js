import { ADD_NEW_AD_FAIL, ADD_NEW_AD_REQUEST, ADD_NEW_AD_SUCCESS, GET_ALL_ADS_FAIL, GET_ALL_ADS_REQUEST, GET_ALL_ADS_SUCCESS } from "../constants/adConstants"

//create new ad 
export const create_new_add_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case ADD_NEW_AD_REQUEST:
            return { loading: true }
        case ADD_NEW_AD_SUCCESS:
            return { loading: false, ad: action.payload, message: 'Ad created successfully!' }
        case ADD_NEW_AD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//get lll ads
export const get_all_ads_Reducer = (state = { ads_loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_ADS_REQUEST:
            return { ads_loading: true }
        case GET_ALL_ADS_SUCCESS:
            return { ads_loading: false, ads: action.payload }
        case GET_ALL_ADS_FAIL:
            return { ads_loading: false, ads_error: action.payload }
        default:
            return state
    }
}

//edit single as reduxer
export const edit_single_ad_Reducer = (state = { edit_loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_ADS_REQUEST:
            return { edit_loading: true }
        case GET_ALL_ADS_SUCCESS:
            return { edit_loading: false, new_ad: action.payload }
        case GET_ALL_ADS_FAIL:
            return { edit_loading: false, edit_error: action.payload }
        default:
            return state
    }
}