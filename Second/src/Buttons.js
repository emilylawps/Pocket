import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Buttons = (props) => {
  const {buttons} = styles;
  return (
      <Text style={buttons}>{props.buttonContent}</Text>
  );
}

const styles = StyleSheet.create ({
  buttons: {
    backgroundColor: '#ccccff',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    padding:5,
    elevation: 5
  }
});

export default Buttons;
