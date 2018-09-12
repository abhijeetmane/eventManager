import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';

import startMainTabs from "../MainTabs/startMainTabs";
import LoginInputs from '../../components/Login/LoginInputs';
import ValidateLogin from '../../components/Login/ValidateLogin';
import styles from './LoginScreenStyles';

const defaultColor = '#eee';
class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            highlightNumberBox: defaultColor,
            highlightPasscodeBox: defaultColor,
            phoneNumber:'',
            passCode:''
        }
    }
   
    loginHandler = () => {
      startMainTabs();
    };

    handleNumberInput = (text) => {
        if(text && text.length>0){
            this.setState({
                highlightNumberBox: '#00d084',
                phoneNumber: text
            })
        }
        else {
            this.setState({
                highlightNumberBox: '#eee',
                phoneNumber:''
            })
        }
    }

    handlePasscodeInput = (text) => {
        if(text && text.length>0){
            this.setState({
                highlightPasscodeBox: '#00d084',
                passCode:text
            })
        }
        else {
            this.setState({
                highlightPasscodeBox: '#eee',
                passCode:''
            })
        }
    }

    render(){
        this.showLabel = (key, label) => {
            if(key && key.length>0){
                return <Text style={styles.labels}>{label}</Text>
            }
        }
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.loginTitle}>Login</Text>
                    <Text style={styles.signinTitle}>Sign in</Text>
                </View>
                <View style={styles.bodyContainer} >
                    <LoginInputs autoFocus={true} label='Phone Number' phoneNumber={this.state.phoneNumber} 
                        highlightBox={this.state.highlightNumberBox} 
                        showLabel={this.showLabel} 
                        handleInput={this.handleNumberInput} />
                    <LoginInputs label='Passcode' phoneNumber={this.state.passCode} 
                        highlightBox={this.state.highlightPasscodeBox} 
                        showLabel={this.showLabel} 
                        handleInput={this.handlePasscodeInput} />
                </View>
                <ValidateLogin loginHandler={this.loginHandler}/>
            </View>
        )
    }
}

export default LoginScreen;