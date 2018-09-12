import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import styles from './TransactionHeaderStyles';

export default class TransactionHeader extends Component {
  render(){
    return (
        <View style={styles.headerContainer}>
            <View style={styles.profilePicture}>
                <ProfilePicture url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BygZWzIAKr2RaGBB8661pAXYr87kT5WPIpwBety0WbniLLoiBg"}/>
            </View>
            <View style={styles.amountContainer}>
                <View style={styles.pageLabelContainer}>
                    <Text style={styles.pageLabel}>Main Wallet</Text>
                </View>
                <View style={styles.totalAmount}>
                    <Text style={styles.crptoAmount}>220.20</Text>
                    <Text style={styles.euroAmount}>267.94</Text>
                </View>
            </View>
            <View style={styles.notification}>
                <Icon
                    size={24}
                    name={Platform.OS === "android" ? "md-notifications" : "ios-notifications"}
                    color="#ffffff"></Icon>
            </View>
        </View>
    )
  }
}