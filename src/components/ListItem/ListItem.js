import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      elementClicked : false,
      selectedItem : ''
    }
  }

  handleClick = (elem) => {
    this.setState({
      elementClicked:!this.state.elementClicked,
      selectedItem:elem.id
    })
  }

  toggleTimeElements = () => {
    if(this.state.elementClicked){
      return <Text style={styles.time}>{this.props.amount}</Text> 
    }
    else {
      return <Text style={styles.time}>{this.props.time}</Text> 
    }
  }

  handleTransDetails = () =>{
    alert('handleTransDetails');
  }

 

  toggleExtraElements = () => {
    if(this.state.elementClicked && this.state.selectedItem === this.props.id){
      return (
      <View style={styles.extraOptions}>
          <TouchableOpacity style={{width:60, backgroundColor:"#b8165e"}} onPress={() => this.handleTransDetails()}>
              <View style={styles.detailsIcon}>
                  <Icon
                    size={30}
                    name={Platform.OS === "android" ? "md-clipboard" : "ios-clipboard"}
                    color="#ffffff"></Icon>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:60, backgroundColor:"blue"}} onPress={() => this.props.handleTransSplit()}>
              <View style={styles.splitIcon}>
                <Icon
                  size={30}
                  name={Platform.OS === "android" ? "md-git-network" : "ios-git-network"}
                  color="#ffffff" ></Icon>
              </View>
            </TouchableOpacity>  
      </View>
      )
      
    }
    else {
      return ( 
      <View style={styles.transAmount}>
        <Text>{this.props.amount}</Text>
      </View>
      )
    }
  }

  render(){
    return(
    <TouchableOpacity onPress={() => this.handleClick(this.props)}>
      <View style={styles.listItem}>
        <View style={styles.transTypeIcon}>
          <Icon
              size={24}
              name={Platform.OS === "android" ? "md-cafe" : "ios-cafe"}
              color="#000000"></Icon>
        </View>
        <View style={styles.transTitle}>
          <Text>{this.props.title}</Text>
          {this.toggleTimeElements()}
        </View>
          {this.toggleExtraElements()}
      </View>
    </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
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