import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from './../components/Header';
// import ButtonComponent from 'react-native-button-component';

const Menu = () => {
  const {container, menuContainer, welcomeText, menuButton, menuText, logoutText, logoutButton} = styles;
  return (
    <View style={container}>
     <Header Name={'Home'} />
      <View style={menuContainer}>

      <Text style={welcomeText}>Welcome! Username</Text>

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

  welcomeText:{
    fontSize: 18,
    paddingTop: 10,
    color: 'lightslategrey'
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
