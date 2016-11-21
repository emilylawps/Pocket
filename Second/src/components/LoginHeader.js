import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const LoginHeader = (props) => {
  const {upperContainer, titleName, imageBox, imageSize} = styles;
  return (
      <View style={upperContainer}>
        <Text style={titleName}>{props.Name}</Text>
        <View style={imageBox}>
          <Image style={imageSize} source={require('./../logout.png')} />
        </View>
      </View>

  );
}

const styles = StyleSheet.create ({
  upperContainer: {
    flex: 1.5,
    backgroundColor: '#ccccff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },

  titleName: {
    fontSize: 30,
    fontWeight: '100',
    textAlign: 'center',
    color: 'black',
  },

  imageBox: {
    paddingLeft: 12,
    paddingRight: 12
  },

  imageSize: {
    width: 25,
    height: 25,
  }
});

export default LoginHeader;
