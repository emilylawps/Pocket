import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ButtonComponent, { RectangleButton } from 'react-native-button-component';

const Menu = () => {
  const {menuContainer, menuButton, textStyle} = styles;
  return (
    <View style={menuContainer}>
      <View style={menuButton}>
        <ButtonComponent style={textStyle} onPress={Actions.home} text="Expenses" title="Expenses" />
      </View>
      <View style={menuButton}>
        <ButtonComponent style={textStyle} onPress={Actions.planning} text="Planning" />
      </View>
      <View style={menuButton}>
        <ButtonComponent style={textStyle} onPress={Actions.statistic} text="Statistic" />
      </View>
    </View>
  );
}

// <View style={menuContainer}>
//   <View style={menuButton}>
//     <Text style={textStyle}>Expenses</Text>
//   </View>
//   <View style={menuButton}>
//     <Text style={textStyle}>Planning</Text>
//   </View>
//   <View style={menuButton}>
//     <Text style={textStyle}>Statistic</Text>
//   </View>
// </View>

const styles = StyleSheet.create ({
  menuContainer:{
    backgroundColor: '#ccccff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 35,
  },

  // menuButton:{
  //   justifyContent: 'center',
  //   flex: 1,
  //   borderColor: 'grey',
  //   borderLeftWidth: 1,
  // },

  textStyle:{
    // textAlign: 'center',
    // color: 'black',
    // fontSize: 20,
    height: 40,
    width: 120
  }
});

export default Menu;
