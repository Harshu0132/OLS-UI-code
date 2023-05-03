import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ Navigation }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 m-screen mt-7 bg-red-100">
     <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            {/* <MaterialCommunityIcons name="chevron-down" size={29} color="#00BBCC" /> */}
            {/* <FontAwesome name="chevron-down" size={20} color="#00BBCC" /> */}
          </Text>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
