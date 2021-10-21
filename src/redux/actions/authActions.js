import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from '../constants/authConstants'
import axios from 'axios'
import { apiUrl } from '../../utils/apiUrl'

//register user action
export const register_user_Action = (username, email, password, agreed) => (dispatch) => {
    dispatch({
        type: REGISTER_USER_REQUEST
    })
    axios.post(`${apiUrl}/auth/register`, {
        username,
        email,
        password,
        agreed
    }).then(res => {
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//login user action
export const login_user_Action = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_USER_REQUEST,
        payload: email, password
    })
    axios.post(`${apiUrl}/auth/login`, {
        email: email,
        password: password,
    }).then(res => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })
        localStorage.setItem("userInfo", JSON.stringify(res.data));
    }).catch(error => {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}