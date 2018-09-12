import React from 'react';
import { View, TextInput } from 'react-native';

import styles from '../../screens/LoginScreen/LoginScreenStyles';

export default LoginInputs = props => {
    return (
        <View style={styles.titleContainer}>
            {props.showLabel(props.phoneNumber, props.label)}
            <View style={styles.titleContainerData}>
                <TextInput autoFocus={props.autoFocus} onChangeText={(text) => props.handleInput(text)} 
                    style={[styles.phoneNumber, {borderColor:props.highlightBox}]} 
                    placeholder={props.label}>
                </TextInput>
            </View>
        </View>
    )
}