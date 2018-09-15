import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ParticipantList from './ParticipantList';

export default ContactHeader = props => {
    let getParticipantComponent = () => {
        if(props.selectedContacts.length != 0){
           return( 
            <ParticipantList selectedContacts={props.selectedContacts} goToAdjustBillScreen={props.goToAdjustBillScreen}/>
           )
        } else {
            return (
            <View style={styles.container}>
                <Text style={{color:'#fff'}}>Add participants from contacts</Text>
            </View>);
        }
    }
   return (
            <View>{getParticipantComponent()}</View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:150,
        backgroundColor: '#b8165e',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
})