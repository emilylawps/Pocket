import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  CardSection  from './../components/CardSection';
import  Card  from './../components/Card';
import Statistic from './Statistic';

class StatisticsList extends Component {

  render() {
    console.log(this.props.sooort)
    const { category, amount } = this.props.statistic;
    // console.log(this.props.statistic.amount);
    concat = _.concat(this.props.statistic.amount);
    console.log(concat);
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

export default StatisticsList;
