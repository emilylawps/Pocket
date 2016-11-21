import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Menu from './../components/Menu';
import {Actions} from 'react-native-router-flux';

import ButtonComponent, { RectangleButton } from 'react-native-button-component';

class LoginPage extends Component {
  render(){
    const{container, titleName, middleContainer, bottomContainer,contentText, loginBar,
       loginButton, registerButton, bottomText} = styles;

//login button is directed to home page!!!
    return(
      <View style={container}>
        <View style={middleContainer}>
          <Text style={titleName}>MONEY</Text>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password"></TextInput>

          <View style={loginBar}>
            <ButtonComponent style={loginButton} onPress={Actions.home} text="LOGIN"/>
            <ButtonComponent style={registerButton} onPress={Actions.register} text="Register"/>
          </View>
        </View>

        <View style={bottomContainer}>
          <Text style={bottomText}>Forgot password?</Text>
        </View>
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
    elevation: 5,
    height: 40,
    width: 80
  },

  registerButton: {
    backgroundColor: '#ccccff',
    borderColor: '#ccccff',
    // color: 'black',
    // padding: 5,
    height: 40,
    width: 80
  },

});

export default LoginPage;
