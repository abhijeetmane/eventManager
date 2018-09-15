import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems:"center",
    height:50
  },
  transTypeIcon:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  transTitle: {
    flex:3,
    justifyContent:"center",
    borderBottomWidth:1,
    borderColor:'#eee',
    height:50
  },
  extraOptions:{
    flex:2,
    justifyContent:"flex-end",
    alignItems:"center",
    borderBottomWidth:1,
    borderColor:'#eee',
    height:50,
    flexDirection:'row'
  },
  transAmount:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",
    borderBottomWidth:1,
    borderColor:'#eee',
    height:50,
    flexDirection:'row'
  },
  detailsIcon:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:50,
    backgroundColor:"#b8165e"
  },
  splitIcon:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:50,
    backgroundColor:"#006eff"
  },
  time:{
    color: "#b3b3b3"
  }
});