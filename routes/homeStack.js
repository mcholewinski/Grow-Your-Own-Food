import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PlantDetails from "../screens/PlantDetails";
import Marketplace from "../screens/Marketplace";
const Stack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
        <Stack.Screen
          name="PlantDetails"
          component={PlantDetails}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Marketplace"
          component={Marketplace}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
