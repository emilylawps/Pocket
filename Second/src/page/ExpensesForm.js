import React, { Component } from 'react';
import {
  Text,
  View,
  Picker,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { expensesUpdate } from './../actions';
import moment from 'moment';
import CardSection from './../components/CardSection';
import Input from './../components/Input';

class ExpensesForm extends Component {

  render() {
    const { buttonStyle, buttonText, labelStyle, inputStyle, pickerText, dateStyle} = styles;

    return (
        <View>
          <CardSection style={{alignItems: 'center'}}>
            <Text style={pickerText}>Category</Text>
            <Picker
              style={{flex:2}}
              selectedValue={this.props.category}
              onValueChange={value => this.props.expensesUpdate({prop: 'category', value})}
            >
              <Picker.Item label="General" value="General" />
              <Picker.Item label="Food" value="Food" />
              <Picker.Item label="Transport" value="Transport" />
              <Picker.Item label="Clothes" value="Clothes" />
              <Picker.Item label="Beauty" value="Beauty" />
              <Picker.Item label="Entertainment" value="Entertainment" />
              <Picker.Item label="Bills" value="Bills" />
              <Picker.Item label="Studies" value="Studies" />
              <Picker.Item label="Medication" value="Medication" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </CardSection>

          <CardSection>
            <Input
              label = "Amount"
              placeholder = "0.00"
              keyboardType = 'numeric'
              value = {this.props.amount}
              onChangeText = {value => this.props.expensesUpdate({ prop: 'amount', value})}
            />
          </CardSection>

          <CardSection style={{flexDirection: 'column'}}>
            <Text style={labelStyle}>Notes</Text>
            <TextInput
              style={inputStyle}
              multiline={true}
              numberOfLines= {3}
              value = {this.props.notes}
              onChangeText = {value => this.props.expensesUpdate({ prop: 'notes', value})}
            />
          </CardSection>
        </View>
    );
  }
}

const styles = {

  buttonStyle: {
    alignItems:'center',
    backgroundColor: '#cfafaf',
    padding: 5,
    elevation: 5
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

  inputStyle: {
    color: '#000',
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    // backgroundColor: 'yellow',
  },

  labelStyle: {
    color: 'darkslategrey',
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
    // backgroundColor: 'blue'
  },

  pickerText: {
    // backgroundColor: 'yellow',
    color: 'darkslategrey',
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },

  dateStyle: {
    color: 'black',
    fontSize: 18,
    padding: 10
  }
};

const mapStateToProps = (state) => {
  const { category, amount, notes } = state.addExpenses;

  return { category, amount, notes };
}

export default connect(mapStateToProps, {expensesUpdate})(ExpensesForm);
