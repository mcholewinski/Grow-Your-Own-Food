import React, { Component, useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Marketplace from "./screens/Marketplace";
import HerbSetDetails from "./screens/HerbSetDetails";
import VegsHerbSetDetails from "./screens/VegsHerbSetDetails";

import firebaseApp from "./firebaseConfig";

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Market: Marketplace,
    HerbSet: HerbSetDetails,
    VegsHerbSet: VegsHerbSetDetails,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
      defaultNavigationOptions: {
        headerShown: false,
      },
    }
  )
);

export default class App extends Component {
  _isMounted = false;
  state = {
    loaded: false,
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
      "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
      "inter-semiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
      "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    });
    this.setState({ loaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    } else if (this._isMounted) return <AppContainer />;
  }
}
