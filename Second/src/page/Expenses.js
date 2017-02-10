import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { expensesFetch } from './../actions';
import Header from './../components/Header';

class Expenses extends Component {
  componentWillMount() {
    this.props.expensesFetch();
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



  render(){

    console.log(this.props);
    const {container, mainContainer} = styles;

    return(
      <View style={container}>
        <Header
          Name={'Expenses'}
          Icon={(require('./../add.png'))}
          Page={(Actions.addExpenses)}
        />
        <View style={mainContainer}>

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
  }
};

const mapStateToProps = state => {
  const expenses = _.map(state.expenses, (val, uid) => {
    return { ...val, uid };
  });

  return {expenses};
}

export default connect(mapStateToProps, { expensesFetch })(Expenses);
