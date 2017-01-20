import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Header from './../components/Header';

class AddPlanning extends Component {
  render(){
    const {container, mainContainer} = styles;

    return(
      <View style={container}>
        <Header Name={'Add New Plans'} />
        <View style={mainContainer}></View>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1
  },

  mainContainer: {
    flex: 12,
    // elevation: 5,
    backgroundColor: 'beige'
  }
};

export default AddPlanning;
