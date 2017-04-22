import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { expensesUpdate, expensesCreate, expensesClear } from './../actions';
const moment = require('moment')
const dismissKeyboard = require('dismissKeyboard')
import Header from './../components/Header';
import ExpensesForm from './ExpensesForm';
import Button from './../components/Button';

class AddExpenses extends Component {
  state = { error:'' };

  componentWillMount() {
    this.props.expensesClear();
  }

  onButtonPress() {
    const { date, category, amount, notes, month} = this.props;

    if (date == null) {
        this.setState({error: 'Select a date'});
    }
    else if (amount === ''|| amount <= 0) {
        this.setState({ error: 'Enter a valid amount' });
    }
    else{
      this.setState({error: ''});
      selectedFullDate = new moment(date, "DD/MM/YYYY")
      selectedDate = moment(selectedFullDate).format("DD/MM/YYYY")
      selectedMonth = moment(selectedFullDate).format('MMMM YYYY')
      console.log(selectedDate)

      this.props.expensesCreate({
        date: selectedDate,
        category: category || 'General',
        amount,
        notes,
        month: selectedMonth
      });
    }
  }

  render(){
    const {container, mainContainer, errorText } = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'Add New Expenses'} />

          <View style={mainContainer}>

            <ExpensesForm {...this.props} />
            <Text style={errorText}>
              {this.state.error}
            </Text>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save
            </Button>

          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },

  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    paddingVertical: 5,
  },

  mainContainer: {
    flex: 12,
    backgroundColor: 'beige',
    padding: 10
  }
};

const mapStateToProps = (state) => {
  const { date, category, amount, notes, month } = state.addExpenses;

  return { date, category, amount, notes, month };
};

export default connect(mapStateToProps, {
  expensesUpdate, expensesCreate, expensesClear
}) (AddExpenses);
