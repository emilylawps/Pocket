import { combineReducers } from 'redux';
import ExpensesFormReducer from './ExpensesFormReducer';
import ExpensesReducer from './ExpensesReducer';

import PlanningsFormReducer from './PlanningsFormReducer';
import PlanningsReducer from './PlanningsReducer';

import PlanningsStatisticsReducer from './PlanningsStatisticsReducer';
import ExpensesStatisticsReducer from './ExpensesStatisticsReducer';

export default combineReducers({
  addExpenses: ExpensesFormReducer,
  expenses: ExpensesReducer,
  addPlannings: PlanningsFormReducer,
  plannings: PlanningsReducer,
  expensesStatistics: ExpensesStatisticsReducer,
  planningsStatistics: PlanningsStatisticsReducer
});
