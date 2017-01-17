import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import Menu from './../components/Menu';
import {Actions} from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
// import ButtonComponent, { RectangleButton } from 'react-native-button-component';

class LoginPage extends Component {
  render(){
    const{container, titleName, middleContainer, bottomContainer,contentText, loginBar,
       loginButton, registerButton, bottomText} = styles;

//login button is directed to home page!!!
    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
      <View style={container}>
        <View style={middleContainer}>
          <Text style={titleName}>POCKET</Text>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Password" secureTextEntry></TextInput>
          <View style={loginBar}>
            <Button style={loginButton} onPress={Actions.home} title="LOGIN"/>
            <Button style={registerButton} onPress={Actions.register} title="Register an account"/>
          </View>
        </View>
        <View style={bottomContainer}>
          <Text style={bottomText}>Forgot password?</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'linen',
  },

  titleName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'indianred',
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
    height: 100,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    flexDirection: 'column',
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
