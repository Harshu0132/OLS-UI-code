import { View, Text, SafeAreaView, TouchableOpacity,Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const BookNowScreen = ({Navigation}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-red-100">
      <Text>Something</Text>
    </SafeAreaView>
  )
}

export default BookNowScreen;