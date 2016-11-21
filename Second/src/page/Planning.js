import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import LoginHeader from './../components/LoginHeader';
import Menu from './../components/Menu';

class Planning extends Component {
  render(){
    const{container, mainContainer} = styles;

    return(
      <View style={container}>
      <LoginHeader Name={'Planning'} />
        <View style={mainContainer} />
        <Menu />
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
