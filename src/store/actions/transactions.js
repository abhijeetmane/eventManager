import { GET_TRANSACTIONS, DETAILS_TRANSACTION, SPLIT_TRANSACTION } from './actionTypes';

const transactions = [{
    id: 1, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 2, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 3, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 4, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 5, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 6, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 7, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 8, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 9, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {}
  },{
    id: 10, 
    title: 'Bar', 
    amount: 10, 
    currency: 'euros', 
    type: 'FoodAndDrinks',
    time:'5 mins Ago',
    details: {},
  },{
      id: 11, 
      title: 'Bar', 
      amount: 10, 
      currency: 'euros', 
      type: 'FoodAndDrinks',
      time:'5 mins Ago',
      details: {}
  },{
      id: 12, 
      title: 'Bar', 
      amount: 10, 
      currency: 'euros', 
      type: 'FoodAndDrinks',
      time:'5 mins Ago',
      details: {}
  }];

export const fetchTransactions = (phoneNumber) => {
    return {
        type: GET_TRANSACTIONS,
        transactions: transactions
    };
};