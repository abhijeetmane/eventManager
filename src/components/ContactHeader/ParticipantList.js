import React from 'react';
import { Text, View, FlatList, Image, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './ContactHeaderStyles';

export default ParticipantList = props => {
    return (
        <View style={styles.container}>
                <View style={styles.contactsContainer}>
                        <FlatList
                        extraData={props}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={props.selectedContacts}
                        renderItem= {(info) => (
                            <View style={styles.contact}>
                                <Image 
                                    source={require('../../assets/contact.png')} resizeMode="cover"
                                    style={styles.thumbNail}
                                />
                                <Text style={styles.contactName}>{info.item.givenName}</Text>
                            </View>
                        )}
                        keyExtractor={(info, index) => index.toString()}
                    />
                </View>
                <View style={styles.proceedNav}>
                    <TouchableOpacity onPress={() => props.goToAdjustBillScreen()}>
                        <View style={{flexDirection:"row"}}>
                            <Icon
                                size={40}
                                name={Platform.OS === "android" ? "keyboard-arrow-right" : "ios-arrow-forward"}
                                color="#fff"></Icon>
                        </View>   
                    </TouchableOpacity>
                </View>
        </View>
    )
}