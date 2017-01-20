import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import Header from './../components/Header';
import dismissKeyboard from 'react-native-dismiss-keyboard';

class forgotPassword extends Component {
  render(){
    const{container, container2} = styles;
    
    return (
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'POCKET'} />
          <View style={container2}>
            <TextInput placeholder="Email"></TextInput>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
