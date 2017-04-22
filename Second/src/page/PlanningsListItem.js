import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  CardSection  from './../components/CardSection';
import  Card  from './../components/Card';

class PlanningsListItem extends Component {
  onRowPress() {
    Actions.planningsEdit({ planning: this.props.planning });
  }

  render() {
    const { category, amount, month } = this.props.planning;
    const {titleStyle, containerStyle, categoryStyle, amountStyle} = styles;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>

          <Card>
            <Text style={titleStyle}>
              {month}
            </Text>

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

          </Card>
        </View>
      </TouchableWithoutFeedback>
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

export default PlanningsListItem;
