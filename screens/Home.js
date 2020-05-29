import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  onPress,
  Image,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Navigator from "../routes/homeStack";

import FlatButton from "../shared/GreenButton.js";
import FlatButton2 from "../shared/SalmonButton.js";
import FlatButton3 from "../shared/LightGreenButton.js";

function ListItem({ title, paragraph }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Text style={styles.listItemParagraph}>{paragraph}</Text>
    </View>
  );
}

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 36 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Marketplace")}
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          position: "absolute",
          right: 20,
          height: 70,
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
    fontFamily: 'inter-semiBold',
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
