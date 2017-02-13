import _ from 'lodash';
import React, { Component } from 'react';
import {
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
  state = {showModal: false};

  componentWillMount() {
    _.each(this.props.expense, (value, prop) => {
      this.props.expensesUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { date, category, amount, notes } = this.props;

    this.props.expensesSave({ date, category, amount, notes, uid: this.props.expense.uid });
  }

  onAccept() {
    const {uid} = this.props.expense;

    this.props.expensesDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const {container, mainContainer} = styles;

    return (
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'Edit Expenses'} />

          <View style={mainContainer}>
            <ExpensesForm />

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

  mainContainer: {
    flex: 12,
    backgroundColor: 'beige',
    padding: 10
  }
};

const mapStateToProps = (state) => {
  const { date, category, amount, notes } = state.addExpenses;

  return { date, category, amount, notes };
};

export default connect (mapStateToProps, {
  expensesUpdate, expensesSave, expensesDelete
 })(ExpensesEdit);
