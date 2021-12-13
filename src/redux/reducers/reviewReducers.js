import { CREATE_REVIEW_FAIL, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_ALL_STORE_REVIEWS_FAIL, GET_ALL_STORE_REVIEWS_REQUEST, GET_ALL_STORE_REVIEWS_SUCCESS, LIKE_A_REVIEW_FAIL, LIKE_A_REVIEW_REQUEST, LIKE_A_REVIEW_SUCCESS } from "../constants/reviewConstants"

// create a review reducer
export const create_a_review_Reducer = (state = { rev_loading: false }, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
            return { rev_loading: true }
        case CREATE_REVIEW_SUCCESS:
            return { rev_loading: false, spec_products: action.payload, message: 'Review posted' }
        case CREATE_REVIEW_FAIL:
            return { rev_loading: false, rev_error: action.payload }
        default:
            return state
    }
}

// get all store reviews
export const get_all_store_reviews_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_STORE_REVIEWS_REQUEST:
            return { loading: true }
        case GET_ALL_STORE_REVIEWS_SUCCESS:
            return { loading: false, reviews: action.payload }
        case GET_ALL_STORE_REVIEWS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// like a review reducer
export const like_a_review_Reducer = (state = { like_loading: false }, action) => {
    switch (action.type) {
        case LIKE_A_REVIEW_REQUEST:
            return { like_loading: true }
        case LIKE_A_REVIEW_SUCCESS:
            return { like_loading: false, like: action.payload, message: 'success' }
        case LIKE_A_REVIEW_FAIL:
            return { like_loading: false, like_error: action.payload }
        default:
            return state
    }
}