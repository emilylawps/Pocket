import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const LoginHeader = (props) => {
  const {upperContainer, titleName} = styles;
  return (
      <View style={upperContainer}>
        <Text style={titleName}>{props.Name}</Text>
      </View>
  );
}

const styles = StyleSheet.create ({
  upperContainer: {
    flex: 2,
    backgroundColor: '#ccccff',
    justifyContent: 'center',
    elevation: 5,
  },

  titleName: {
    fontSize: 35,
    fontWeight: '100',
    textAlign: 'center',
    color: 'black',
  },
});

export default LoginHeader;
