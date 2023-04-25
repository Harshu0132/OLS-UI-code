import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";

const ServiceCard = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        // paddingTop:,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="h-[20%]"
    >
      <View className="flex-row h-full w-full p-1 justify-center">
        <View
          className="bg-red-300 w-[100px] space-x-2 mx-1  border-blue-400 
        items-center border-2 shadow-xl shadow-blue-500 rounded-xl"
        >
          <Text>1.</Text>
        </View>

        <View
          className="bg-red-300 w-[100px] space-x-2 mx-1  border-blue-400 
        items-center border-2 shadow-xl shadow-blue-500 rounded-xl"
        >
          <Text>2.</Text>
        </View>

        <View
          className="bg-red-300 w-[100px] space-x-2 mx-1  border-blue-400 
        items-center border-2 shadow-xl shadow-blue-500 rounded-xl"
        >
          <Text>3.</Text>
        </View>
        <View
          className="bg-red-300 w-[100px] space-x-2 mx-1  border-blue-400 
        items-center border-2 shadow-xl shadow-blue-500 rounded-xl"
        >
          <Text>4.</Text>
        </View>
        <View
          className="bg-red-300 w-[100px] space-x-2 mx-1  border-blue-400 
        items-center border-2 shadow-xl shadow-blue-500 rounded-xl"
        >
          <Text>5.</Text>
        </View>
        <View
          className="bg-red-300 w-[100px] space-x-2 mx-1  border-blue-400 
        items-center border-2 shadow-xl shadow-blue-500 rounded-xl"
        >
          <Text>6.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceCard;
