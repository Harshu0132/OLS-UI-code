import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../Redux/Order/getOrder/getOrderDetailsActions";

const OrdersScreen = ({ Navigation }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const dispatch = useDispatch();

  const getOrder = useSelector((state) => state.getOrder)
  const { loading, success, payload } = getOrder

  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getOrderDetails());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setData(payload);
      // console.warn(data);
    }

  }, [payload])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Refresh the screen when the component is focused
      dispatch(getOrderDetails());
    });

    return unsubscribe;
  }, [navigation, dispatch]);


  return (
    <SafeAreaView className="mt-12 mx-5">
      <Text>View Order</Text>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableOpacity
            className='px-5 py-3 shadow my-4 flex-row bg-[#e3f4fe] rounded-md'>
            <View>
              <Text className='text-[#114a68] font-bold mr-3'>Username</Text>
              <Text className='text-[#114a68] font-bold mr-3'>Service</Text>
              <Text className='text-[#114a68] font-bold mr-3'>Date</Text>
              <Text className='text-[#114a68] font-bold mr-3'>Time</Text>
              <Text className='text-[#114a68] font-bold mr-3'>Status</Text>
            </View>
            <View>
              <Text>{item.user.username}</Text>
              <Text>{item.service}</Text>
              <Text>{item.date}</Text>

              <Text>{item.time}</Text>
              <Text>Pending</Text>
            </View>
          </TouchableOpacity>}
      />


    </SafeAreaView>
  );
};

export default OrdersScreen;
