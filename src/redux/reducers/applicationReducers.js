import { GET_ALL_APPLICATIONS_FAIL, GET_ALL_APPLICATIONS_REQUEST, GET_ALL_APPLICATIONS_SUCCESS } from "../constants/applicationConstants"

//login user reducer
export const get_all_applications_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_APPLICATIONS_REQUEST:
            return { loading: true }
        case GET_ALL_APPLICATIONS_SUCCESS:
            return { loading: false, applications: action.payload }
        case GET_ALL_APPLICATIONS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}