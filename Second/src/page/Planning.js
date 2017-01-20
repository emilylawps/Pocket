import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from './../components/Header';

class Planning extends Component {
  render(){
    const{container, mainContainer} = styles;

    return(
      <View style={container}>
        <Header
          Name={'Planning'}
          Icon={(require('./../add.png'))}
          Page={(Actions.addPlanning)}
        />
        <View style={mainContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  mainContainer: {
    flex: 12,
    alignItems: 'center'
  }
});

export default Planning;
