import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = (mobileTiitle,OTPTitle,buttonTitle) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="mt-5">
      <View className="flex-col space-x-2 pb-2 mx-2">
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
          {/* {OTPTitle} */}
          We will send OTP to your Mobile Number
        </Text>
        <Button
        title="Login"
        onPress={() => navigation.navigate('MainContainer')}
      />
      </View>
    </SafeAreaView>
  );
};

export default Login;
