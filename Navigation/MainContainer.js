import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import OrdersScreen from "../Screens/OrdersScreen";
import BookNowScreen from "../Screens/BookNowScreen";
import AccountScreen from "../Screens/AccountScreen";
import MenuScreen from "../Screens/MenuScreen";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator initialRouteName="Accountww"> 
    {/* <Tab.Navigator initialRouteName="Account"> */}
    {/* <Tab.Navigator initialRouteName="Home"> */}
    {/* <Tab.Navigator initialRouteName="Orders"> */}
    {/* <Tab.Navigator initialRouteName="Menu"> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/Icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/Icons/shopping-bag.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BookNow"
        component={BookNowScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/Icons/plus.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#e32f45" : "#748c94",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/Icons/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/Icons/align-text.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainContainer;
