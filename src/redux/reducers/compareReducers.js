import { ADD_TO_COMPARE_SUCCESS } from "../constants/compareConstants"

// add items to cart reducer
export const add_to_compare_Reducer = (state = { compare_basket: [] }, action) => {
    switch (action.type) {
        case ADD_TO_COMPARE_SUCCESS:
            return {
                ...state,
                compare_basket: [...state.compare_basket, action.payload]
            }
        default:
            return state
    }
}