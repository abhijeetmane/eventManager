import {
  GET_TRANSACTIONS
} from "../actions/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return [...action.transactions]
    default:
      return state;
  }
};

export default reducer;
