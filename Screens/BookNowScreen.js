import { View, Text, SafeAreaView, TouchableOpacity, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SteamPress from "../Components/SteamPress";
import ServiceInput from "../Components/BookNowComponent/ServiceInput";
import { AntDesign } from '@expo/vector-icons';

const BookNowScreen = ({ Navigation }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="">
      <View className='my-12 mx-5'>
        <View className='flex-row'>
          <TouchableOpacity>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className='ml-2 font-medium' >Book Now</Text>
        </View>
        <ServiceInput />
      </View>
    </SafeAreaView>
  )
}

export default BookNowScreen;