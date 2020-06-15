import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";
import React, { Component } from "react";
import Timeline from "react-native-timeline-flatlist";
import images from "../assets/imageList";

export default class PlantDetails extends Component {
  render() {
    const { navigation } = this.props;
    let data = [
      {
        title: "Wysiewanie",
        description:
          navigation.getParam("terminSiewu1") +
          " - " +
          navigation.getParam("terminSiewu2"),
      },
      {
        title: "Przesadzanie",
        description: "Gdy sadzonka będzie miała ok 10cm",
      },
      { title: "Nawożenie", description: "Co 6 tygodni" },
      {
        title: "Zbiory!",
        description:
          navigation.getParam("terminZbioru1") +
          " - " +
          navigation.getParam("terminZbioru2"),
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={{ flex: 1, height: 223 }}
              source={images[navigation.getParam("id")]}
            />
          </View>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, paddingLeft: 20, paddingTop: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{ height: 29, width: 45 }}
                  source={require("../assets/buttonIcons/backButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={globalStyles.titleText}>
                {navigation.getParam("nazwa")}
              </Text>
            </View>
            <View>
              <Text style={globalStyles.descriptionText}>
                {navigation.getParam("opis")}
              </Text>
            </View>

            <View>
              <Text style={globalStyles.descriptionText}>
                Stanowisko:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {navigation.getParam("stanowisko") + "\n"}
                </Text>
                Podlewanie:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {navigation.getParam("podlewanie1") +
                    "x w tyg, " +
                    "latem " +
                    navigation.getParam("podlewanie2") +
                    "x \n"}
                </Text>
                Iluletnia:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {navigation.getParam("iluLetnia") + "\n"}
                </Text>
                Doniczka:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {navigation.getParam("doniczka") + "\n"}
                </Text>
              </Text>
            </View>

            <View style={{ paddingTop: 12 }}>
              {
                <Timeline
                  data={data}
                  showTime={false}
                  circleSize={10}
                  circleColor="#00513D"
                  lineColor="#00513D"
                />
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plantDescription: {
    lineHeight: 24,
    fontFamily: "inter-regular",
    fontSize: 16,
    paddingLeft: 25,
  },
});
