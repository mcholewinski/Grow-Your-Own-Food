import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  onPress,
  Image,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  Card,
} from "react-native";
import FlatButton2 from "../shared/SalmonButton.js";
import PlantsList from "../screens/components/PlantsList";

export default function MarketPlace() {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <Image
            style={{ height: 29, width: 45 }}
            source={require("../assets/buttonIcons/backButton.png")}
          />
        </View>
        <View style={{ flex: 1, paddingBottom: 16 }}>
          <Text>Które rośliny chcesz hodować?</Text>
        </View>
        <View style={{ flex: 1, paddingBottom: 16 }}>
          <Text>
            Wybierz rośliny które chciałbyś wyhodować, a my pomożemy Ci w ich
            wysiewie i pielęgnacji.
          </Text>
        </View>

        <Text>Nie wiesz od czego zacząć? </Text>

        <View style={{ paddingTop: 22 }}>
          <TouchableOpacity>
            <Image source={require("../assets/zestawZioła.jpg")} />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingTop: 14 }}>
            <Text>Zioła dla początkujących </Text>
          </View>
          <View style={{ flex: 1, paddingTop: 6, paddingBottom: 30 }}>
            <Text>
              Rozpocznij swoją przygodę z roślinami i ciesz się świeżymi ziołami
              przez cały rok.
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image source={require("../assets/zestawZiołaWarzywa.jpg")} />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingTop: 14 }}>
            <Text>Zioła i warzywa dla początkujących </Text>
          </View>
          <View style={{ flex: 1, paddingTop: 6, paddingBottom: 25 }}>
            <Text>Zalecamy wybór zestawu tylko jeśli masz balkon!</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text>Zioła </Text>

            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <PlantsList
                  imageUri={require("../assets/zestawZioła.jpg")}
                  name="Bazylia"
                />
                <PlantsList
                  imageUri={require("../assets/zestawZioła.jpg")}
                  name="Oregano"
                />
                <PlantsList
                  imageUri={require("../assets/zestawZioła.jpg")}
                  name="Tymianek"
                />
              </ScrollView>
            </View>

            <Text>Warzywa </Text>
            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <PlantsList
                  imageUri={require("../assets/zestawZioła.jpg")}
                  name="Pomidor"
                />
                <PlantsList
                  imageUri={require("../assets/zestawZioła.jpg")}
                  name="Rzodkiewka"
                />
                <PlantsList
                  imageUri={require("../assets/zestawZioła.jpg")}
                  name="Burak"
                />
              </ScrollView>
            </View>
          </View>
        </View>

        <FlatButton2 onPress={onPress} text="Wybierz zestaw" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
