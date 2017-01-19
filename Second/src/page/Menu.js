import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LoginHeader from './../components/LoginHeader';
import ButtonComponent from 'react-native-button-component';

const Menu = () => {
  const {container, menuContainer, menuButton, menuText, logoutText, logoutButton} = styles;
  return (
    <View style={container}>
     <LoginHeader Name={'POCKET'} />
      <View style={menuContainer}>
      
      <TouchableNativeFeedback onPress={Actions.expenses}>
        <View style={menuButton}>
          <Text style={menuText}> Expenses </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={Actions.planning}>
        <View style={menuButton}>
          <Text style={menuText}> Planning </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={Actions.statistic}>
        <View style={menuButton}>
          <Text style={menuText}> Statistic </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
        <View style={logoutButton} >
          <Text style={logoutText}> Log Out </Text>
        </View>
      </TouchableNativeFeedback>

      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex:1
  },

  menuContainer:{
    backgroundColor: 'beige',
    padding: 10,
    flex: 12
  },

  menuButton:{
    alignItems:'center',
    backgroundColor: '#cfafaf',
    marginTop: 25,
    padding: 20
  },

  logoutButton:{
    alignItems:'center',
    backgroundColor: '#cfafaf',
    marginTop: 60,
    padding: 10
  },

  logoutText:{
    color: 'indianred',
    fontSize:20
  },

  menuText:{
    color: 'white',
    fontSize: 25
  }
});

export default Menu;
