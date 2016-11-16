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
        <View style={imageBox}>
          <Image source={require('./search.png')} style={imageSize} />
        </View>
        <Text style={titleName}>EMILY</Text>
        <View style={imageBox}>
          <Image source={require('./logout.png')} style={imageSize} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create ({
  upperContainer: {
    flex: 2,
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

  imageBox: {
    paddingLeft: 12,
    paddingRight: 12
  },

  imageSize: {
    width: 30,
    height: 30,

  }
});

export default Header;
