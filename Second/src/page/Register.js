import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback
} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: '',
    loading:false
  };

  onButtonPress() {
    const {username, email, password } = this.state;

    this.setState({ error: '', loading:true});

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.onRegisterSuccess.bind(this);
        Actions.pop();
      })
      .catch(() => {      //fail to create new account
        this.setState({ error: 'Failed to create new account. Please use a valid email.'});
      });
  }

  onRegisterSuccess() {
    this.setState({
      username: '',
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  render(){
    const{container, titleName, loginBar, errorText} = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Text style={titleName}>POCKET</Text>

          <TextInput
            placeholder="Username"
            label="Username"
            value = { this.state.username }
            onChangeText = {username => this.setState({ username })}
          />

          <TextInput
            placeholder="Email"
            label="Email"
            keyboardType= 'email-address'
            value = { this.state.email }
            onChangeText = {email => this.setState({ email })}
          />

          <TextInput
            placeholder="Password"
            label="Password"
            secureTextEntry
            value = { this.state.password }
            onChangeText = {password => this.setState({ password })}
          />

          <Text style={errorText}>
            {this.state.error}
          </Text>

          <View style={loginBar}>
            <Button onPress={this.onButtonPress.bind(this)} title="REGISTER"/>
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

  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 5,
  },

});

export default Register;
