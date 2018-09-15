import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class AdjustBillScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>I m in Adjust Bill Screen</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    }
})