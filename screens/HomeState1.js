import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Button, onPress, Image, SafeAreaView, Text, FlatList, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";

import FlatButton from '../shared/GreenButton.js';

function HomeScreen({ navigation }) {
  return (
    <View>
      <FlatButton text='Znajdź rośliny dla siebie!'
        onPress={() => navigation.navigate('PlantDetails')}
      />
    </View>
  );
}


export default function HomeState1() {
  return (
    <View style={{ flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: 95 }}>
          <Text style={globalStyles.titleText}>Moje rośliny</Text>
        </View>

        <View style={{ paddingTop: 50 }}>
          <Image source={require('../assets/seedHomeScreen.png')}
            style={{ alignSelf: "center", width: 121, height: 150 }}
          />
        </View>

        <View style={{ paddingTop: 23 }}>
          <Text style={{ textAlign: "center" }}>Nie masz jeszcze żadnych roślin
    </Text>
        </View>

        <View style={{ paddingTop: 32 }}>
          <FlatButton onPress={onPress} text='Znajdź rośliny dla siebie!' />
        </View>

      </ScrollView >

      <View style={globalStyles.TouchableOpacityStyle}>
        <TouchableOpacity onPress={onPress} >
          <Image
            source={require('../assets/buttonIcons/seedlingFAB2.png')}
            style={globalStyles.seedlingFAB} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({


    
})