import axios from 'axios'
import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL, ORDER_RESET } from './orderConstants'


export const createOrder = (obj) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("http://192.168.158.145:3000/api/order/createOrder", obj, config);

        dispatch({
            type: ORDER_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: ORDER_FAIL,
            payload: error
        })
    }

}

