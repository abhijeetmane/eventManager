import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container:{
        height:150,
        backgroundColor: '#b8165e',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    contactsContainer:{
        width:200,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center"

    },
    thumbNail:{
        alignSelf: 'flex-start',
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    contact:{
        paddingLeft:20,
        paddingRight:20,
        alignItems:"center"
    },
    contactName:{
        color:'#fff',
        fontSize:16,
        paddingTop:5
    },
    proceedNav:{
        justifyContent:"center"
    }
})