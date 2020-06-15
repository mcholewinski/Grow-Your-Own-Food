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


export default class HerbSetDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={{flex: 1,  alignSelf: "center" , height: 200, width:'100%'}}
              source={require("../assets/zestawZioła.jpg")}
            />
          </View>

          <View style={styles.screenStyle}>
            <View style={{ flex: 1, paddingTop: 37}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{height: 29, width: 40 }}
                  source={require("../assets/buttonIcons/backButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.title}>
                Zioła dla początkujących
              </Text>
            </View>
            <View style={{paddingBottom:0}}>
              <Text style={styles.description}>
              Jeśli nie wiesz od czego zacząć oto nasza propozycja ziół idealnych na rozpoczęcie swojej przygody 
              z miejskim ogrodnictwem.
              </Text>
            </View>
            <View style={globalStyles.subtitlePosition}>
              <Text style={styles.plantListTitle}>
                Zioła{" "}
              </Text>
            </View>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  screenStyle : {
    flex: 1,
     paddingLeft: 25,
  },
  description: {
    fontFamily: 'inter-regular',
    fontSize: 16,
    paddingTop : 24,
    lineHeight: 24,
  },
  title : {
    fontFamily: 'inter-medium',
    fontSize: 32,
    lineHeight: 38,
    paddingTop : 22,
   paddingRight:43,
  },
    plantListTitle : {
        fontFamily: 'inter-medium',
        fontSize: 32,
        lineHeight: 38,
        paddingTop : 37,
        paddingRight:43,
  },
  goBackButton : {
    height :29,
    width :45
  }  
})