import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { CREATE_REVIEW_FAIL, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_ALL_STORE_REVIEWS_FAIL, GET_ALL_STORE_REVIEWS_REQUEST, GET_ALL_STORE_REVIEWS_SUCCESS, LIKE_A_REVIEW_FAIL, LIKE_A_REVIEW_REQUEST, LIKE_A_REVIEW_SUCCESS } from "../constants/reviewConstants"

//create a review
export const create_a_review_Action = (store, review, token) => (dispatch) => {
    dispatch({
        type: CREATE_REVIEW_REQUEST,
        payload: { store, review }
    })
    axios.post(`${apiUrl}/reviews/create/${store}`, {
        review: review
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_REVIEW_SUCCESS,
            paload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

// get all reviews for a single store
export const get_all_store_reviews_Action = (id, page, limit) => (dispatch) => {
    dispatch({
        type: GET_ALL_STORE_REVIEWS_REQUEST,
        payload: { id }
    })
    axios.post(`${apiUrl}/reviews/all/${id}?page=${page}&limit=${limit}`).then(res => {
        dispatch({
            type: GET_ALL_STORE_REVIEWS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_STORE_REVIEWS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//LIKE A REVIEW
export const like_a_review_Action = (id, token) => (dispatch) =>{
    dispatch({
        type: LIKE_A_REVIEW_REQUEST,
        payload: {id, token}
    })
    axios.patch(`${apiUrl}/reviews/like/${id}`,{}, {
        headers: {
            Authorization: token
        }
    }).then(res=>{
        dispatch({
            type: LIKE_A_REVIEW_SUCCESS,
            payload: res.data
        })
    }).catch(error=>{
        dispatch({
            type: LIKE_A_REVIEW_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}