import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_RESET } from './loginConstants'


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: action.payload,
            }

        case LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case LOGIN_RESET:
            return {}
        default:
            return state;
    }
}

