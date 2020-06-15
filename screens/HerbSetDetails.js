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
import herbsData from "../data/herbs.json";

export default class HerbSetDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={{
                flex: 1,
                alignSelf: "center",
                height: 200,
                width: "100%",
              }}
              source={require("../assets/zestawZioła.jpg")}
            />
          </View>

          <View style={styles.screenStyle}>
            <View style={{ flex: 1, paddingTop: 37 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{ height: 29, width: 40 }}
                  source={require("../assets/buttonIcons/backButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Zioła dla początkujących</Text>
            </View>
            <View style={{ paddingBottom: 0 }}>
              <Text style={styles.description}>
                Jeśli nie wiesz od czego zacząć oto nasza propozycja ziół
                idealnych na rozpoczęcie swojej przygody z miejskim
                ogrodnictwem.
              </Text>
            </View>
            <View style={globalStyles.subtitlePosition}>
              <Text style={styles.plantListTitle}>Zioła </Text>
            </View>
            <View style={{ height: 130, marginTop: 10 }}>
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
                      id: herbsData[6].id,
                      nazwa: herbsData[6].nazwa,
                      opis: herbsData[6].opis,
                      stanowisko: herbsData[6].stanowisko,
                      podlewanie1: herbsData[6].podlewanie[0],
                      podlewanie2: herbsData[6].podlewanie[1],
                      iluLetnia: herbsData[6].ileLat,
                      doniczka: herbsData[6].doniczka,
                      terminSiewu1: herbsData[6].terminSiewu[0],
                      terminSiewu2: herbsData[6].terminSiewu[1],
                      terminZbioru1: herbsData[6].terminZbioru[0],
                      terminZbioru2: herbsData[6].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[herbsData[6].id]}
                    name={herbsData[6].nazwa}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PlantDetails", {
                      id: herbsData[3].id,
                      nazwa: herbsData[3].nazwa,
                      opis: herbsData[3].opis,
                      stanowisko: herbsData[3].stanowisko,
                      podlewanie1: herbsData[3].podlewanie[0],
                      podlewanie2: herbsData[3].podlewanie[1],
                      iluLetnia: herbsData[3].ileLat,
                      doniczka: herbsData[3].doniczka,
                      terminSiewu1: herbsData[3].terminSiewu[0],
                      terminSiewu2: herbsData[3].terminSiewu[1],
                      terminZbioru1: herbsData[3].terminZbioru[0],
                      terminZbioru2: herbsData[3].terminZbioru[1],
                    })
                  }
                >
                  <PlantsList
                    imageUri={images[herbsData[3].id]}
                    name={herbsData[3].nazwa}
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
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
