import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import Header from './../components/Header';
// import ButtonComponent from 'react-native-button-component';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // loaded: false
    }
  }

  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({ loaded: true })
  //   }, 1000);
  // }

  renderScreen() {
    const {container, menuContainer, menuButton, menuText, logoutText, logoutButton} = styles;
    return (
      <View>
        <TouchableNativeFeedback onPress={Actions.expenses}>
          <View style={menuButton}>
            <Text style={menuText}> Expenses </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={Actions.plannings}>
          <View style={menuButton}>
            <Text style={menuText}> Plannings </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={Actions.statistic}>
          <View style={menuButton}>
            <Text style={menuText}> Statistic </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => firebase.auth().signOut()}>
          <View style={logoutButton} >
            <Text style={logoutText}> Log Out </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }



  render() {
    return (
      <View style={styles.container}>
        <Header Name={'Home'} />
        <View style={styles.menuContainer}>
          {this.renderScreen()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container:{
    flex:1
  },
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  menuContainer:{
    backgroundColor: 'beige',
    padding: 10,
    flex: 12
  },

  // welcomeText:{
  //   fontSize: 18,
  //   paddingTop: 10,
  //   color: 'lightslategrey'
  // },

  menuButton:{
    alignItems:'center',
    backgroundColor: '#cfafaf',
    marginTop: 25,
    padding: 20
  },

  logoutButton:{
    alignItems:'center',
    backgroundColor: '#cfafaf',
    marginTop: 60,
    padding: 10
  },

  logoutText:{
    color: 'indianred',
    fontSize:20
  },

  menuText:{
    color: 'white',
    fontSize: 25
  }
});

export default Menu;
