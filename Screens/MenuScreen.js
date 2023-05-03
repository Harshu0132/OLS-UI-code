import { View, Text, SafeAreaView, TouchableOpacity, Button, StyleSheet, Image, } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import Store from '../assets/Icons/store.png'


const MenuScreen = ({ Navigation }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#fafafa]">
      <View className="mt-14 mx-4">
        <Text className="text-base">Menu</Text>

        {/* All Store Location */}
        <View className="flex-row h-24 mt-3 rounded-lg bg-[#e4ebfe]">
          <View className="w-24 items-center justify-center">
            <Image source={Store} className="w-14 h-14"></Image>
            {/* <Entypo name="price-tag" size={50} color="rgb(48, 212, 165)" /> */}
          </View>
          <View className="justify-center">
            <Text className="text-[#094869] text-lg font-bold">All Store Locations</Text>
            <TouchableOpacity>
              <Text className="uppercase text-[#277dad]">See now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Our Pricing */}
        <View className="flex-row h-24 mt-3 rounded-lg bg-[#e3f4fe]">
          <View className="w-24 items-center justify-center">
            <Entypo name="price-tag" size={50} color="rgb(48, 212, 165)" />
          </View>
          <View className="justify-center">
            <Text className="text-[#094869] text-lg font-bold">Our Pricing</Text>
            <TouchableOpacity>
              <Text className="uppercase text-[#277dad]">See now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.horizontalLine} className="py-4 pl-3">My Address</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.horizontalLine} className="py-4 pl-3">Rate Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.horizontalLine} className="py-4 pl-3">Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.horizontalLine} className="py-4 pl-3">About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.horizontalLine} className="py-4 pl-3">Terms & Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.horizontalLine} className="py-4 pl-3">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button
        title="Click Here"
        onPress={()=>alert('Button Clicked!')}
      ></Button> */}
    </SafeAreaView>
  )
}

export default MenuScreen;


const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 1,
    marginTop: 10,
    // marginBottom: 10,
  }
})