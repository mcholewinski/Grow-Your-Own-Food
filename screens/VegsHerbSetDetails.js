import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Button, onPress, Image, SafeAreaView, Text, FlatList, ScrollView, Card } from "react-native";
import { globalStyles } from "../styles/global";
import FlatButton2 from '../shared/SalmonButton.js';
import { Container, Card, } from "native-base"
import PlantsCard from "./components/PlantsCard";



export default function VegsHerbsSetDetails() {
  return (

    <View style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ flex: 1, paddingLeft: 20, paddingTop: 20 }}>
            <Image style={{ height: 29, width: 45, }}
              source={require('../assets/buttonIcons/backButton.png')}
            />
          </View>
          <View style={{ flex: 1, paddingBottom: 16, paddingTop: 24 }}>
            <Text style={globalStyles.titleText}>Zioła i warzywa dla początkujących</Text>
          </View>
          <View>
            <Text style={globalStyles.descriptionText}>OPIS OPIS</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 26 }}>
            <Text style={globalStyles.subtitleText}>Proponujemy następujący zestaw :  </Text>
          </View>
          <View>
          </View>

          <View style={{ paddingTop: 19 }}>
            <Card>
              <PlantsCard
                imageUri={require('../assets/zestawZioła.jpg')}
                name="Pomidor"
              />
              <PlantsCard
                imageUri={require('../assets/zestawZioła.jpg')}
                name="Ogórek"
              />
              <PlantsCard
                imageUri={require('../assets/zestawZioła.jpg')}
                name="Rzodkiewka"
              />
              <PlantsCard
                imageUri={require('../assets/zestawZioła.jpg')}
                name="Burak"
              />
            </Card>
          </View>
        </View>

        <View style={{ flex: 1, paddingBottom: 22 }}>
          <FlatButton2 onPress={onPress} text='Wybierz zestaw' />
        </View>

      </ScrollView>
    </View>
  );
}



