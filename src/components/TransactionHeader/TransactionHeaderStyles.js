import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    headerContainer:{
        height:150,
        backgroundColor: '#b8165e',
        flexDirection:"row" 
    },
    profilePicture:{
      flex:1,
      padding:20
    },
    pageLabelContainer:{
      flex:1,
      justifyContent:"center"
    },
    pageLabel:{
      textAlign: "center",
      color:'#ffffff',
      fontSize:10
    },
    amountContainer:{
      flex:1,
      justifyContent:"space-around"
    },
    totalAmount:{
      flex:1,
      justifyContent:"flex-start"
    },
    crptoAmount:{
      textAlign: "center",
      color:'#ffffff',
      fontSize:30
    },
    euroAmount:{
      textAlign: "center",
      color:'#ffffff',
      fontSize:12
    },
    notification:{
      flex:1, 
      justifyContent:"flex-end",
      flexDirection:"row",
      padding:20
    }
  });