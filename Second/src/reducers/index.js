import { combineReducers } from 'redux';
import ExpensesFormReducer from './ExpensesFormReducer';

export default combineReducers({
  addExpenses: ExpensesFormReducer
});
