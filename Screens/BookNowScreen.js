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
      <Text>BookNowScreen</Text>
      <Button
        title="Click Here"
        onPress={()=>alert('Button Clicked!')}
      ></Button>
    </SafeAreaView>
  )
}

export default BookNowScreen;