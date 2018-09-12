import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#ffffff'
    },
    headerContainer:{
        height:150,
        backgroundColor: '#b8165e',
        justifyContent:"space-between"
    },
    loginTitle:{
        fontSize:24,
        marginTop:60,
        marginLeft:42,
        color:"#ffffff"
    },
    signinTitle:{
        fontSize:14,
        marginBottom:10,
        marginLeft:42,
        color:"#ffffff"
    },
    bodyContainer:{
        flex: 1,
        justifyContent: "flex-start",     
        flexDirection: "column",
        marginTop:20
    },
    titleContainer:{
        justifyContent: "flex-start",     
        flexDirection: "column",
    },
    titleContainerData:{
        justifyContent: "space-around",     
        flexDirection: "row"
    },
    labels:{
        fontSize:14,
        marginLeft:42
    },
    phoneNumber:{
        width: "80%",
        borderBottomWidth: 2,
        borderColor: "#eee",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    proceedNav:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        marginRight:38
    },
    proceedNavLabel:{
        padding:1,
        marginRight:5,
        fontSize:16,
        color:"#b8165e"
    }
    
});