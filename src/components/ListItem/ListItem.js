import React, { Component } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './ListItemStyles';

export default class ListItem extends Component {

  handleClick = (elem) => {
    this.props.updateListItems(elem.id);
  }

  toggleTimeElements = () => {
    if(this.props.clicked){
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
    if(this.props.clicked){
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
                name={Platform.OS === "android" ? "md-wine" : "ios-wine"}
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