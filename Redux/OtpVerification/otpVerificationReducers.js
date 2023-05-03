import { OTP_VERIFICATION_REQUEST, OTP_VERIFICATION_SUCCESS, OTP_VERIFICATION_FAIL, OTP_VERIFICATION_RESET } from './otpVerificationConstants'



export const otpVerificationReducer = (state = {}, action) => {
    switch (action.type) {
        case OTP_VERIFICATION_REQUEST:
            return {
                loading: true
            }
        case OTP_VERIFICATION_SUCCESS:
            return {
                loading: false,
                success: true,
                data: action.payload.message,
            }

        case OTP_VERIFICATION_FAIL:
            return {
                success: false,
                loading: false,
                error: action.payload.message
            }

        case OTP_VERIFICATION_RESET:
            return {}
        default:
            return state;
    }
}

