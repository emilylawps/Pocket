import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  CardSection  from './../components/CardSection';
import  Card  from './../components/Card';
import Statistic from './Statistic';

class StatisticsList extends Component {

  render() {

    const { category, amount, percentage, total } = this.props.statistic;
    console.log(this.props.statistic);
    // concat = _.concat(this.props.statistic.amount);
    // console.log(concat);
    const {titleStyle, containerStyle, categoryStyle, amountStyle, listStyle} = styles;

    return (
        <View>
            <CardSection style={{flexDirection: 'column'}}>
              <View style={containerStyle}>
                <Text style={categoryStyle}>
                  {category}
                </Text>

                <View style={listStyle}>
                  <Text style={amountStyle}>
                    {percentage} %
                  </Text>

                  <Text style={amountStyle}>
                    RM {amount}
                  </Text>
                </View>

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

  listStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  categoryStyle: {
    fontSize: 22,
    paddingLeft: 15,
    // fontWeight: 'bold'
  },

  amountStyle: {
    fontSize: 20,
    paddingRight: 15,
    // fontWeight: 'bold'
  }
};

export default StatisticsList;
