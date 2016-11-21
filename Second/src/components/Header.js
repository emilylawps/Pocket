import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const Header = () => {
  const {upperContainer, titleName, imageSize, imageBox} = styles;

  return (
      <View style={upperContainer}>
        <Text style={titleName}>MONEY</Text>
      </View>
  );
}

const styles = StyleSheet.create ({
  upperContainer: {
    flex: 1.5,
    backgroundColor: '#ccccff',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'row'
  },

  titleName: {
    fontSize: 35,
    fontWeight: '100',
    textAlign: 'center',
    color: 'black'
  },
  //
  // imageBox: {
  //   paddingLeft: 12,
  //   paddingRight: 12
  // },
  //
  // imageSize: {
  //   width: 25,
  //   height: 25,
  // }
});

export default Header;
