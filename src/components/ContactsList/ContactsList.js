import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default ContactsList = props => {
    return (
        <View style={styles.container}>
                <FlatList
                style={{width:"100%"}}
                    data={props.allContacts}
                    renderItem= {(info) => (
                        <TouchableOpacity onPress={()=>props.addContactsToSplit(info.item)}>
                            <View style={styles.contactsContainer}>
                                <View style={{justifyContent:"center", padding:5}}>
                                    <Image 
                                        source={require('../../assets/contact.png')} resizeMode="cover"
                                        style={styles.thumbNail}
                                    />
                                </View>
                                <View style={styles.contactDetails}>
                                    <Text style={styles.contactName}> {info.item.givenName} </Text>
                                    <Text style={styles.contactName}> {info.item.givenName} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(info, index) => index.toString()}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    contactsContainer:{
        width:"100%",
        flexDirection:'row',
        alignItems:"center",
        padding:10

    },
    thumbNail:{
        alignSelf: 'flex-start',
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor:"#eee"
    },
    contact:{
        paddingLeft:20,
        paddingRight:20,
        alignItems:"center"
    },
    contactName:{
        color:'#000',
        fontSize:12,
        paddingTop:5
    },
    contactDetails:{
        justifyContent:"center",
        height:60,
        width:"100%",
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    proceedNav:{
        justifyContent:"center"
    }
})  