import React, { Component } from 'react';
import {
  View,
  Text,
  LayoutAnimation
} from 'react-native';

import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';
import Spinner from './../components/Spinner';

class SplashScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log('got user')
        Actions.main({ type: 'reset' });
      } else {
        console.log('no user')
        Actions.login({ type: 'reset' });
      }
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>POCKET</Text>
        <Spinner size="small"/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 38,
    letterSpacing: 9,
    fontFamily: 'HelveticaNeue-Light',
    paddingBottom: 10
  },
  // desc: {
  //   fontSize: 16,
  //   letterSpacing: 0,
  //   fontFamily: 'HelveticaNeue-Thin',
  //   paddingBottom: 10
  // }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default SplashScreen;
