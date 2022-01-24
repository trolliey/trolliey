import { SAVE_EMAIL_FAIL, SAVE_EMAIL_REQUEST, SAVE_EMAIL_SUCCESS } from "../constants/emailConstants"

//geth all categories redicer
export const save_email_Reducer = (state = { save_email_loading: false }, action) => {
    switch (action.type) {
        case SAVE_EMAIL_REQUEST:
            return { save_email_loading: true }
        case SAVE_EMAIL_SUCCESS:
            return { save_email_loading: false, save_email_message: action.payload }
        case SAVE_EMAIL_FAIL:
            return { save_email_loading: false, save_email_error: action.payload }
        default:
            return state
    }
}