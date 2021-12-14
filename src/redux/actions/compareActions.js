import { ADD_TO_COMPARE_SUCCESS } from "../constants/compareConstants"

export const add_to_compare_Action = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_COMPARE_SUCCESS,
        payload: item
    })
}
