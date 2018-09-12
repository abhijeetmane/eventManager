import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const TransactionList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.transactions}
      renderItem={(info) => (
        <ListItem
          title={info.item.title}
          time={info.item.time}
          amount={info.item.amount}
          id={info.item.id}
          handleTransSplit={props.handleTransSplit}
        />
      )}
      keyExtractor={(info, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default TransactionList;