import { View, Text, SafeAreaView, TextInput, Button, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import LaundryIcon from "../assets/HomeLaundryImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Register/registerActions";


const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, payload, success } = userRegister;

  useEffect(() => {
    // console.log(loading);
    // console.log(payload);
    if (!loading && payload && success) {
      navigation.navigate('MainContainer');
    }
  }, [payload, loading])

  const signUp = () => {
    if (validationError()) {
      let obj = {
        username: userName,
        email: email,
        password: password,
        phone: phone
      }
      dispatch(register(obj))

    } else {
      // console.warn("error");
    }
  }


  // const disabledButton = (phone) => {
  //   return phone?.length !== 10 ? true : false
  // }


  const validationError = () => {
    if (!userName) {
      console.warn('Plz.. fill username')
    }
    else if (!email) {
      console.warn('Plz.. fill email')
    }
    else if (!password) {
      console.warn('Plz.. fill password')
    }

    return userName && email && password
  }

  const login = () => {
    navigation.navigate('LoginScreen')
  }




  return (
    <SafeAreaView className="mt-10">
      <View className="bg-red-100 w-full h-64">
        <Image source={LaundryIcon} className='' style={{ width: '100%', height: '100%' }}></Image>
      </View>
      <View className="m-5">
        <View className="p-2 border-t-0 border-b-2 my-3 border-gray-300">
          <TextInput
            placeholder="Username"
            placeholderTextColor={"gray"}
            keyboardType="default"
            style={{
              fontSize: 20,
            }}
            onChange={(e) => setUserName(e)}></TextInput>
        </View>
        <View className="p-2 border-t-0 border-b-2 my-3 border-gray-300">
          <TextInput
            placeholder="Email"
            placeholderTextColor={"gray"}
            keyboardType="email-address"
            style={{
              fontSize: 20,
            }}
            onChange={(e) => setEmail(e)}></TextInput>
        </View>
        <View className="p-2 border-t-0 border-b-2 my-3 border-gray-300">
          <TextInput
            placeholder="Phone"
            placeholderTextColor={"gray"}
            keyboardType="numeric"
            style={{
              fontSize: 20,
            }}
            onChange={(e) => setPhone(e)}></TextInput>
        </View>
        <View className="p-2 border-t-0 border-b-2 my-3 border-gray-300">
          <TextInput
            placeholder="Password"
            placeholderTextColor={"gray"}
            keyboardType="default"
            style={{
              fontSize: 20,
            }}
            onChange={(e) => setPassword(e)}></TextInput>
        </View>

        <Button
          title="Register"
          // disabled={disabledButton(phone)}
          onPress={signUp}
        />
        <View className="m-2 mx-5">
          <View className='flex-row justify-center'>
            <Text className='text-center'>Already have an account</Text>
            <TouchableOpacity>
              <Text className='text-center ml-1 font-medium text-sky-600' onPress={login}>login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
