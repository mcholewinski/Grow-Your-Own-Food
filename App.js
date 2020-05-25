import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import HomeScreen from "./screens/Home";
import { AppLoading } from "expo";
import Navigator from "./routes/homeStack";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import PlantDetails from "./screens/PlantDetails";

//const Stack = createStackNavigator() ;

{/*
const getFonts = () =>
  Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-light": require("./assets/fonts/Lato-Light.ttf"),
    "lato-black": require("./assets/fonts/Lato-Black.ttf"),
  });*/}



  const getFonts = () =>
  Font.loadAsync({
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-semiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

export default function App() {
  
  //createHomeStack = () =>
  {/*
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="PlantDetails" component={PlantDetails} />
  </Stack.Navigator>
  */}

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return  <Navigator />;
  } else {
    return (

      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
