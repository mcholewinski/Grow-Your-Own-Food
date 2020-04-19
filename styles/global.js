import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  titleText: {
    fontFamily: "lato-regular",
    fontSize: 32,
    color: "#000",
    paddingBottom: 10,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
