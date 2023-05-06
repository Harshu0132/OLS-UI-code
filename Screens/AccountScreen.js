import { View, Text, SafeAreaView, TouchableOpacity, Button, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Profile from '../assets/Icons/profile.png'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




const AccountScreen = ({ Navigation }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <View className='mt-10 mx-5'>

        {/* Profile */}
        <View>
          <Text className='font-bold text-[30px] mt-5'>Profile</Text>
        </View>

        {/* Profile card */}
        <View className='bg-slate-400  rounded-md mt-10' >
          <View className='flex-row h-32'>
            <View className='w-28'>
              <Image className='w-16 h-16 mx-auto my-auto' source={Profile}></Image>
            </View>
            <View className='my-auto'>
              <Text className='text-[#ffffff] text-[20px] font-bold'>KRUNAL</Text>
              <Text>+91 9503669820</Text>
              <Text>kg@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity className='flex-row bg-black h-11 justify-center'>
            <View className='my-auto'>
              <Entypo name="edit" size={20} color="white" />
            </View>
            <Text className='text-[#ffffff] font-bold text-[15px] my-auto ml-2 uppercase'>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* My order */}
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
              <FontAwesome name="shopping-basket" size={24} color="black" />
            </View>
            <Text className='my-auto'>My Orderes</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
 
              <Ionicons name="wallet" size={24} color="black" />
            </View>
            <Text className='my-auto'>My Cards & Wallets</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
 
            <Entypo name="price-tag" size={24} color="black" />
            </View>
            <Text className='my-auto'>Price List</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
 
            <Entypo name="location" size={24} color="black" />
            </View>
            <Text className='my-auto'>Manage addresses</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
 
            <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <Text className='my-auto'>Notifictions</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
 
            <FontAwesome5 name="user-friends" size={24} color="black" />
            </View>
            <Text className='my-auto'>Invite friends</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
            <Entypo name="language" size={24} color="black" />
            </View>
            <Text className='my-auto'>Chose language</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between bg-gray-300 rounded-md h-11 mt-3'>
          <View className='flex-row'>
            <View className='my-auto mx-2'>
            <Ionicons name="log-out" size={24} color="black" />
            </View>
            <Text className='my-auto'>Log Out</Text>
          </View>
          <View className='my-auto mx-2'>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        
        
      </View>

    </SafeAreaView>
  )
}

export default AccountScreen;