import { View, Text, SafeAreaView, TextInput,Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const Register = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-8">
      <View className="bg-blue-400 w-[100%] h-[45%]">
        <Text>Logo Of Our App</Text>
      </View>
      <View className="flex-col space-x-2 pb-2 mx-2 mt-5">
        <View className="flex-row space-x-2 p-2 border-t-0 border-b-2 border-gray-300">
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor={"gray"}
            keyboardType="default"
            style={{
              fontSize: 20,
            }}
          ></TextInput>
        </View>
        <Text className="text-[15px] text-gray-400 mt-2 mb-3">
          We will send OTP to your Mobile Number..
        </Text>
        <Button
          title="Get OTP"
          // onPress={() => navigation.navigate("FirstPage")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
