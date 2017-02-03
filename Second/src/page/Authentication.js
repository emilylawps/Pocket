import React, {Component} from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import LoginPage from './LoginPage';
import Menu from './Menu';

class Authentication extends Component {

  state = {loggedIn: false};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzgCw6LALYFF_XWFxWHII_WZmC7XJBDXk",
      authDomain: "authentication-8942a.firebaseapp.com",
      databaseURL: "https://authentication-8942a.firebaseio.com",
      storageBucket: "authentication-8942a.appspot.com",
      messagingSenderId: "772421632096"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true});
      }
      else {
        this.setState({ loggedIn: false});
      }
    });
  }

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
