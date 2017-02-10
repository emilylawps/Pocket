import { combineReducers } from 'redux';
import ExpensesFormReducer from './ExpensesFormReducer';
import ExpensesReducer from './ExpensesReducer';

export default combineReducers({
  addExpenses: ExpensesFormReducer,
  expenses: ExpensesReducer
});
