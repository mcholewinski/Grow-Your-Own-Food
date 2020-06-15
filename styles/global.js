import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  titleText: {
    paddingLeft: 25,
    flex: 1, 
    paddingBottom: 16, 
    paddingTop: 24 ,
    // paddingRight: 52,
    fontFamily: "inter-medium",
    fontSize: 32,
    lineHeight: 47,
    color: "#1A1A1A",
    //paddingTop: 25,

    // padding:16,
  },
  itemParagraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  descriptionText: {
    lineHeight: 24,
    fontFamily: "inter-regular",
    fontSize: 16,
    paddingLeft: 25,
    paddingTop:24 ,
    //paddingRight: 123,
    //padding: 16,
  },
  subtitleText: {
    fontFamily: "inter-medium",
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 25,
    paddingRight: 25,
    //padding:5,
  },
  subtitleDescription: {
    fontFamily: "inter-regular",
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: 25,
    paddingRight: 36,
  },
  seedlingFAB: {
    height: 56,
    width: 56,
  },
  TouchableOpacityStyle: {
    position: "absolute",
    // width: 25,
    // height: 25,
    //alignItems: 'center',
    //justifyContent: 'center',
    left: 322,
    right: 30,
    bottom: 50,
  },
});
