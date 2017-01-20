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

class Register extends Component {
  render(){
    const{container, titleName, loginBar} = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Text style={titleName}>POCKET</Text>
          <TextInput placeholder="Username"></TextInput>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password" secureTextEntry></TextInput>
          <TextInput placeholder="Confirm Password" secureTextEntry></TextInput>

          <View style={loginBar}>
            <Button onPress={Actions.register} title="REGISTER"/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create ({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'linen',
  },

  titleName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'indianred',
    padding: 20
  },

  loginBar: {
    height: 100,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

});

export default Register;
