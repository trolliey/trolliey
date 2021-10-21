import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/authConstants"

//regsiter user reducer
export const register_user_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { loading: true }
        case REGISTER_USER_SUCCESS:
            return { loading: false, message: 'Register Success!' }
        case REGISTER_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//login user reducer
export const login_user_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return { loading: true }
        case LOGIN_USER_SUCCESS:
            return { loading: false, message: 'Login Success!', userInfo: action.payload }
        case LOGIN_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}