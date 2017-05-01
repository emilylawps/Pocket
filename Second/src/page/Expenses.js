import _ from 'lodash';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { expensesFetch } from './../actions';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import CardSection from './../components/CardSection';
import ExpensesListItem from './ExpensesListItem';
import Header from './../components/Header';

class Expenses extends Component {

    state = {date: new Date()};

  componentWillMount() {
    date = moment(this.state.date).format('DD/MM/YYYY')
    this.props.expensesFetch(date);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ expenses }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows( expenses );
  }

  renderRow(expense) {
      return <ExpensesListItem expense={expense} />;
    }

  search(date) {
    this.setState({date: date});
    // console.log(date);
    this.props.expensesFetch(date);
  }

  render(){
    const {container, mainContainer, datePickerStyle} = styles;

    return(
      <View style={container}>
        <Header
          Name={'Expenses'}
          Icon={(require('./../add.png'))}
          Page={(Actions.addExpenses)}
        />

        <View style={mainContainer}>
          <CardSection style={{alignItems: 'center'}}>
            <View style={datePickerStyle}>
              <DatePicker
                style = {{ flex: 1}}
                date = {this.state.date}
                mode = 'date'
                androidMode = 'spinner'
                placeholder = "tap to select date"
                format = "DD/MM/YYYY"
                showIcon = {false}
                onDateChange = {date => this.search(date)}
              />
            </View>
          </CardSection>

          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },

  mainContainer: {
    flex: 12,
    // elevation: 5,
    backgroundColor: 'beige'
  },

  datePickerStyle: {
     flex: 2,
     flexDirection: 'row',
     padding: 5,
    //  backgroundColor: 'blue'
  }
};

const mapStateToProps = state => {
  // const payload = _.orderBy (state.expenses, function(node){
  //   return -(new Date(node.date).getTime());
  // });
  // console.log(payload)
  const expenses = _.map(state.expenses, (val, uid) => {
    return { ...val, uid };
  });

  return {expenses};
}

export default connect(mapStateToProps, { expensesFetch })(Expenses);
