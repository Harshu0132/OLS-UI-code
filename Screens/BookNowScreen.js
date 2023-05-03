import { View, Text, SafeAreaView, TouchableOpacity,Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SteamPress from "../Components/SteamPress";

const BookNowScreen = ({Navigation}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-red-100">
      <SteamPress/>
    </SafeAreaView>
  )
}

export default BookNowScreen;