import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Login/loginActions";

const Login = (mobileTiitle, OTPTitle, buttonTitle) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [phone, setPhone] = useState(null);


  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, payload } = userLogin;

  const disabledNextButton = (phone) => {
    return phone?.length !== 10 ? true : false
  }

  const sendOtp = () => {
    dispatch(login(phone))
    // console.warn(userLogin);
    // navigation.navigate('LoginVerificationScreen', {
    //   phone: phone
    // })
  }

  useEffect(() => {
    console.log(loading);
    console.log(payload);
    if (!loading && payload) {
      navigation.navigate('LoginVerificationScreen', {
        phone: phone
      });
    }
  }, [payload, loading])

  return (
    <SafeAreaView className="mt-5 p-3">
      <View className="flex-col space-x-2 pb-2 mx-2">
        <View className="flex-row space-x-2 p-2 border-t-0 border-b-2 border-gray-300">
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor={"gray"}
            keyboardType="numeric"
            onChangeText={(e) => setPhone(e)}
            style={{
              fontSize: 20,
            }}
          ></TextInput>
        </View>
        <Text className="text-[15px] text-gray-400 mt-2 mb-3">
          {/* {OTPTitle} */}
          We will send OTP to your Mobile Number
        </Text>
        <Button
          title="Next"
          disabled={disabledNextButton(phone)}
          // disabled={false}
          onPress={() => sendOtp()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
