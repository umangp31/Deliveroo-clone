import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./screens/Homescreen";
import { Text, View } from "react-native";
import 'react-native-url-polyfill/auto';
import Restaurantscreen from "./screens/Restaurantscreen";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homiee" component={Homescreen} />
        <Stack.Screen name="Restaurant" component={Restaurantscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}