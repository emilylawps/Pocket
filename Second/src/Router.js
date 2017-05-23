import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import Authentication from './page/Authentication';
// import LoginPage from './page/LoginPage';
import Register from './page/Register';
import forgotPassword from './page/forgotPassword';
import Menu from './page/Menu';
import Expenses from './page/Expenses';
import AddExpenses from './page/AddExpenses';
import ExpensesEdit from './page/ExpensesEdit';
import Plannings from './page/Plannings';
import AddPlannings from './page/AddPlannings';
import PlanningsEdit from './page/PlanningsEdit';
import Statistic from './page/Statistic';

class RouterComponent extends Component {
  render() {
    return(
        <Router>
          <Scene key="root">
            <Scene key="authentication"  hideNavBar component={Authentication}  initial />
            <Scene key="register" hideNavBar component={Register} />
            <Scene key="forgotPassword" hideNavBar component={forgotPassword} />
            <Scene key="menu" hideNavBar component={Menu} />
            <Scene key="expenses" hideNavBar component={Expenses} />
            <Scene key="expensesEdit" hideNavBar component={ExpensesEdit} />
            <Scene key="addExpenses" hideNavBar component={AddExpenses} />
            <Scene key="plannings" hideNavBar component={Plannings} />
            <Scene key="planningsEdit" hideNavBar component={PlanningsEdit} />
            <Scene key="addPlannings" hideNavBar component={AddPlannings} />
            <Scene key="statistic" hideNavBar component={Statistic} />
          </Scene>
        </Router>
    );
  }
}
export default RouterComponent;
