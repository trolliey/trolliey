import { SET_SEARCH_QUERY_REQUEST, SET_SEARCH_QUERY_SUCCESS } from "../constants/searchConstants"

export const set_search_query_Action = (query) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_QUERY_REQUEST
    })
    dispatch({
        type: SET_SEARCH_QUERY_SUCCESS,
        payload: query
    })
}