import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import LoginPage from './page/LoginPage';
import Register from './page/Register';
import Home from './page/Home';
import Planning from './page/Planning';
import Statistic from './page/Statistic';

class RouterComponent extends Component {
  render() {
    // const {container} = styles;
    return(
        <Router>
          <Scene key="root">
            <Scene key="login"  hideNavBar component={LoginPage}  initial={true} />
            <Scene key="register" component={Register} />
            <Scene key="home" component={Home} />
            <Scene key="planning" component={Planning} />
            <Scene key="statistic" component={Statistic} />
          </Scene>
        </Router>
    );
  }
}
export default RouterComponent;
