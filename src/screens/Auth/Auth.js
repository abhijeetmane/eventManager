import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";

import styles from './AuthStyles.js';

class AuthScreen extends Component{
    loginHandler = () => {
        Navigation.startSingleScreenApp({
            screen: {
            screen: "eventxapp.LoginScreen",
            title: "Login"
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerTitle}>EventXWalletApp</Text>
                    <Text style={styles.headerSubTitle}>Private Beta Test</Text>    
                </View>
                <View style={styles.btnContainer}> 
                    <TouchableOpacity onPress={this.loginHandler}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.loginBtnTxt}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.signupBtn}>
                            <Text>Sign up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AuthScreen;