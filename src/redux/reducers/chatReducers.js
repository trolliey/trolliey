import { CLOSE_CHAT, OPEN_CHAT } from "../constants/chatConstants";
import {
    GET_ALL_CHAT_USERS_FAIL,
    GET_ALL_CHAT_USERS_REQUEST,
    GET_ALL_CHAT_USERS_SUCCESS,
    GET_ALL_MESSAGES_FAIL,
    GET_ALL_MESSAGES_REQUEST,
    GET_ALL_MESSAGES_SUCCESS,
    SEND_MESSAGE_FAIL,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS
} from "../constants/chatConstants"

//sending a message
export const send_message_Reducer = (state = { send_loading: false }, action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
            return { send_loading: true }
        case SEND_MESSAGE_SUCCESS:
            return { send_loading: false, message: action.payload }
        case SEND_MESSAGE_FAIL:
            return { send_loading: false, error: action.payload }
        default:
            return state
    }
}

//get all chats
export const get_all_messages_Reducer = (state = { messages_loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES_REQUEST:
            return { messages_loading: true }
        case GET_ALL_MESSAGES_SUCCESS:
            return { messages_loading: false, messages: action.payload }
        case GET_ALL_MESSAGES_FAIL:
            return { messages_loading: false, error: action.payload }
        default:
            return state
    }
}

//get all chats
export const get_all_user_chats_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_CHAT_USERS_REQUEST:
            return { loading: true }
        case GET_ALL_CHAT_USERS_SUCCESS:
            return { loading: false, chats: action.payload }
        case GET_ALL_CHAT_USERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const toggle_chat_Reducer = (state = { chat_state: 'close' }, action) => {
    switch (action.type) {
        case OPEN_CHAT:
            return { chat_state: 'open' }
        case CLOSE_CHAT:
            return { chat_state: 'close' }
        default:
            return state
    }
}