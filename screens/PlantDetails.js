import { StyleSheet, TouchableOpacity, View, Button, onPress, Image, SafeAreaView, Text, FlatList, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";

import { Card } from "native-base";
import PlantsStateCard from "./components/PlantsStateCard";

export default function PlantDetails() {
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
          <Text style={globalStyles.titleText}> Bazylia
        </Text>
        </View>
        <View style={{ paddingTop: 12 }}>
          <Text style={styles.plantDescription}>Bazylia jest bardzo łatwą w uprawie rośliną jednoroczną. Jej liście można zbierać cały rok, należy je zrywać u spodu rośliny
        </Text>
        </View>

        <View style={{ paddingTop: 18 }}>
          <Card>
            <PlantsStateCard
              imageUri={require('../assets/zestawZioła.jpg')}
              name="Bazylia 1"
              state="Wysiano, zbiory za ok. 20 dni"
            />
            <PlantsStateCard
              imageUri={require('../assets/zestawZioła.jpg')}
              name="Bazylia 2"
              state="Wysiano"
            />
            <PlantsStateCard
              imageUri={require('../assets/zestawZioła.jpg')}
              name="Bazylia 3"
              state="Niewysiano"
            />
            <PlantsStateCard
              imageUri={require('../assets/zestawZioła.jpg')}
              name="Bazylia 4"
              state="Wysiano"
            />
          </Card>
        </View>
      </View>
    </ScrollView >

  );
}

const styles = StyleSheet.create({

  plantDescription: {
    lineHeight: 24,
    fontFamily: "inter-regular",
    fontSize: 16,
    paddingLeft: 25
  },
});

