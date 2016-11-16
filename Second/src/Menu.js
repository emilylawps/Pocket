import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Menu = () => {
  const {menuContainer, menuButton, textStyle} = styles;
  return (
    <View style={menuContainer}>
      <View style={menuButton}>
        <Text style={textStyle}>Expenses</Text>
      </View>
      <View style={menuButton}>
        <Text style={textStyle}>Planning</Text>
      </View>
      <View style={menuButton}>
        <Text style={textStyle}>Statistic</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  menuContainer:{
    backgroundColor: '#ccccff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 45,
    elevation: 10,
  },

  menuButton:{
    justifyContent: 'center',
    flex: 1,
    borderColor: 'grey',
    borderLeftWidth: 1,
  },

  textStyle:{
    textAlign: 'center',
    color: 'black',
    fontSize: 23
  }
});

export default Menu;
