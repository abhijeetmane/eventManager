import  React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import TransactionHeader from '../../components/TransactionHeader/TransactionHeader';
import TransactionList from '../../components/TransactionList/TransactionList';
import TransactionBuyToken from '../../components/TransactionBuyToken/TransactionBuyToken';
import { fetchTransactions } from '../../store/actions/index';

class TransactionScreen extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTransactions());
  }

  showOptions = (trans) => (
    console.log('you clicked ',trans.id)
  )

  handleTransSplit = (data) =>{
     this.props.navigator.push({
       screen: "eventxapp.SplitBillScreen",
       title: 'Split Bill',
       passProps: {
         data: data
       }
     });
   }

  render(){
    return (
      <View style={styles.container}>
        <TransactionHeader />
        <TransactionBuyToken />
        <TransactionList transactions={this.props.transactions} handleTransSplit={this.handleTransSplit} />
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container :{
      flex:1,
      backgroundColor: '#ffffff'
  }
})

const mapStateToParams = state => {
  console.log('state',state);
  return {
    transactions: state.transactions
  };
}

export default connect(mapStateToParams)(TransactionScreen);
