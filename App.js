import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Register from "./Components/Register";
import LoginScreen from "./Screens/LoginScreen";
import MainContainer from "./Navigation/MainContainer";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        {/* <Stack.Screen */}
          {/* name="Login" */}
          {/* component={Login} */}
         {/* /> */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="MainContainer" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
