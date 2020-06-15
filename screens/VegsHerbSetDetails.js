import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";
import PlantsList from "../screens/components/PlantsList";
import images from "../assets/imageList";
import vegsData from "../data/plants.json";
import herbsData from "../data/herbs.json";

export default class VegsHerbsSetDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={styles.topPic}
              source={require("../assets/zestawZiołaWarzywa.jpg")}
            />
          </View>
          <View style={styles.screenStyle}>
            <View style={{ flex: 1, paddingTop: 37 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{ height: 29, width: 45 }}
                  source={require("../assets/buttonIcons/backButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>
                Zioła i warzywa dla początkujących
              </Text>
            </View>
            <View>
              <Text style={styles.description}>
                Jeśli nie wiesz od czego zacząć oto nasza propozycja ziół i
                warzyw, które możesz zasadzić na balkonie i parapecie.
              </Text>
            </View>
            <View style={globalStyles.subtitlePosition}>
              <Text style={styles.plantListTitle}>Zioła i warzywa </Text>
            </View>

            <View style={{ height: 180, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PlantDetails", {
                      id: herbsData[0].id,
                      nazwa: herbsData[0].nazwa,
                      opis: herbsData[0].opis,
                      stanowisko: herbsData[0].stanowisko,
                      podlewanie1: herbsData[0].podlewanie[0],
                      podlewanie2: herbsData[0].podlewanie[1],
                      iluLetnia: herbsData[0].ileLat,
                      doniczka: herbsData[0].doniczka,
                      terminSiewu1: herbsData[0].terminSiewu[0],
                      terminSiewu2: herbsData[0].terminSiewu[1],
                      terminZbioru1: herbsData[0].terminZbioru[0],
                      terminZbioru2: herbsData[0].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[herbsData[0].id]}
                    name={herbsData[0].nazwa}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PlantDetails", {
                      id: herbsData[5].id,
                      nazwa: herbsData[5].nazwa,
                      opis: herbsData[5].opis,
                      stanowisko: herbsData[5].stanowisko,
                      podlewanie1: herbsData[5].podlewanie[0],
                      podlewanie2: herbsData[5].podlewanie[1],
                      iluLetnia: herbsData[5].ileLat,
                      doniczka: herbsData[5].doniczka,
                      terminSiewu1: herbsData[5].terminSiewu[0],
                      terminSiewu2: herbsData[5].terminSiewu[1],
                      terminZbioru1: herbsData[5].terminZbioru[0],
                      terminZbioru2: herbsData[5].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[herbsData[5].id]}
                    name={herbsData[5].nazwa}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PlantDetails", {
                      id: herbsData[4].id,
                      nazwa: herbsData[4].nazwa,
                      opis: herbsData[4].opis,
                      stanowisko: herbsData[4].stanowisko,
                      podlewanie1: herbsData[4].podlewanie[0],
                      podlewanie2: herbsData[4].podlewanie[1],
                      iluLetnia: herbsData[4].ileLat,
                      doniczka: herbsData[4].doniczka,
                      terminSiewu1: herbsData[4].terminSiewu[0],
                      terminSiewu2: herbsData[4].terminSiewu[1],
                      terminZbioru1: herbsData[4].terminZbioru[0],
                      terminZbioru2: herbsData[4].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[herbsData[4].id]}
                    name={herbsData[4].nazwa}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PlantDetails", {
                      id: vegsData[4].id,
                      nazwa: vegsData[4].nazwa,
                      opis: vegsData[4].opis,
                      stanowisko: vegsData[4].stanowisko,
                      podlewanie1: vegsData[4].podlewanie[0],
                      podlewanie2: vegsData[4].podlewanie[1],
                      iluLetnia: vegsData[4].ileLat,
                      doniczka: vegsData[4].doniczka,
                      terminSiewu1: vegsData[4].terminSiewu[0],
                      terminSiewu2: vegsData[4].terminSiewu[1],
                      terminZbioru1: vegsData[4].terminZbioru[0],
                      terminZbioru2: vegsData[4].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[vegsData[4].id]}
                    name={vegsData[4].nazwa}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PlantDetails", {
                      id: vegsData[7].id,
                      nazwa: vegsData[7].nazwa,
                      opis: vegsData[7].opis,
                      stanowisko: vegsData[7].stanowisko,
                      podlewanie1: vegsData[7].podlewanie[0],
                      podlewanie2: vegsData[7].podlewanie[1],
                      iluLetnia: vegsData[7].ileLat,
                      doniczka: vegsData[7].doniczka,
                      terminSiewu1: vegsData[7].terminSiewu[0],
                      terminSiewu2: vegsData[7].terminSiewu[1],
                      terminZbioru1: vegsData[7].terminZbioru[0],
                      terminZbioru2: vegsData[7].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[vegsData[7].id]}
                    name={vegsData[7].nazwa}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topPic: {
    flex: 1,
    alignSelf: "center",
    height: 200,
    width: "100%",
  },
  screenStyle: {
    flex: 1,
    paddingLeft: 25,
  },
  description: {
    fontFamily: "inter-regular",
    fontSize: 16,
    paddingTop: 24,
    lineHeight: 24,
  },
  title: {
    fontFamily: "inter-medium",
    fontSize: 32,
    lineHeight: 38,
    paddingTop: 22,
    paddingRight: 43,
  },
  plantListTitle: {
    fontFamily: "inter-medium",
    fontSize: 32,
    lineHeight: 38,
    paddingTop: 37,
    paddingRight: 43,
  },
  goBackButton: {
    height: 29,
    width: 45,
  },
});
