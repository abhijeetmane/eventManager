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
    id: 5, 
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
    id: 5, 
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
    id: 5, 
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