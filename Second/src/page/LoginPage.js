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
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
// import {Spinner} from './../components/Spinner';
// import ButtonComponent, { RectangleButton } from 'react-native-button-component';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {

    const {email, password } = this.state;
    
    this.setState({ error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {          //fail to sign in
        this.setState({ error: 'Invalid email or password.'});
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }
  //
  // renderButton() {
  //   if (this.state.loading) {
  //     return <Spinner size = "small" />;
  //   }

  render(){
    const{container, titleName, middleContainer, bottomContainer, loginBar, bottomText, errorText} = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
      <View style={container}>

        <View style={middleContainer}>
          <Text style={titleName}>POCKET</Text>

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

            <Button onPress={this.onButtonPress.bind(this)} title="LOGIN"/>

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

  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 5,
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
