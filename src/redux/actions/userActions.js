import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { EDIT_SINGLE_USER_FAIL, EDIT_SINGLE_USER_REQUEST, EDIT_SINGLE_USER_SUCCESS, GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "../constants/userConstants"

//edit single user info
export const edit_single_user_Action = ({ token, user_obj, id }) => (dispatch) => {
    dispatch({
        type: EDIT_SINGLE_USER_REQUEST,
        payload: token, user_obj
    })
    axios.patch(`${apiUrl}/user/edit/${id}`, { user: user_obj }, { headers: { Authorization: token } }).then(res => {
        dispatch({
            type: EDIT_SINGLE_USER_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: EDIT_SINGLE_USER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

export const get_all_users_Action = () => (dispatch)=>{
    dispatch({
        type: GET_ALL_USERS_REQUEST
    })
    axios.get(`${apiUrl}/user/all`).then(res=>{
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: res.data
        })
    }).catch(error=>{
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}