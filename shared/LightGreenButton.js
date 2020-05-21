import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton3({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            
                <Text style={styles.buttonText}> {text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
       borderRadius: 10,
       //overflow:'hidden',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#D5E8D6',
        height:52,
        width: 342,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#00513D',
        fontSize: 16,
        fontFamily: 'inter-regular',
        textAlign: 'center'
    },

    windowIcon : {
        alignSelf: 'flex-start'
    }
})