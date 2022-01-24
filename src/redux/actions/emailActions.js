import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { SAVE_EMAIL_FAIL, SAVE_EMAIL_REQUEST, SAVE_EMAIL_SUCCESS } from "../constants/emailConstants"

export const save_email_Action = (email) => (dispatch) =>{
    dispatch({
        type: SAVE_EMAIL_REQUEST,
        payload: {email}
    })
    axios.post(`${apiUrl}/email/save`,{email}).then(res=>{
        dispatch({
            type: SAVE_EMAIL_SUCCESS,
            payload: res.data
        })
    }).catch(error=>{
        dispatch({
            type: SAVE_EMAIL_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}