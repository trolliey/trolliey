import { ADD_TO_CART_SUCCESS, REMOVE_FROM_CART_SUCCESS } from '../constants/cartConstants'

const initialState = {
    basket: [],
    qty: 0,
    total: 0,
    delivery: 5,
};

// add items to cart reducer
export const add_to_cart_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            let existedItem = state.basket.find((cartItem) => cartItem.id === action.payload.id);
            if (existedItem) {
                return {
                    ...state,
                    basket: [...state.basket]
                }
            }
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        default:
            return state
    }
}

// remove from basket reducer
export const remove_from_cart_Reducer = (state = { basket: [] }, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART_SUCCESS:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn('no item with such id exists in cart')
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}