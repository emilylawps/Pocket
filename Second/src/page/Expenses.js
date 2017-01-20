import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from './../components/Header';

class Expenses extends Component {
  render(){
    const {container, mainContainer} = styles;

    return(
      <View style={container}>
        <Header
          Name={'Expenses'}
          Icon={(require('./../add.png'))}
          Page={(Actions.addExpenses)}
        />
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
