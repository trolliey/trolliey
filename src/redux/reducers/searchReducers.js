import { SET_SEARCH_QUERY_REQUEST, SET_SEARCH_QUERY_SUCCESS } from "../constants/searchConstants"

//sending a message
export const set_search_query_Reducer = (state = {loading:false, query: ''}, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY_REQUEST:
            return { loading: true }
        case SET_SEARCH_QUERY_SUCCESS:
            return { loading: false, query: action.payload }
        default:
            return state
    }
}