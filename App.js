import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Register from "./Components/Register";
import LoginScreen from "./Screens/LoginScreen";
import MainContainer from "./Navigation/MainContainer";
import LoginVerificationScreen from "./Screens/LoginVerificationScreen";
import { myStore } from './Redux/Store/store';
import { Provider } from 'react-redux'

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginVerificationScreen" options={{ title: 'LOG IN' }} component={LoginVerificationScreen} />
          {/* <Stack.Screen */}
          {/* name="Login" */}
          {/* component={Login} */}
          {/* /> */}
          {/* <Stack.Screen name="Register" component={Register} /> */}
          <Stack.Screen name="MainContainer" component={MainContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
