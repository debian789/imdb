import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
/**
 * Vista de navegacion, que gestiona las vistas a cargar
 * @returns
 */
export default function SearchNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Movie" }}
      />
    </Stack.Navigator>
  );
}
