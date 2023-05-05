import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { Button } from "react-native";
import LaundryIcon from "../assets/HomeLaundryImage.jpg";

const LoginScreen = (mobileTitle, OTPTitle, Button) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const register = () => {
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView className="mt-10">
      {/* Slider */}
      <View className="bg-red-100 w-full h-64">
        <Image source={LaundryIcon} className='' style={{ width: '100%', height: '100%' }}></Image>
      </View>

      {/* Login */}

      {/* Register */}
      <SafeAreaView>
        <View className='h-[350px] flex-col justify-center '>
          <Login />
          <View className="items-center justify-center flex-col">
            <Text className="font-bold text-[18px] text-gray-400">
              -------- OR --------
            </Text>
          </View>

          {/* Sign Up with Google or Anything */}
          <View className="m-2 mx-5">
            <TouchableOpacity className="flex-row items-center justify-center mt-3 bg-gray-300 p-2 rounded-xl">
              <Text>Sign Up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center mt-3 bg-gray-300 p-2 rounded-xl">
              <Text>Sign Up with Truecaller</Text>
            </TouchableOpacity>
          </View>
          <View className="m-2 mx-5">
            <View className='flex-row justify-center'>
              <Text className='text-center'>Don't have an account</Text>
              <TouchableOpacity>
                <Text className='text-center ml-1 font-medium text-sky-600' onPress={register}>Register</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </SafeAreaView>
      {/* <Register /> */}
    </SafeAreaView>
  );
};

export default LoginScreen;
