import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

class TransactionList extends Component {
  constructor(props){
    super(props);
    this.state = {
      transactions : this.props.transactions
    }
  }
  
  updateListItems = (id) => {
    let updatedList = [...this.state.transactions].map((item) => {
      if(item.id === id) {
        item.clicked = item.clicked ? !item.clicked : true;
      }
      else{
        item.clicked = false;
      }
      return item;
    })
    this.setState({
      transactions:updatedList
    });
  }

  render(){
    return (
      <FlatList
        extraData={this.state.transactions}
        style={styles.listContainer}
        data={this.state.transactions}
        renderItem={(info) => (
          <ListItem
            title={info.item.title}
            time={info.item.time}
            amount={info.item.amount}
            id={info.item.id}
            clicked={info.item.clicked}
            updateListItems = {this.updateListItems}
            handleTransSplit={this.props.handleTransSplit}
          />
        )}
        keyExtractor={(info, index) => index.toString()}
      />
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default TransactionList;