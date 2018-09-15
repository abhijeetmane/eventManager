import React, { Component } from 'react';
import {View, Alert, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts'; 

import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactsList  from '../../components/ContactsList/ContactsList';

export default class SplitBillScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts:[],
            selectedContacts : []
        }
        this.getAllContacts();
    }

    getAllContacts = () => {
        Contacts.getAll((err, contacts) => {
            this.setState({
                contacts: contacts
            })
        })
    }

    addContactsToSplit = contact => {
        const contactExist = this.state.selectedContacts.find((con) => {
            if(con.givenName === contact.givenName){
                Alert.alert(
                    'Duplicate Contact',
                    'Contact already added'
                );
                return true;
            }
        })
        if(!contactExist){
            let selectedContacts = this.state.selectedContacts;
            selectedContacts.unshift(contact);
            this.setState({
                selectedContacts: selectedContacts
            })
        }
    }

    goToAdjustBillScreen = (data) => {
        this.props.navigator.push({
            screen: "eventxapp.AdjustBillScreen",
            title: 'Split Bill',
            passProps: {
            data: data
            }
        });
    }


    render(){
        return(
            <View style={styles.container}>
                <ContactHeader selectedContacts={this.state.selectedContacts} goToAdjustBillScreen={this.goToAdjustBillScreen} />
                <ContactsList allContacts={this.state.contacts} addContactsToSplit={this.addContactsToSplit} />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    }
})