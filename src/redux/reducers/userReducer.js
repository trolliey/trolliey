import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "../constants/userConstants"

//get all users reducer
export const get_all_users_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return { loading: true }
        case GET_ALL_USERS_SUCCESS:
            return { loading: false, users: action.payload }
        case GET_ALL_USERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}