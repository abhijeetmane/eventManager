import React, {Component} from 'react';
import {Image, StyleSheet, Button, View, Text} from 'react-native';

export default class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./images/logo.png')} />
        <Text>EventX Wallet App</Text>
        <Text>private beta test</Text>
        <Button
            title="Login"
            onPress={() =>
            navigate('Login')
            }
        />
        <Button
            title="Signup"
            onPress={() =>
            navigate('Onboarding')
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
  },
});
  