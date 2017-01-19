import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import LoginHeader from './../components/LoginHeader';

class Expenses extends Component {
  render(){
    const {container, mainContainer} = styles;

    return(
      <View style={container}>
        <LoginHeader Name={'Expenses'} />
        <View style={mainContainer}></View>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1
  },

  mainContainer: {
    flex: 12,
    // elevation: 5,
    backgroundColor: 'beige'
  }
};

export default Expenses;
