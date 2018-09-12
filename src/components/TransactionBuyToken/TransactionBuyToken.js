import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";

export default class TranscationBuyToken extends Component{
    render(){
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.token}>Buy Token</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000"
    },
    token:{
       color:"#fff"
    }
})