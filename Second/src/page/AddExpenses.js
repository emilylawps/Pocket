import React, { Component } from 'react';
import {
  Text,
  View,
  Picker,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { expensesUpdate, expensesCreate } from './../actions';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import CardSection from './../components/CardSection';
import Header from './../components/Header';
import Input from './../components/Input';

class AddExpenses extends Component {
  onButtonPress() {
    const { date, category, amount, notes} = this.props;

    this.props.expensesCreate({ date, category: category || 'General', amount, notes});
  }

  render(){
    const {container, mainContainer, buttonStyle, buttonText, labelStyle, inputStyle, datePickerStyle, pickerText} = styles;

    return(
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
      <View style={container}>
        <Header Name={'Add New Expenses'} />

        <View style={mainContainer}>
          <CardSection style={{alignItems: 'center'}}>
            <Text style={pickerText}>Date</Text>
            <View style={datePickerStyle}>
              <DatePicker
                style={{ flex: 1}}
                date = {this.props.date}
                placeholder="tap to select date"
                format="YYYY-MM-DD"
                showIcon={false}
                onDateChange={value => this.props.expensesUpdate({prop: 'date', value})}
              />
            </View>
          </CardSection>

          <CardSection style={{alignItems: 'center'}}>
            <Text style={pickerText}>Category</Text>
            <Picker
              style={{flex:2}}
              selectedValue={this.props.category}
              onValueChange={value => this.props.expensesUpdate({prop: 'category', value})}
            >
              <Picker.Item label="General" value="general" />
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Transport" value="transport" />
              <Picker.Item label="Clothes" value="clothes" />
              <Picker.Item label="Beauty" value="beauty" />
              <Picker.Item label="Entertainment" value="ent" />
              <Picker.Item label="Bills" value="bills" />
              <Picker.Item label="Studies" value="studies" />
              <Picker.Item label="Medication" value="med" />
              <Picker.Item label="Others" value="others" />
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

          <TouchableNativeFeedback onPress={this.onButtonPress.bind(this)}>
            <View style={buttonStyle}>
             <Text style={buttonText}> Save </Text>
            </View>
          </TouchableNativeFeedback>

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
  },

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
    // flex: 2
  },

  labelStyle: {
    color: 'darkslategrey',
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
    // backgroundColor: 'blue'
    // flex: 1
  },

  datePickerStyle: {
     flex: 2,
     flexDirection: 'row',
     padding: 5,
    //  backgroundColor: 'blue'
  },

  pickerText: {
    // backgroundColor: 'yellow',
    color: 'darkslategrey',
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  }
};

const mapStateToProps = (state) => {
  const { date, category, amount, notes } = state.addExpenses;

  return { date, category, amount, notes };
};

export default connect(mapStateToProps, {
  expensesUpdate, expensesCreate
}) (AddExpenses);
