import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ORDER_RESET } from './getOrderDetailsConstants'


export const getOrderDetailsReducers = (state = [], action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                loading: true
            }
        case GET_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: action.payload,
            }

        case GET_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case GET_ORDER_RESET:
            return {}
        default:
            return state;
    }
}

