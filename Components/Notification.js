import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Notification = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="mt-6 bg-red-200">
      <View className="w-full flex-row items-center bg-yellow-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("MainContainer")}
          className="justify-center  w-[7%] bg-red-100 mr-20"
        >
          <AntDesign name="arrowleft" size={24} color="gray" />
        </TouchableOpacity>
        <Text>Notifications</Text>
      </View>
      {/* <View className="flex-row bg-yellow-100 items-center justify-center">
        <View className="items-center justify-center">
          <Text className="text-[24px] text-black font-bold">
            Notifications
          </Text>
        </View>
      </View> */}
      <View className="m-1 bg-blue-200 h-screen w-full flex-row justify-center">
        <Entypo
          name="dot-single"
          size={24}
          color="black"
          style={{ alignItems: "center", justifyContent: "center" }}
        />
        <Text className="justify-center">
          Some versions of Microsoft Word also generate the text using the lorem
          function. Just type it in your document and you will get.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
