import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
// import ButtonComponent, { RectangleButton } from 'react-native-button-component';

// import or from './../components/or';

class Register extends Component {
  render(){
    const{container, middleContainer, titleName, loginBar, loginButton, registerButton} = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
      <View style={container}>
        <View style={middleContainer}>
          <Text style={titleName}>POCKET</Text>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password" secureTextEntry></TextInput>
          <TextInput placeholder="Confirm Password" secureTextEntry></TextInput>

          <View style={loginBar}>
            <Button onPress={Actions.register} title="REGISTER"/>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
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
    color: 'indianred',
  },

  middleContainer: {
    flex: 12,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'linen',
  },
  //
  // bottomContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   backgroundColor: 'linen',
  //   flexDirection: 'row',
  //   padding: 20,
  // },
  //
  // bottomText: {
  //   fontSize: 20,
  //   color: 'grey',
  // },

  loginBar: {
    height: 100,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  // loginButton: {
  //   backgroundColor: '#ccccff',
  //   // fontSize: 22,
  //   // fontWeight: 'bold',
  //   // color: 'black',
  //   // padding:5,
  //   height: 40,
  //   width: 80
  // },

  // registerButton: {
  //   backgroundColor: '#ccccff',
  // // fontSize: 20,
  // // color: 'black',
  //   elevation: 5,
  //   height: 40,
  //   width: 80
  // }
});

export default Register;
