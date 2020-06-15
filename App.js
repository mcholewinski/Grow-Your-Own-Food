import React, { Component } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/homeStack";

console.disableYellowBox = true;

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
    } else if (this._isMounted) return <Navigator />;
  }
}
