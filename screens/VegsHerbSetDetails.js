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
import { Container } from "native-base";
import { render } from "react-dom";

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
            <View style={{ flex: 1}}>
              <Text style={styles.title}>
                Zioła i warzywa dla początkujących
              </Text>
            </View>
            <View>
              <Text style={styles.description}>
Jeśli nie wiesz od czego zacząć oto nasza propozycja ziół i warzyw, 
które możesz zasadzić na balkonie i parapecie.
</Text>
            </View>
            <View style={globalStyles.subtitlePosition}>
              <Text style={styles.plantListTitle}>
                Zioła i warzywa{" "}
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
  topPic: {
    flex: 1,  
    alignSelf: "center" , 
    height: 200, 
    width:'100%'
  },
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
