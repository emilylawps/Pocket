import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { planningsUpdate, planningsCreate, planningsClear } from './../actions';
const moment = require('moment')
const dismissKeyboard = require('dismissKeyboard')
import Header from './../components/Header';
import PlanningsForm from './PlanningsForm';
import Button from './../components/Button';

class AddPlannings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      submitted: null
    }
  }

  componentWillMount() {
    this.props.planningsClear();
  }

  onButtonPress() {
    const { date, category, amount, notes, month} = this.props;

    if (date == null) {
        this.setState({error: 'Select a date'});
    }
    else if (amount === ''|| amount <= 0) {
        this.setState({ error: 'Enter a valid amount' });
    }
    else {
      this.setState({ error: '', submitted: false });
      selectedFullDate = new moment(date, "DD/MM/YYYY")
      selectedDate = moment(selectedFullDate).format("DD/MM/YYYY")
      selectedMonth = moment(selectedFullDate).format('MMMM YYYY')

      this.props.planningsCreate({
        date: selectedDate,
        category: category || 'General',
        amount,
        notes,
        month: selectedMonth
      });
    }
  }

  renderButtonText() {
    if (this.state.submitted === null) {
      return 'Save'
    } else if (this.state.submitted === false){
      return 'Submitting...'
    }
  }

  render(){
    const {container, mainContainer, errorText} = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'Add New Planning'} />

          <View style={mainContainer}>

          <PlanningsForm {...this.props} />
          <Text style={errorText}>
            {this.state.error}
          </Text>
          <Button onPress={this.onButtonPress.bind(this)} disabled={this.state.submitted === null ? false : true}>
            {this.renderButtonText()}
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
  const { date, category, amount, notes, month } = state.addPlannings;

  return { date, category, amount, notes, month };
};

export default connect(mapStateToProps, {
  planningsUpdate, planningsCreate, planningsClear
}) (AddPlannings);
