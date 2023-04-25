import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const OffersCard = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      // paddingHorizontal:8,
      paddingTop:10,
      alignItems:'center',
      justifyContent:'center'
    }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pr-8 pt-2"
    >
      <View className="bg-yellow-100 h-[130px] w-[328px] rounded-2xl items-center border-2 border-blue-300">
        <Text>Box-1</Text>
      </View>
      <View className="bg-yellow-100 h-[130px] w-[328px] rounded-2xl items-center border-2 border-blue-300">
        <Text>Box-1</Text>
      </View>
      <View className="bg-yellow-100 h-[130px] w-[328px] rounded-2xl items-center border-2 border-blue-300">
        <Text>Box-1</Text>
      </View>
    </ScrollView>
  )
}

export default OffersCard