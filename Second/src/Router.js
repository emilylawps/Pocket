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
import Planning from './page/Planning';
import Statistic from './page/Statistic';
import AddPlanning from './page/AddPlanning';


class RouterComponent extends Component {
  render() {
    // const {container} = styles;
    return(
        <Router>
          <Scene key="root">
            <Scene key="authentication"  hideNavBar component={Authentication}  initial={true} />
            <Scene key="register" hideNavBar component={Register} />
            <Scene key="forgotPassword" hideNavBar component={forgotPassword} />
            <Scene key="menu" hideNavBar component={Menu} />
            <Scene key="expenses" hideNavBar component={Expenses} />
            <Scene key="addExpenses" hideNavBar component={AddExpenses} />
            <Scene key="planning" hideNavBar component={Planning} />
            <Scene key="addPlanning" hideNavBar component={AddPlanning} />
            <Scene key="statistic" hideNavBar component={Statistic} />

          </Scene>
        </Router>
    );
  }
}
export default RouterComponent;
