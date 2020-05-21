import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

const handleLogout = () => {
  firebase.auth().signOut();
};

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Moje rośliny</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text>Wyloguj</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 32,
    padding: 32,
  },
  titleText: {
    fontFamily: "inter-medium",
    fontSize: 38,
  },
});
