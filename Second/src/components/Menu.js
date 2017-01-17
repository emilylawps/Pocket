import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
// import ButtonComponent, { RectangleButton } from 'react-native-button-component';

const Menu = () => {
  const {menuContainer, menuButton, textStyle} = styles;
  return (
    <View style={menuContainer}>
      <View>
        <Button onPress={Actions.home} title="Expenses" />
      </View>
      <View>
        <Button onPress={Actions.planning} title="Planning" />
      </View>
      <View>
        <Button onPress={Actions.statistic} title="Statistic" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  menuContainer:{
    backgroundColor: 'linen',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 35,
    elevation: 5
  },

  // menuButton:{
  //   justifyContent: 'center',
  //   flex: 1,
  //   borderColor: 'grey',
  //   borderLeftWidth: 1,
  // },

  // textStyle:{
  //   // textAlign: 'center',
  //   // color: 'black',
  //   // fontSize: 20,
  //   height: 40,
  //   width: 10
  // }
});

export default Menu;
