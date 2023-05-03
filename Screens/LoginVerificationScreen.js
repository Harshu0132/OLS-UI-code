import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import OTPTextInput from 'react-native-otp-textinput'
import { useDispatch, useSelector } from 'react-redux';
import { otpVerify } from '../Redux/OtpVerification/otpVerificationActions';
import { useNavigation } from "@react-navigation/native";

const LoginVerificationScreen = ({ route }) => {
    const { phone } = route.params;
    // const phone = 9923527956

    console.log(phone);
    const [code, setCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(28);

    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const otpVerifiedData = useSelector((state) => state.otpVerifiedData)
    const { loading , data, success, error } = otpVerifiedData

    const handleCodeChange = (text) => {
        setCode(text);
    };
    
    useEffect(() => {
        console.log(success);
        console.log(data);

        console.log(timeLeft);
        if(success){
            navigation.navigate('MainContainer');
            console.warn(data);
        }
        else if(error){
            console.warn("Invalid Otp. Please resend your Otp to validate.")
        }

        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
        return () => clearInterval(intervalId);


    }, [timeLeft, success, error]);


    const submitHandler = () => {
        const otp = parseInt(code);
        console.warn(otp);
        dispatch(otpVerify(otp))
    }

    return (
        <View className='p-3'>
            <Text className="text-[#747474]">OTP send to {phone}</Text>

            <View className='border-2 border-[#eaeaea] mt-5 p-3'>
                <Text className="text-center text-[#747474]">Enter the OTP you received</Text>
                <View>
                    <OTPTextInput
                        handleTextChange={handleCodeChange}
                        inputCount={4}
                        keyboardType="numeric"
                    />

                </View>
                <View className="my-2">
                    <Button title="Verify" onPress={submitHandler}></Button>
                </View>
            </View>
            <View className='mt-3'>
                <Text className="text-center text-[#747474]">You should receive OTP in {timeLeft} second</Text>
            </View>
        </View>
    )
}

export default LoginVerificationScreen

