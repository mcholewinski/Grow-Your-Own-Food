import React from "react";
import { StyleSheet, TouchableOpacity, View, Button, onPress, Image, SafeAreaView, Text, FlatList, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";


import FlatButton3 from '../shared/LightGreenButton.js';
import FlatButton2 from '../shared/SalmonButton.js';


import NeededThings from "./components/NeddedThingsCard.js";



export default function SeedlingDetails() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              source={require('../assets/zestawZiołaWarzywa.jpg')}
              style={{ height: 223, width: null }}
            />
          </View>

          <View>
            <TouchableOpacity>
              <Image style={{ height: 29, width: 45, left: 24, top: 37 }}
                source={require('../assets/buttonIcons/backButton.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 52 }}>
            <Text style={globalStyles.titleText}> Bazylia 1
      </Text>
          </View>
          <View style={styles.plantDescription}>
            <Text >Bazylia </Text>
          </View>
  
          <View style={{ paddingTop: 22 }}>
            <FlatButton3 onPress={onPress} text='Plant State' />
          </View>
  
          <View  style={{paddingTop: 40}} >
            <NeededThings 
           //shovelIcon={require('../assets/icons/shovelIcon.png)}'
          soilQuantity="10 kg"
          //potIcon={require('../assets/icons/potIcon.png')}
          potDiameter="15"
          potQuantity="10"
          //seedsIcon={require('../assets/icons/seedIcon.png')}
          seedsQuantity="20"
            />
          </View>
  
          <View style={{ paddingTop: 46 }}>
            <FlatButton2 onPress={onPress} text='Zasadziłam(em)' />
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
  
    plantDescription: {
      lineHeight: 24,
      fontFamily: "inter-regular",
      fontSize: 16,
      paddingLeft: 33
    },
    plantSpeciesText: {
      lineHeight: 24,
      fontFamily: "inter-regular",
      fontSize: 16,
      paddingLeft: 25
    },
});

