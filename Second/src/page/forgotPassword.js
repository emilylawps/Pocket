import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

import LoginHeader from './../components/LoginHeader'

class forgotPassword extends Component {
  render(){
    const{container, container2} = styles;
    return (
      <View styles={container}>
        <LoginHeader Name={'POCKET'} />
        <View styles={container2}>
          <TextInput placeholder="Email"></TextInput>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },

  container2: {
    flex: 12,
    justifyContent: 'center',
    padding: 20
  }
};

export default forgotPassword;
