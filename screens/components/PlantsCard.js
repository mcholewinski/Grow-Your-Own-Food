import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { CardItem, Right } from "native-base";

class PlantsCard extends Component {
  render() {
    return (
      <TouchableOpacity>
        <CardItem>
          <View>
            <Image
              style={{ height: 36, width: 36 }}
              source={this.props.imageUri}
            />
          </View>
          <Right
            style={{ flex: 1, alignItems: "flex-start", paddingHorizontal: 12 }}
          >
            <Text>{this.props.name} </Text>
          </Right>
        </CardItem>
      </TouchableOpacity>
    );
  }
}

export default PlantsCard;
