import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  onPress,
  Image,
  Text,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";
import { globalStyles } from "../styles/global";
import PlantsList from "../screens/components/PlantsList";


export default class MarketPlace extends Component {
  render() {
    return (
      <View style={styles.screenStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/*
          <View style={{ flex: 1, padding: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{ height: 29, width: 45}}
                source={require("../assets/buttonIcons/backButton.png")}
              />
            </TouchableOpacity>
          </View>
           */}
          <View style={{ flex: 1}}>
            <Text style={styles.title}>
              Które rośliny chcesz hodować?
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.description}>
              Wybierz rośliny które chciałbyś wyhodować, a my zapewnimy Ci wszystkie informacje, których potrzebujesz
              do ich prawidłowego wysiewu i pielęgnacji.
            </Text>
          </View>

          <Text style={styles.subtitle}>
            Nie wiesz od czego zacząć?{" "}
          </Text>

          <View style={{ paddingTop: 30}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HerbSet")}
            >
              <Image
                style={styles.setPic}
                source={require("../assets/Zioła.png")}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.subtitle}>
                Zioła dla początkujących{" "}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 30 }}>
              <Text style={styles.subtitleDescription}>
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
                style={styles.setPic}
                source={require("../assets/ZiołaWarzywa.png")}
              />
            </TouchableOpacity>
            <View style={{ flex: 1}}>
              <Text style={styles.subtitle}>
                Warzywa dla początkujących{" "}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 25 }}>
              <Text style={styles.subtitleDescription}>
                Zalecamy wybór tylko jeśli masz balkon!
              </Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.plantListTitle}>Zioła </Text>

            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} >
                <TouchableOpacity>
                  <PlantsList imageUri={require('../assets/zestawZioła.jpg')}
                    name="Bazylia"
                  />
                </TouchableOpacity>
                <PlantsList imageUri={require('../assets/zestawZioła.jpg')}
                  name="Oregano"
                />
                <PlantsList
                  imageUri={require('../assets/zestawZioła.jpg')}
                  name="Tymianek"
                />
              </ScrollView>
            </View>

            <Text style={styles.plantListTitle}>Warzywa </Text>
            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} >
                  <TouchableOpacity> 
                <PlantsList imageUri={require('../assets/zestawZioła.jpg')}
                  name="Pomidor"
                />
                </TouchableOpacity>
                <PlantsList imageUri={require('../assets/zestawZioła.jpg')}
                  name="Rzodkiewka"
                />
                <PlantsList
                  imageUri={require('../assets/zestawZioła.jpg')}
                  name="Burak"
                />
              </ScrollView>
            </View>
          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenStyle : {
    flex: 1,
     paddingTop: 20, 
     paddingLeft: 25,
     paddingRight:25,
  },
  title : {
fontFamily: 'inter-medium',
fontSize: 40,
lineHeight: 47,
paddingTop : 25,
paddingRight:52,
  },
  description: {
    fontFamily: 'inter-regular',
    fontSize: 16,
    paddingTop : 16,
    paddingRight:123,
    lineHeight: 24,
  },
  subtitle : {
    fontFamily: 'inter-medium',
    fontSize: 20,
    paddingTop : 21,
    lineHeight: 24
  },
  setPic : {
    alignSelf: "center",
    height: 174,
    width: '100%'
  },
  subtitleDescription : {
fontFamily: 'inter-regular',
fontSize : 12,
lineHeight  : 16,
paddingTop: 6,
  },
  plantListTitle : {
    fontFamily: 'inter-medium',
    fontSize: 32,
    lineHeight: 38,
    paddingTop : 32,
  },
  plantsListStyle : {

  },
  goBackButton : {
    //flex :1,
    height :29,
    width :45
  }


});
