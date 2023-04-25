import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import * as Location from "expo-location";
import ServiceCard from "../Components/ServiceCard";
import { AntDesign } from "@expo/vector-icons";
import OffersCard from "../Components/OffersCard";

const HomeScreen = ({ Navigation }) => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "We are loading your location."
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationIsEnabled();
    getCurrentLocation();
  }, []);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const checkIfLocationIsEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Service is Not Enabled.",
        "Please Enabled the Location Services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied.",
        "Allow the app to use the location services.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync(); // give the lattitude and longititude
    console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(response);

      for (let item of response) {
        let address = `${item.city}, ${item.region}, ${item.country}`;
        setdisplayCurrentAddress(address);
      }
    }
  };
  return (
    <SafeAreaView className="flex-1 mt-5">
      <ScrollView className="flex-1 px-2">
        {/* Location View */}
        <View className=" p-1.5 w-[80%]">
          <Text className="font-bold text-xs pt-2.5 text-gray-600">
            Current Location
            <Entypo name="location-pin" size={17} color="gray" />
          </Text>
          <Text className="font-bold text-xs mt-1 text-gray-600 underline">
            {displayCurrentAddress}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          className="absolute right-[-10] w-[20%] h-12 mt-2.5 justify-center items-center"
        >
          <Entypo name="bell" size={24} color="gray" />
        </TouchableOpacity>
        {/* Select Services */}
        <View className="bg-blue-100 w-full h-screen ">
          <View className=" m-1 w-full flex-row items-center">
            <View>
              <Text className="text-[17px] font-bold text-gray-600">
                Select Service To Start Booking..
              </Text>
              <Text className="text-[11px] text-gray-500 font-bold">
                Discover More Things And Grab More Offers..
              </Text>
            </View>
            {/* <TouchableOpacity className="bg-blue-500 absolute right-[10] border-black p-2 rounded-3xl">
              <Text className="font-semibold text-white text-[15px]">
              View All
              </Text>
            </TouchableOpacity> */}
          </View>

          <View className="">
            {/* Horizontal Slider for services */}
            <ServiceCard />
            <View
              className="mx-2 mt-2 bg-purple-100 shadow-lg shadow-blue-100 h-[40px]
             rounded-2xl border-blue-300 border-2 items-center justify-center flex-row"
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("PricingCard")}
                className="items-center justify-cente flex-row"
              >
                <Text className="px-2 text-gray-600 font-semibold text-[17px]">
                  See Full Pricing Details
                </Text>
                <AntDesign name="arrowright" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Offres Row */}
          {/* <View className="mt-2 p-2">
            <Text className="font-bold text-[17px] text-gray-600">
              Offers For You
            </Text>
            <View
              className="w-full bg-yellow-100 h-[130px] mt-1 shadow-lg shadow-blue-100
            rounded-2xl border-blue-300 border-2"
            ></View>
          </View> */}
          <View className="mt-2 p-2">
            <Text className="font-bold text-[17px] text-gray-600">
              Offers For You
            </Text>
            <OffersCard />
            <OffersCard />
          </View>

          {/* More Features */}
          <View className="mt-2 p-2">
            <Text className="font-bold text-[17px] text-gray-600">
              More Features
            </Text>
            <View
              className="w-full bg-purple-100 h-[130px] mt-1
             rounded-2xl border-blue-300 border-2"
            ></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
