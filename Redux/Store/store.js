import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import userLogin from '../Login/index'
import otpVerifiedData from "../OtpVerification/index";
import userRegister from '../Register/index'

const reducer = combineReducers({
    ...userLogin,
    ...otpVerifiedData,
    ...userRegister
})




export const myStore = createStore(reducer, applyMiddleware(thunk));