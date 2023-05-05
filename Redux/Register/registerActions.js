import axios from 'axios'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_RESET } from './registerConstants'


export const register = (obj) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("http://192.168.72.145:3000/api/user/register", obj, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: REGISTER_FAIL,
            payload: error
        })
    }

}

