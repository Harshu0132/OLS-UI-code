import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_RESET } from './loginConstants'

export const login = (phone) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })

        let obj = {
            phone: phone
        };

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("http://192.168.77.145:3000/api/user/login", obj, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })


    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: LOGIN_FAIL,
            payload: error
        })
    }

}

