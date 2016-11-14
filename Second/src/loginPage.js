import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class loginPage extends Component {
  render(){
    const{container, upperContainer, middleContainer, bottomContainer, titleName,
      contentText, loginBar, loginButton, registerButton, alignLeft} = styles;

//add login button
//add register button
//forgot password button
    return(
      <View style={container}>
        <View style={upperContainer}>
          <Text style={titleName}>Emily</Text>
        </View>

        <View style={middleContainer}>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password"></TextInput>

          <View style={loginBar}>
            <View style={loginButton}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>LOGIN</Text>
            </View>
            <View style={registerButton}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Register</Text>
            </View>
          </View>

        </View>

        <View style={bottomContainer}>
          <Text style={contentText}>Forgot password?</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },

  upperContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 10,
  },

  middleContainer: {
    flex: 5,
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'yellow',
  },

  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'green',
    flexDirection: 'row',
    padding: 20,
  },

  titleName: {
    fontSize: 50,
    fontWeight: '100',
    textAlign: 'center',
    color: 'black',
  },

  contentText: {
    fontSize: 20,
    color: 'grey',
    //width: 10,
  },

  loginBar: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  loginButton: {
    padding:5,
    backgroundColor: 'lightgrey',
  },

  registerButton: {
  padding: 5,
  }


});

//AppRegistry.registerComponent('Second', () => loginPage);
