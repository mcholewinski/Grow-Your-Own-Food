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
} from "react-native";
import { globalStyles } from "../styles/global";
import { Component } from "react";
import Timeline from "react-native-timeline-flatlist" ;


export default class PlantDetail extends Component() {
  constructor(){
    super()
    this.data = [
      {title: 'Wysiewanie', description: 'Event 1 Description'},
      {title: 'Przesadzanie', description: 'Event 2 Description'},
      {title: 'Nawożenie', description: 'Event 3 Description'},
      {title: 'Zbiory!', description: 'Event 4 Description'},
    ]
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={{ flex: 1, height: 223 }}
              source={require("../assets/zestawZiołaWarzywa.jpg")}

            />
          </View>
          <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, paddingLeft: 20, paddingTop: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{ height: 29, width: 45 }}
                  source={require("../assets/buttonIcons/backButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={globalStyles.titleText}>
                Bazylia
                </Text>
            </View>
            <View>
              <Text style={globalStyles.descriptionText}>
                OPIS ROŚLINY
                </Text>
            </View>

            <View>
              <Text style={globalStyles.descriptionText}> 
              Gdzie:       {"\n"}
              Stanowisko:  {"\n"}
              Podlewanie:  {"\n"} {/* pogrubiony tekst */}
              Iluletnia:   {"\n"}
              Doniczka:     {"\n"}
              </Text> 
            </View>

  
            <View style={{paddingTop: 12}}> 
            <Timeline
          data={this.data}
          showTime={false}
          circleSize={10}
          circleColor="#00513D"
          lineColor="#00513D"
        />
            </View>
          </View>


        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  plantDescription: {
    lineHeight: 24,
    fontFamily: "inter-regular",
    fontSize: 16,
    paddingLeft: 25,
  },
});
