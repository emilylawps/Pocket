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
import { planningsFetch } from './../actions';
import DatePicker from 'react-native-datepicker';
const moment = require('moment')
import CardSection from './../components/CardSection';
import PlanningsListItem from './PlanningsListItem';
import Header from './../components/Header';
import  Card  from './../components/Card';

class Plannings extends Component {

  state = {
    date: new Date(),
  };

  componentWillMount() {
    month = moment(this.state.date).format('MMMM YYYY')
    this.props.planningsFetch(month);
    this.createDataSource(this.props);
    // console.log(month)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ plannings }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows( plannings );
  }

  renderRow(planning) {
      return <PlanningsListItem planning={planning} />;
    }

  search(month) {
    // selectedFullDate = new moment(date, "MMMM YYYY")
    // date = moment(selectedFullDate).format("MMMM YYYY")
    // month = moment(selectedFullDate).format('MMMM YYYY')
    this.setState({date: month});
    this.props.planningsFetch(month);
  }

  calculateSum = () => {
    console.log(this.props.plannings)
    if (this.props.planning !== null) {
      let planningArray = this.props.plannings;
      let total = 0;
      planningArray.forEach((key, i) => {
        total += parseFloat(key.amount)
      })
      console.log(total)
      return <Text>Total RM {total}</Text>
    }
    else {
      return <Text>Total RM 0</Text>
    }
  }

  render(){
    const{container, titleStyle, mainContainer, datePickerStyle, pickerText} = styles;

    return(
      <View style={container}>
        <Header
          Name={'Planning'}
          Icon={(require('./../add.png'))}
          Page={(Actions.addPlannings)}
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
                format = "MMMM YYYY"
                showIcon = {false}
                onDateChange = {month => this.search(month)}
              />
            </View>
          </CardSection>

          <Card>
          <View style={{alignItems: 'center'}}>
            <Text style={titleStyle}>
              {this.calculateSum()}
            </Text>
          </View>


            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },

  titleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10
  },

  datePickerStyle: {
     flex: 2,
     flexDirection: 'row',
     padding: 5,
    //  backgroundColor: 'blue'
  },

  mainContainer: {
    flex: 13,
    // alignItems: 'center',
    backgroundColor: 'beige'
  },
//
//   pickerText: {
//   // backgroundColor: 'yellow',
//   color: 'darkslategrey',
//   fontSize: 18,
//   paddingLeft: 10,
//   flex: 1
// }
};

const mapStateToProps = state => {

  const plannings = _.map(state.plannings, (val, uid) => {
    return { ...val, uid };
  });
  return {plannings};
}

export default connect(mapStateToProps, { planningsFetch })(Plannings);
