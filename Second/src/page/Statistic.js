import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Header from './../components/Header';

class Statistic extends Component {
  render(){
    const{container, mainContainer} = styles;

    return(
      <View style={container}>
      <Header Name={'Statistic'} />
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

export default Statistic;
