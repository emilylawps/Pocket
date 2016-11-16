import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Header from './Header';
//import Menu from './Menu';

class loginPage extends Component {
  render(){
    const{container, middleContainer, bottomContainer,contentText, loginBar,
       loginButton, registerButton, bottomText} = styles;

    return(
      <View style={container}>
        <Header/>

        <View style={middleContainer}>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password"></TextInput>

          <View style={loginBar}>
            <Text style={loginButton}>LOGIN</Text>
            <Text style={registerButton}>Register</Text>
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
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  loginButton: {
    backgroundColor: '#ccccff',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    padding:5,
    elevation: 5
  },

  registerButton: {
  fontSize: 20,
  color: 'black',
  padding: 5,
  }
});

export default loginPage;
//AppRegistry.registerComponent('Second', () => loginPage);
