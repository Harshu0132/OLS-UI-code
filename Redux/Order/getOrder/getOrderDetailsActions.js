import axios from 'axios'
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ORDER_RESET } from './getOrderDetailsConstants'


export const getOrderDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ORDER_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        const { data } = await axios.get("http://192.168.158.145:3000/api/order/getOrderDetails", config);
        // const { data } = await axios.get("http://localhost:3000/api/order/getOrderDetails", config);
        
        dispatch({
            type: GET_ORDER_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: GET_ORDER_FAIL,
            payload: error
        })
    }

}

