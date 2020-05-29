import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  onPress,
  Image,
  Text,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";
import { globalStyles } from "../styles/global";
import FlatButton2 from "../shared/SalmonButton.js";
import PlantsList from "../screens/components/PlantsList";

export default class MarketPlace extends Component {
  backAction = () => {
    Alert.alert(
      "Uwaga!",
      "Cofając utracisz niezatwierdzone zmiany. Czy na pewno chcesz cofnąć?",
      [
        {
          text: "Anuluj",
          onPress: () => null,
        },
        {
          text: "Cofnij",
          onPress: () => this.props.navigation.goBack(),
        },
      ],
      { cancelable: false }
    );
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 20 }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Uwaga!",
                  "Cofając utracisz niezatwierdzone zmiany. Czy na pewno chcesz cofnąć?",
                  [
                    {
                      text: "Anuluj",
                      onPress: () => {},
                    },
                    {
                      text: "Cofnij",
                      onPress: () => this.props.navigation.goBack(),
                    },
                  ],
                  { cancelable: false }
                )
              }
            >
              <Image
                style={{ height: 29, width: 45 }}
                source={require("../assets/buttonIcons/backButton.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <Text style={globalStyles.titleText}>
              Które rośliny chcesz hodować?
            </Text>
          </View>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <Text style={globalStyles.descriptionText}>
              Wybierz rośliny które chciałbyś wyhodować, a my pomożemy Ci w ich
              wysiewie i pielęgnacji.
            </Text>
          </View>

          <Text style={globalStyles.subtitleText}>
            Nie wiesz od czego zacząć?{" "}
          </Text>

          <View style={{ paddingTop: 22 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HerbSet")}
            >
              <Image
                style={globalStyles.SetPic}
                source={require("../assets/zestawZioła.jpg")}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, paddingTop: 14 }}>
              <Text style={globalStyles.subtitleText}>
                Zioła dla początkujących{" "}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 30 }}>
              <Text style={globalStyles.subtitleDescription}>
                Rozpocznij swoją przygodę z roślinami i ciesz się świeżymi
                ziołami przez cały rok.
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("VegsHerbSet")}
            >
              <Image
                style={globalStyles.SetPic}
                source={require("../assets/zestawZiołaWarzywa.jpg")}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, paddingTop: 14 }}>
              <Text style={globalStyles.subtitleText}>
                Zioła i warzywa dla początkujących{" "}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 25 }}>
              <Text style={globalStyles.subtitleDescription}>
                Zalecamy wybór zestawu tylko jeśli masz balkon!
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={globalStyles.titleText}>Zioła </Text>

              <View style={{ height: 130, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <PlantsList
                    imageUri={require("../assets/zestawZioła.jpg")}
                    name="Bazylia"
                  />
                  <PlantsList
                    imageUri={require("../assets/zestawZioła.jpg")}
                    name="Oregano"
                  />
                  <PlantsList
                    imageUri={require("../assets/zestawZioła.jpg")}
                    name="Tymianek"
                  />
                </ScrollView>
              </View>

              <Text style={globalStyles.titleText}>Warzywa </Text>
              <View style={{ height: 130, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <PlantsList
                    imageUri={require("../assets/zestawZioła.jpg")}
                    name="Pomidor"
                  />
                  <PlantsList
                    imageUri={require("../assets/zestawZioła.jpg")}
                    name="Rzodkiewka"
                  />
                  <PlantsList
                    imageUri={require("../assets/zestawZioła.jpg")}
                    name="Burak"
                  />
                </ScrollView>
              </View>
            </View>
          </View>

          <FlatButton2 onPress={onPress} text="Wybierz zestaw" />
        </ScrollView>
      </View>
    );
  }
}
