import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { Button } from "react-native";

const LoginScreen = (mobileTitle, OTPTitle, Button) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-7">
      {/* Slider */}
      <View className="bg-red-100 pb-[65%] ">
        <Text>Slider</Text>
      </View>

      {/* Login */}
      <Login />

      {/* Register */}
      <SafeAreaView className="mt-3">
        {/* <View className="items-center justify-center flex-col">
          <Text className="text-[15px]">
            If You don't have an account..
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              //   className=""
            >
              <Text className="text-blue-500 font-bold text-[16px]">
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </View> */}
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
      </SafeAreaView>
      {/* <Register /> */}
    </SafeAreaView>
  );
};

export default LoginScreen;
