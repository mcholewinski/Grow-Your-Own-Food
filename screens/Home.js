import React from "react";
import { TouchableOpacity, Button } from 'react-native'
import { StyleSheet, View, onPress, Image, SafeAreaView, Text, FlatList, ScrollView, Surface, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";

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

function ListItem({ title, paragraph }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Text style={styles.listItemParagraph}>{paragraph}</Text>
    </View>
  );
}

export default function Home() {
  return (

    // state 2 
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.challengeBanner}>
          <View style={styles.challengeBannerImg}></View>
          <View style={styles.challengeBannerInfo}>
            <Text style={styles.challengeBannerTextTitle}>Challenge</Text>
            <Text style={styles.challengeBannerTextParagraph}>
              Challenge Information
          </Text>
          </View>
        </View>
        <Text style={styles.titleStyle}>Moje rośliny</Text>
        <SafeAreaView style={styles.menu}>
          <FlatList
            data={debugData}
            renderItem={({ item }) => (
              <ListItem title={item.title} paragraph={item.paragraph} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </SafeAreaView>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../assets/plantButton.png')}
              style={styles.plantIconButton} />
          </TouchableOpacity>
        </View>


        <Button style={styles.findPlantsButton}
          title="Znajdź rośliny dla siebie"
        />
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 40,
    borderRadius: 10,
    height: 128,
  },
  listItemTitle: {
    textAlign: "left",
    marginTop: 180,
    fontSize: 16,
  },
  listItemParagraph: {
    fontSize: 15,
  },
  plantIconButton: {
    marginTop: 20
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  titleStyle: {
    fontSize: 32,
    marginTop: 14
  },
  findPlantsButton: {
    backgroundColor: "grey",
    color: 'white',
    width: 282,
    height: 52

  }
});
