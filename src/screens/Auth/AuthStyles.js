import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: 'space-between',
        backgroundColor: '#b8165e',
    },
    titleContainer:{
      marginTop:250
    },
    headerTitle:{
        fontSize:24,
        color:"white",
        textAlign:"center"
    },
    headerSubTitle:{
        fontSize:10,
        margin:30,
        color:"white",
        textAlign:"center"
    },
    btnContainer:{
        flexDirection:"row",
        marginBottom:40,
        justifyContent:"center"
    },
    loginBtn:{
        padding:10,
        margin:5,
        borderColor:"white",
        borderRadius: 5,
        borderWidth: 1,
        width:100,
        alignItems:"center"
    },
    loginBtnTxt:{
        color:"white"
    },
    signupBtn:{
        backgroundColor:"white",
        padding:10,
        margin:5,
        borderColor:"white",
        borderRadius: 5,
        borderWidth: 1,
        width:100,
        alignItems:"center"
        
    }
})
