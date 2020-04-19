import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function PlantDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Plant Details</Text>
    </View>
  );
}
