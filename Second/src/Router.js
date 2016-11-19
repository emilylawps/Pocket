import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import LoginPage from './page/LoginPage';
import Register from './page/Register';

class RouterComponent extends Component {
  render() {
    // const {container} = styles;
    return(
        <Router>
          <Scene key="root">
            <Scene key="login" component={LoginPage} title="LOGIN" initial={true} />
            <Scene key="register" component={Register} title="Register" />
          </Scene>
        </Router>
    );
  }
}

// const styles = {
//   container: {
//     flex: 1
//   }
// }

export default RouterComponent;
