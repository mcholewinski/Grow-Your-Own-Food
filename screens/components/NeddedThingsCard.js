import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import { Container, Card, Content, CardItem, Body, Right } from "native-base";

export default class NeededThings extends Component {
    render() {
        return (
            <Content padder>
                <Card transparent>
                    <CardItem>
                        {/*}
                        <View style={{ height: 31, width: 31 }}>
                            <Image source={require = ('../assets/icons/potIcon.png')} />
                        </View>
                        */}
                        <Right style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 12 }}>
                            <Text style={styles.plantTitle}>Ziemia</Text>
                            <Text style={styles.plantState}> {this.props.soilQuantity}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        {/*}      
                        <View style={{ height: 31, width: 31 }}>
                            <Image source={require('../assets/icons/potIcon.png')} />
                        </View>
                        */}
                        <Right style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 12 }}>
                            <Text style={styles.plantTitle}>{this.props.potDiameter}</Text>
                            <Text style={styles.plantState}> {this.props.potQuantity}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                    {/*
                        <View style={{ height: 31, width: 31 }}>
                            <Image source={require('../assets/icons/seedIcon.png')} />
                        </View>
                    */}
                        <Right style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 12 }}>
                            <Text style={styles.plantTitle}>Nasiona</Text>
                            <Text style={styles.plantState}> {this.props.seedsQuantity}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    plantTitle: {
        fontFamily: 'inter-regular',
        fontSize: 16,
        lineHeight: 24,
        // fontWeight: 600,
    },
    plantState: {
        fontFamily: 'inter-regular',
        fontSize: 12,
        lineHeight: 16,
        color: "#5A5A62"
    },
});