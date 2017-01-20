import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
// import ButtonComponent, { RectangleButton } from 'react-native-button-component';

class LoginPage extends Component {
  render(){
    const{container, titleName, middleContainer, bottomContainer, loginBar, bottomText} = styles;

//login button is directed to home page!!!
    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
      <View style={container}>

        <View style={middleContainer}>
          <Text style={titleName}>POCKET</Text>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Password" secureTextEntry></TextInput>

          <View style={loginBar}>
            <Button onPress={Actions.menu} title="LOGIN"/>
            <Button onPress={Actions.register} title="Register an account"/>
          </View>
        </View>

        <View style={bottomContainer}>
          <TouchableNativeFeedback onPress={Actions.forgotPassword}>
            <View>
              <Text style={bottomText}>Forgot password?</Text>
            </View>
          </TouchableNativeFeedback>
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
    padding: 20
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
    height: 120,
    paddingHorizontal: 5,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'grey'
  },
  //
  // loginButton: {
  //   backgroundColor: '#ccccff',
  //   elevation: 5,
  //   height: 40,
  //   width: 80
  // },
  //
  // registerButton: {
  //   backgroundColor: '#ccccff',
  //   borderColor: '#ccccff',
  //   height: 40,
  //   width: 80
  // },
});

export default LoginPage;
