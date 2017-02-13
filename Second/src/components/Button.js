import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, buttonText } = styles;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={buttonText}>
          {children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = {

  buttonStyle: {
    alignItems:'center',
    backgroundColor: '#cfafaf',
    padding: 5,
    marginVertical: 10,
    elevation: 5
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
};

export default Button;
