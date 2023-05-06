import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SteamPress from '../../assets/Icons/steam-press.png'
import WashingAndFold from '../../assets/Icons/washing-fold.png'
import WashingAndIron from '../../assets/Icons/washing-iron.png'
import { createOrder } from '../../Redux/Order/orderActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const ServiceInput = () => {
  const currentDate = new Date()
  const today = currentDate.getDate();
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  // console.log(today + '-' + currentMonth + '-' + currentYear);
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [selectToday, setSelectToday] = useState(false)

  const tomorrowDate = new Date(currentDate.setDate(currentDate.getDate() + 1))
  const tomorrow = tomorrowDate.getDate()
  const tomorrowYear = tomorrowDate.getFullYear()
  const tomorrowMonth = tomorrowDate.toLocaleString('default', { month: 'long' })
  // console.log(tomorrow + '-' + tomorrowMoth + '-' + tomorrowYear);

  const selectedDate = (date) => {
    setDate(date)
  }

  const [steamPress, setSteamPress] = useState('')
  const [washingAndFold, setWashingAndFold] = useState('')
  const [WashingIron, setWashingIron] = useState('')

  const selectSteamPress = () => {
    setWashingAndFold('')
    setWashingIron('')
    setSteamPress('Steam Press')
  }
  const selectWashingAndFold = () => {
    setSteamPress('')
    setWashingIron('')
    setWashingAndFold('Wash & Fold')
  }
  const selectWashingIron = () => {
    setWashingAndFold('')
    setSteamPress('')
    setWashingIron('Washing & Ironing')
  }

  const userOrder = useSelector((state) => state.userOrder);
  const { error, loading, payload, success } = userOrder;
  const dispatch = useDispatch()

  const navigation = useNavigation();


  const submitHandler = () => {
    const service = steamPress ? steamPress : (washingAndFold ? washingAndFold : WashingIron)

    let obj = {
      service: service,
      date: date,
      time: time,
      userId: '64559b8ce8963451d1aa0566'
    }
    console.log(obj);

    dispatch(createOrder(obj))
  }

  useEffect(() => {
    // console.log(loading);
    // console.log(payload);

    if (!loading && success) {
      console.log(payload);
      navigation.navigate('Orders');
    }
  }, [payload, loading])


  return (
    <View>
      {/* Services */}
      <ScrollView horizontal className='mt-3'>
        <View className={steamPress ? 'px-5 py-3 mt-3 mx-2 items-center rounded-md bg-[#daeef5]'
          : 'px-5 py-3 mt-3 mx-2 items-center rounded-md bg-[#fafafa]'}>
          <View>
            <Image source={SteamPress} className='w-10 h-10'></Image>
          </View>

          <Text className='text-[#4a7c96] my-1'>Steam Press</Text>
          <Text className='mb-1'>48 hrs</Text>
          <TouchableOpacity>
            <View className={steamPress ? 'bg-[#2fd5a7] px-4 rounded-md py-2' : 'bg-[#ececec] px-4 rounded-md py-2'}>
              <Text className={steamPress ? 'text-white w-14' : 'text-black w-14 text-center'} onPress={selectSteamPress}>{steamPress ? 'Selected' : 'Select'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className={washingAndFold ? 'px-5 py-3 mt-3 mx-2 items-center rounded-md bg-[#daeef5]'
          : 'px-5 py-3 mt-3 mx-2 items-center rounded-md bg-[#fafafa]'}>
          <View>
            <Image source={WashingAndFold} className='w-10 h-10'></Image>
          </View>

          <Text className='text-[#4a7c96] my-1'>Wash & Fold</Text>
          <Text className='mb-1'>48 hrs</Text>
          <TouchableOpacity>
            <View className={washingAndFold ? 'bg-[#2fd5a7] px-4 rounded-md py-2' : 'bg-[#ececec] px-4 rounded-md py-2'}>
              <Text className={washingAndFold ? 'text-white w-14' : 'text-black w-14 text-center'} onPress={selectWashingAndFold}>{washingAndFold ? 'Selected' : 'Select'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className={WashingIron ? 'px-5 py-3 mt-3 mx-2 items-center rounded-md bg-[#daeef5]'
          : 'px-5 py-3 mt-3 mx-2 items-center rounded-md bg-[#fafafa]'}>
          <View>
            <Image source={WashingAndIron} className='w-10 h-10'></Image>
          </View>

          <Text className='text-[#4a7c96] my-1'>Washing & Ironing</Text>
          <Text className='mb-1'>48 hrs</Text>
          <TouchableOpacity>
            <View className={WashingIron ? 'bg-[#2fd5a7] px-4 rounded-md py-2' : 'bg-[#ececec] px-4 rounded-md py-2'}>
              <Text className={WashingIron ? 'text-white w-14' : 'text-black w-14 text-center'} onPress={selectWashingIron}>{WashingIron ? 'Selected' : 'Select'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text className='text-center my-5 text-[#4a7c96]'>You can Now Select Multiple services</Text>


      {/* Select Date */}
      <Text className='text-[#263941] font-medium'>Select Date</Text>
      <View className='mt-3 flex-row justify-between px-5'>
        <View className="px-2 py-3 mx-2 items-center  ">
          <TouchableOpacity className='rounded-full bg-[#2fd5a7] w-24 h-24 py-3'
            onPress={() =>
              selectedDate(today + '-' + currentMonth + '-' + currentYear)
            }>
            <Text className='m-auto text-white text-[20px]'>{today}</Text>
            <Text className='m-auto text-white'>{currentMonth}</Text>
          </TouchableOpacity>
          <Text className='mt-1'>Today</Text>
        </View>
        <View className="px-2 py-3 mx-2 items-center  ">
          <TouchableOpacity className='rounded-full bg-[#2fd5a7] w-24 h-24 py-3' onPress={() => selectedDate(tomorrow + '-' + tomorrowMonth + '-' + tomorrowYear)}>
            <Text className='m-auto text-white text-[20px]'>{tomorrow}</Text>
            <Text className='m-auto text-white'>{tomorrowMonth}</Text>
          </TouchableOpacity>
          <Text className='mt-1'>Tomorrow</Text>
        </View>
      </View>

      {/* Select Time */}
      <Text className='text-[#263941] font-medium'>Select Time</Text>
      <View>
        <View className='mt-3 flex-row justify-between px-5'>
          <TouchableOpacity className='border border-[#8b8b8b] px-7 py-2 rounded-md' onPress={() => setTime('8 Am - 9 Am')}>
            <Text className='text-[#8b8b8b]'>8 Am - 9 Am</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border border-[#8b8b8b] px-5 py-2 rounded-md' onPress={() => setTime('9 Am - 10 Am')}>
            <Text className='text-[#8b8b8b]'>9 Am - 10 Am</Text>
          </TouchableOpacity>
        </View>
        <View className='mt-3 flex-row justify-between px-5'>
          <TouchableOpacity className='border border-[#8b8b8b] px-5 py-2 rounded-md' onPress={() => setTime('10 Am - 12 Pm')}>
            <Text className='text-[#8b8b8b]'>10 Am - 12 Pm</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border border-[#8b8b8b] px-6 py-2 rounded-md' onPress={() => setTime('4 Pm - 6 Pm')}>
            <Text className='text-[#8b8b8b]'>4 Pm - 6 Pm</Text>
          </TouchableOpacity>
        </View>
        <View className='mt-3 flex-row justify-between px-5'>
          <TouchableOpacity className='border border-[#8b8b8b] px-6 py-2 rounded-md' onPress={() => setTime('6 Pm - 12 Pm')}>
            <Text className='text-[#8b8b8b]'>6 Pm - 12 Pm</Text>
          </TouchableOpacity>
          {/* <View className='border border-[#8b8b8b] px-6 py-2 rounded-md'>
            <Text className='text-[#8b8b8b]'>4 Pm - 6 Pm</Text>
          </View> */}
        </View>
      </View>

      <TouchableOpacity className='bg-[#017ebe] w-full rounded-md my-5 p-2'>
        <Text className='text-white text-center' onPress={submitHandler}>Proceed</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ServiceInput

