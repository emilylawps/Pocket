import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Header = (props) => {
  const {upperContainer, titleName, imageBox, imageSize} = styles;
  return (
      <View style={upperContainer}>
        <Text style={titleName}>{props.Name}</Text>

        <TouchableNativeFeedback onPress={props.Page}>
          <View style={imageBox}>
            <Image style={imageSize} source={props.Icon} />
          </View>
        </TouchableNativeFeedback>

      </View>

  );
}

const styles = StyleSheet.create ({
  upperContainer: {
    flex: 1.5,
    backgroundColor: 'linen',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },

  titleName: {
    fontSize: 22,
    fontWeight: '100',
    textAlign: 'center',
    color: 'lightslategrey',
    padding: 10
  },

  imageBox: {
    padding: 10,
    // backgroundColor: 'yellow'
  },

  imageSize: {
    width: 28,
    height: 28,
  }
});

export default Header;
