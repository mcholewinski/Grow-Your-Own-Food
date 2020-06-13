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
  Card,
} from "react-native";
import { globalStyles } from "../styles/global";
import FlatButton2 from "../shared/SalmonButton.js";
import { Container } from "native-base";
import PlantsCard from "./components/PlantsCard";
import { render } from "react-dom";

export default class VegsHerbsSetDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, paddingLeft: 20, paddingTop: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{ height: 29, width: 45 }}
                  source={require("../assets/buttonIcons/backButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, paddingBottom: 16, paddingTop: 24 }}>
              <Text style={globalStyles.titleText}>
                Warzywa dla początkujących
              </Text>
            </View>
            <View>
              <Text style={globalStyles.descriptionText}>
                Wybrane rośliny zostaną automatycznie dodane do ekranu głównego.
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 26 }}>
              <Text style={globalStyles.subtitleText}>
                Wybierz interesujące Cię warzywa:{" "}
              </Text>
            </View>

            <View style={{ paddingTop: 19 }}>
              <PlantsCard
                imageUri={require("../assets/zestawZioła.jpg")}
                name="Pomidor"
              />
              <PlantsCard
                imageUri={require("../assets/zestawZioła.jpg")}
                name="Ogórek"
              />
              <PlantsCard
                imageUri={require("../assets/zestawZioła.jpg")}
                name="Rzodkiewka"
              />
              <PlantsCard
                imageUri={require("../assets/zestawZioła.jpg")}
                name="Burak"
              />
            </View>
          </View>

          <View style={{ flex: 1, paddingBottom: 22 }}>
            <FlatButton2 onPress={onPress} text="Dodaj" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
