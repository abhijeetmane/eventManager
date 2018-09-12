import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../screens/LoginScreen/LoginScreenStyles';

export default ValidateLogin = props => {
    return (
        <View style={styles.proceedNav}>
            <TouchableOpacity onPress={() => props.loginHandler()} style={{height: 24}}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.proceedNavLabel}>Proceed</Text>
                <Icon
                    size={24}
                    name={Platform.OS === "android" ? "keyboard-arrow-right" : "ios-arrow-forward"}
                    color="#b8165e"></Icon>
            </View>   
            </TouchableOpacity>
        </View>
    )
}

