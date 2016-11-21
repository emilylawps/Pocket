import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ButtonComponent, { RectangleButton } from 'react-native-button-component';


class Register extends Component {
  render(){
    const{container, middleContainer, titleName, bottomContainer,contentText, loginBar,
       loginButton, registerButton, bottomText} = styles;

    return(
      <View style={container}>
        <View style={middleContainer}>
          <Text style={titleName}>MONEY</Text>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password"></TextInput>
          <TextInput placeholder="Confirm Password"></TextInput>

          <View style={loginBar}>
            <ButtonComponent style={registerButton} onPress={Actions.register} text="REGISTER"/>
            <ButtonComponent style={loginButton} onPress={Actions.login} text="Login"/>
          </View>
        </View>
        <View style={bottomContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },

  titleName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  middleContainer: {
    flex: 12,
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'yellow',
  },

  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  //  backgroundColor: 'green',
    flexDirection: 'row',
    padding: 20,
  },

  bottomText: {
    fontSize: 20,
    color: 'grey',
  },

  loginBar: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  loginButton: {
    backgroundColor: '#ccccff',
    // fontSize: 22,
    // fontWeight: 'bold',
    // color: 'black',
    // padding:5,
    height: 40,
    width: 80
  },

  registerButton: {
    backgroundColor: '#ccccff',
  // fontSize: 20,
  // color: 'black',
    elevation: 5,
    height: 40,
    width: 80
  }
});

export default Register;
