import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL, ORDER_RESET } from './orderConstants'


export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {
                loading: true
            }
        case ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: action.payload,
            }

        case ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ORDER_RESET:
            return {}
        default:
            return state;
    }
}

