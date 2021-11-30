import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { ADD_NEW_AD_FAIL, ADD_NEW_AD_REQUEST, ADD_NEW_AD_SUCCESS } from "../constants/adConstants"

export const create_new_add_Action = (picture, name, link_to, delete_at) => (dispatch) => {
    dispatch({
        type: ADD_NEW_AD_REQUEST,
        payload: { picture, name, link_to, delete_at }
    })
    axios.post(`${apiUrl}/ads/create`, {
        picture,
        name,
        link_to,
        delete_at
    }).then(res => {
        dispatch({
            type: ADD_NEW_AD_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: ADD_NEW_AD_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}