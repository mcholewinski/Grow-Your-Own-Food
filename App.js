import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import Navigator from "./routes/homeStack";

const getFonts = () =>
  Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-light": require("./assets/fonts/Lato-Light.ttf"),
    "lato-black": require("./assets/fonts/Lato-Black.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
