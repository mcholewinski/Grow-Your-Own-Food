import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  LayoutAnimation,
} from "react-native";

export default class Home extends Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 24,
          marginTop: 48,
          marginHorizontal: 24,
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Market")}
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            position: "absolute",
            right: 10,
            height: 70,
            bottom: 10,
            backgroundColor: "#ee6e73",
            borderRadius: 100,
          }}
        >
          <Image
            style={{ flex: 1, width: 30, height: 30, resizeMode: "contain" }}
            source={require("../assets/buttonIcons/seedlingFAB.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "grey",
    //alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 40,
    borderRadius: 10,
    width: 149,
    height: 130,
  },
  listItemTitle: {
    textAlign: "left",
    fontFamily: "inter-semiBold",
    lineHeight: 24,
    marginTop: 180,
    fontSize: 16,
  },
  listItemParagraph: {
    textAlign: "left",
    fontFamily: "inter-regular",
    fontSize: 15,
    color: "#999999",
  },
  plantIconButton: {
    marginTop: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
