import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_RESET } from './registerConstants'


export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: action.payload,
            }

        case REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case REGISTER_RESET:
            return {}
        default:
            return state;
    }
}

