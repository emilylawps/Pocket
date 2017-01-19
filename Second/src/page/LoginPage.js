import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
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
            <Button style={loginButton} onPress={Actions.menu} title="LOGIN"/>
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
    alignItems: 'flex-end',
    // backgroundColor: 'green',
    flexDirection: 'row',
    padding: 10,
  },

  bottomText: {
    fontSize: 15,
    color: 'grey',
    // backgroundColor: 'blue',
    padding: 10
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
