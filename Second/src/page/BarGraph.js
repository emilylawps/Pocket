import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  CardSection  from './../components/CardSection';
import  Card  from './../components/Card';

class BarGraph extends Component {

  render() {
    const { category, amount } = this.props.statistic;
    const {titleStyle, containerStyle, categoryStyle, amountStyle} = styles;

    return (
        <View>

            <CardSection style={{flexDirection: 'column'}}>
              <View style={containerStyle}>
                <Text style={categoryStyle}>
                  {category}
                </Text>

                <Text style={amountStyle}>
                RM {amount}
                </Text>

              </View>
            </CardSection>

        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  categoryStyle: {
    fontSize: 23,
    paddingLeft: 15,
    fontWeight: 'bold'
  },

  amountStyle: {
    fontSize: 23,
    paddingRight: 15,
    fontWeight: 'bold'
  }
};

export default BarGraph;
