import React, {Component} from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import LoginPage from './LoginPage';
import Menu from './Menu';

class Authentication extends Component {

  state = { loggedIn: false };

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return <Menu />;
      case false:
        return <LoginPage />;
    }
  }

  render() {
    return (
      this.renderContent()
    );
  }
}

export default Authentication;
