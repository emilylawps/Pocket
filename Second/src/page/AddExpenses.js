import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { expensesUpdate, expensesCreate } from './../actions';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import CardSection from './../components/CardSection';
import Header from './../components/Header';
import ExpensesForm from './ExpensesForm';
import Button from './../components/Button';

class AddExpenses extends Component {
  onButtonPress() {
    const { date, category, amount, notes} = this.props;

    this.props.expensesCreate({ date, category: category || 'General', amount, notes});
  }

  render(){
    const {container, mainContainer } = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'Add New Expenses'} />

          <View style={mainContainer}>

            <ExpensesForm {...this.props} />
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

export default connect(mapStateToProps, {
  expensesUpdate, expensesCreate
}) (AddExpenses);
