import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Button, onPress, Image, SafeAreaView, Text, FlatList, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";

import FlatButton from '../shared/GreenButton.js';
import FlatButton2 from '../shared/SalmonButton.js';
import FlatButton3 from '../shared/LightGreenButton.js';

const debugData = [
  {
    id: "1",
    title: "Instrukcja hodowli",
    paragraph: "",
  },
  {
    id: "2",
    title: "Cebula",
    paragraph: "Wysiej teraz",
  },
  {
    id: "3",
    title: "Marchew",
    paragraph: "Wysiej teraz",
  },
  {
    id: "4",
    title: "Cebula",
    paragraph: "Wysiej teraz",
  },
];

const Herbs = [
  {
    name: 'Bazylia',
    picture: '../assets/zestawZioła.jpg',
  },
  {
    name: 'Bazylia',
    picture: '../assets/zestawZioła.jpg',
  },
  {
    name: 'Bazylia',
    picture: '../assets/zestawZioła.jpg',
  },
  {
    name: 'Bazylia',
    picture: '../assets/zestawZioła.jpg',
  },
]

function ListItem({ title, paragraph }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Text style={styles.listItemParagraph}>{paragraph}</Text>
    </View>
  );
}

//export default class??
function HomeScreen({ navigation }) {
  return (
    <View>
      <FlatButton text='Znajdź rośliny dla siebie!'
        onPress={() => navigation.navigate('PlantDetails')}
      />
    </View>
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1 }}>

  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={globalStyles.container}>
      <View style={styles.challengeBanner}>
        <View style={styles.challengeBannerImg}></View>
        <View style={styles.challengeBannerInfo}>
          <Text style={styles.challengeBannerTextTitle}>Challenge</Text>
          <Text style={styles.challengeBannerTextParagraph}>
            Challenge Information
          </Text>
        </View>
      </View>
      <Text style={globalStyles.titleText}>Moje rośliny</Text>
      <SafeAreaView style={styles.menu}>
        <FlatList
          data={debugData}
          renderItem={({ item }) => (
            <ListItem title={item.title} paragraph={item.itemParagraph} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>

      <FlatButton onPress={onPress} text='Znajdź rośliny dla siebie!' />
      {/*}
          <FlatButton3 onPress={onPress} text='Rośliny zmieszczą się na oknie' />
          <FlatButton2 onPress={onPress} text='Wybierz zestaw' />
              */}
    </View>
  </ScrollView >

  <View style={globalStyles.TouchableOpacityStyle}>
    <TouchableOpacity onPress={onPress}
    >
      <Image
        source={require('../assets/buttonIcons/seedlingFAB2.png')}
        style={globalStyles.seedlingFAB} />
    </TouchableOpacity>
  </View>
</View>
  );
  }

const styles = StyleSheet.create({
  challengeBanner: {
    flexDirection: "row",
    height: 150,
    borderRadius: 10,
    backgroundColor: "#333",
    marginBottom: 15,
  },
  challengeBannerImg: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  challengeBannerInfo: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignContent: "center",
  },
  challengeBannerTextTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "gold",
    fontFamily: "inter-medium",
  },
  challengeBannerTextParagraph: {
    textAlign: "center",
    fontSize: 12,
    color: "white",
    fontFamily: "inter-regular",
  },
  listItem: {
    backgroundColor: "grey",
    //alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 30,
    borderRadius: 10,
    width: 149,
    height: 130,
  },
  listItemTitle: {
    textAlign: "left",
    fontFamily: 'inter-semiBold',
    marginTop: 180,
    fontSize: 16,
  },
  listItemParagraph: {
    textAlign: 'left',
    fontFamily: 'inter-regular',
    fontSize: 15,
    color: '#999999',
  },
  plantIconButton: {
    marginTop: 20
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});
