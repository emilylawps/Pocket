import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import {expensesUpdate, expensesSave, expensesDelete } from './../actions';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import Header from './../components/Header';
import Button from './../components/Button';
import ConfirmDelete from './../components/ConfirmDelete';
// import { Card, CardSection } from './../components';

class ExpensesEdit extends Component {
  state = {error:'', showModal: false};

  componentWillMount() {
    _.each(this.props.expense, (value, prop) => {
      this.props.expensesUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { date, category, amount, notes, month } = this.props;

    // if (date === '') {
    //     this.setState({ error: 'Select a date' });
    // }
    // else
    if (amount === ''|| amount <= 0) {
        this.setState({ error: 'Enter a valid amount' });
    }
    else {
      this.setState({error: ''});
      this.props.expensesSave({
        date,
        category,
        amount,
        notes,
        month,
        uid: this.props.expense.uid });
    }
  }

  onAccept() {
    const {uid} = this.props.expense;

    this.props.expensesDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const {container, mainContainer, errorText} = styles;

    return (
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'Edit Expenses'} />

          <View style={mainContainer}>
            <ExpensesForm />
            <Text style={errorText}>
              {this.state.error}
            </Text>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>

            <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
              Delete
            </Button>

            <ConfirmDelete
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            >
              Are you sure you want to delete this record?
            </ConfirmDelete>

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
    paddingTop: 5,
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

export default connect (mapStateToProps, {
  expensesUpdate, expensesSave, expensesDelete
 })(ExpensesEdit);
