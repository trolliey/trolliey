import { GET_ALL_APPLICATIONS_FAIL, GET_ALL_APPLICATIONS_REQUEST, GET_ALL_APPLICATIONS_SUCCESS } from "../constants/applicationConstants"
import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"

export const get_all_applications_Action = () => (dispatch) => {
    dispatch({
        type: GET_ALL_APPLICATIONS_REQUEST
    })
    axios.get(`${apiUrl}/store/applications/all`).then(res => {
        dispatch({
            type: GET_ALL_APPLICATIONS_SUCCESS,
            payload: res.data.applications
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_APPLICATIONS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}