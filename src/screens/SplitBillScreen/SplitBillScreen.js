import React, { Component } from 'react';
import {View, Text, Platform } from 'react-native';

export default class SplitBillScreen extends Component {
    constructor(props){
        super(props);
        console.log(this.props.data);
    }
    render(){
        return(
            <View>
                <Text> This is Contact Screen </Text>
            </View> 

        )
    }
}