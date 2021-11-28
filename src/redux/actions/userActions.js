import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { EDIT_SINGLE_USER_FAIL, EDIT_SINGLE_USER_REQUEST, EDIT_SINGLE_USER_SUCCESS } from "../constants/userConstants"

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