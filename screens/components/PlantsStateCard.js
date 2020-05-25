import React, { Component } from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import { Card, CardItem, Right } from "native-base"

class PlantsStateCard extends Component {
    render() {
        return (
           <TouchableOpacity> 
            <CardItem>
                <View>
                    <Image style={{ height: 36, width: 36, }}
                        source={this.props.imageUri}
                    />
                </View>
                <Right style={{flex:1, alignItems: 'flex-start', paddingHorizontal:12}}>
                <Text style={styles.plantTitle}>{this.props.name} </Text>
                <Text style={styles.plantState}> {this.props.state}</Text>
                </Right>
            </CardItem>
            </TouchableOpacity> 
        );
    }
}

export default PlantsStateCard ;

const styles = StyleSheet.create({
plantTitle :{
    fontFamily: 'inter-regular',
    fontSize: 16,
    lineHeight: 24,
   // fontWeight: 600,
},
plantState : {
    fontFamily: 'inter-regular',
    fontSize: 12,
    lineHeight: 16,
    color: "#5A5A62"
},
});