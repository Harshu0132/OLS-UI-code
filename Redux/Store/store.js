import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import userLogin from '../Login/index'
import otpVerifiedData from "../OtpVerification/index";
import userRegister from '../Register/index'
import userOrder from '../Order/index'
import getOrder from "../Order/getOrder/index";

const reducer = combineReducers({
    ...userLogin,
    ...otpVerifiedData,
    ...userRegister,
    ...userOrder,
    ...getOrder
})




export const myStore = createStore(reducer, applyMiddleware(thunk));