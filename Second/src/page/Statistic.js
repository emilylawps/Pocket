import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Picker,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { expensesStatisticsFetch, planningsStatisticsFetch } from './../actions';
import Header from './../components/Header';
import CardSection from './../components/CardSection';
import Card from './../components/Card';
import DatePicker from 'react-native-datepicker';
const moment = require('moment');
import StatisticsList from './StatisticsList';


class Statistic extends Component {
  state = {
    date: new Date(),
    currentMonth: '',
    firstMonth: '',
    monthA: '',
    monthB: '',
    monthC: '',
    monthD: '',
    monthE: '',
    monthF: '',
    monthG: '',
    monthH: '',
    monthI: '',
    monthJ: '',
    monthK: ''
  };

  componentWillMount(){
    month = moment(this.state.date).format('MMMM YYYY')
    this.showCurrentMonth(month);
    this.props.expensesStatisticsFetch(month);
    this.props.planningsStatisticsFetch(month);
    this.createDataSource(this.props);
    // console.log(this.props.statistics)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ statistics }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows( statistics );
  }

  renderRow(statistic) {
      return <StatisticsList statistic={statistic} />;
    }


  search(month) {
    this.setState({currentMonth: month});
    this.props.expensesStatisticsFetch(month);
    this.props.planningsStatisticsFetch(month);
      // console.log(this.props.statistics)
  }

  showCurrentMonth = (month) => {
    this.setState({
      currentMonth: month,
      firstMonth: month
    });

    const fullDate = new moment(month, "MMMM YYYY")
    monthA = moment(fullDate).subtract(1, "months")
    monthB = moment(fullDate).subtract(2, "months")
    monthC = moment(fullDate).subtract(3, "months")
    monthD = moment(fullDate).subtract(4, "months")
    monthE = moment(fullDate).subtract(5, "months")
    monthF = moment(fullDate).subtract(6, "months")
    monthG = moment(fullDate).subtract(7, "months")
    monthH = moment(fullDate).subtract(8, "months")
    monthI = moment(fullDate).subtract(9, "months")
    monthJ = moment(fullDate).subtract(10, "months")
    monthK = moment(fullDate).subtract(11, "months")

    this.setState({
      monthA: moment(monthA).format("MMMM YYYY"),
      monthB: moment(monthB).format("MMMM YYYY"),
      monthC: moment(monthC).format("MMMM YYYY"),
      monthD: moment(monthD).format("MMMM YYYY"),
      monthE: moment(monthE).format("MMMM YYYY"),
      monthF: moment(monthF).format("MMMM YYYY"),
      monthG: moment(monthG).format("MMMM YYYY"),
      monthH: moment(monthH).format("MMMM YYYY"),
      monthI: moment(monthI).format("MMMM YYYY"),
      monthJ: moment(monthJ).format("MMMM YYYY"),
      monthK: moment(monthK).format("MMMM YYYY")
    });
  }

  calculateSum = () => {
    // console.log(this.props.statistics)
    if (this.props.statistic !== null) {
      let statisticArray = this.props.statistics;
      let total = 0;
      statisticArray.forEach((key, i) => {
        total += parseFloat(key.amount)
      })
      // console.log(total)
      return <Text>Total   RM {total}</Text>
    }
    else {
      return <Text>Total   RM 0</Text>
    }
  }

  render(){
    const{testShit, container, titleStyle, mainContainer, datePickerStyle, pickerText, contentContainerStyle} = styles;

    return(
      <View style={[container]}>
        <Header Name={'Statistic'} />

        <View style={[mainContainer]}>
          <CardSection style={{alignItems: 'center'}}>
            <Picker
              style={{flex:2}}
              selectedValue={this.state.currentMonth}
              onValueChange={month => this.search(month)}>
              <Picker.Item label={this.state.firstMonth} value={this.state.firstMonth} />
              <Picker.Item label={this.state.monthA} value={this.state.monthA} />
              <Picker.Item label={this.state.monthB} value={this.state.monthB} />
              <Picker.Item label={this.state.monthC} value={this.state.monthC} />
              <Picker.Item label={this.state.monthD} value={this.state.monthD} />
              <Picker.Item label={this.state.monthE} value={this.state.monthE} />
              <Picker.Item label={this.state.monthF} value={this.state.monthF} />
              <Picker.Item label={this.state.monthG} value={this.state.monthG} />
              <Picker.Item label={this.state.monthH} value={this.state.monthH} />
              <Picker.Item label={this.state.monthI} value={this.state.monthI} />
              <Picker.Item label={this.state.monthJ} value={this.state.monthJ} />
              <Picker.Item label={this.state.monthK} value={this.state.monthK} />
            </Picker>
          </CardSection>

          <Card>
            <View style={{alignItems:'center'}}>
              <Text style={titleStyle}>
                {this.calculateSum()}
              </Text>
            </View>

            <ListView
              pagingEnabled={false}
              contentContainerStyle={[contentContainerStyle]}
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
  testShit: {
    borderColor: 'red',
    borderWidth: 2
  },
  container: {
    flex: 1
  },

  titleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10
  },

  mainContainer: {
    flex: 12,
    // alignItems: 'center'
    backgroundColor: 'beige'
  },

  pickerText: {
    // backgroundColor: 'yellow',
    color: 'darkslategrey',
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  contentContainerStyle: {
    paddingBottom: 60
  }
};

const mapStateToProps = state => {

    const filtered = _.map(state.expensesStatistics, function(a)  {
      amount= a.amount;
      category= a.category;
      return {amount, category};
    });
    // console.log(filtered);

    const sum = (total, item) => total += parseFloat(item.amount);
    const result = _.chain(filtered)
    .groupBy('category')
    .map((group, category) => ({ category: category, amount : _.reduce(group, sum, 0) }))
    .value();
    console.log(result);

    const sumTotal = _.sumBy(result, "amount");
    // console.log(sumTotal);

    const percentageArr = _.each(result, function(key){
      key.percentage = _.round((key.amount / sumTotal) * 100, 2);
      key.total = sumTotal;
    });
    console.log(percentageArr);

    const sorted = _.orderBy (percentageArr, function(o){
      return -(o.amount);
    })
    // console.log(sorted);

    const statistics = _.map(sorted, (val, uid) => {
    return { ...val, uid };
  });
  return {statistics};
}

export default connect(mapStateToProps, { expensesStatisticsFetch, planningsStatisticsFetch })(Statistic);
