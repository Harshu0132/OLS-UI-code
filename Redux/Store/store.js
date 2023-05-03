import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import userLogin from '../Login/index'
import otpVerifiedData from "../OtpVerification/index";

const reducer = combineReducers({
    ...userLogin,
    ...otpVerifiedData
})




export const myStore = createStore(reducer, applyMiddleware(thunk));