import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class ProfilePicture extends Component {
    render(){
        return (
            <View>
                <TouchableOpacity>
                    <Image style={styles.profilePicture}
                        source={{uri: this.props.url}}
                        resizeMode="cover" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePicture:{
        alignSelf: 'flex-start',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25 
    }
})