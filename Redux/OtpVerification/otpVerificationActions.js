import axios from 'axios'
import { OTP_VERIFICATION_REQUEST, OTP_VERIFICATION_SUCCESS, OTP_VERIFICATION_FAIL, OTP_VERIFICATION_RESET } from './otpVerificationConstants'

export const otpVerify = (otp) => async (dispatch) => {
    try {
        dispatch({
            type: OTP_VERIFICATION_REQUEST,
        })


        let obj = {
            userOTP: otp
        };

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("http://192.168.43.145:3000/api/user/verifyUser", obj, config);

        dispatch({
            type: OTP_VERIFICATION_SUCCESS,
            payload: data
        })


    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: OTP_VERIFICATION_FAIL,
            payload: error
        })
    }

}

