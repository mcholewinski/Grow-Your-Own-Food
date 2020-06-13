import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class PlantsList extends Component {
  render() {
    return (
      <View style={{ height: 130, width: 130, marginLeft: 25 }}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 15 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default PlantsList;
