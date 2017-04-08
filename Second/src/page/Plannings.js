import _ from 'lodash';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { planningsFetch } from './../actions';
import CardSection from './../components/CardSection';
import PlanningsListItem from './PlanningsListItem';
import Header from './../components/Header';

class Plannings extends Component {

  // state = { date: moment().format('MMMM YYYY') };

  componentWillMount() {
    // const {date} = this.props;
    this.props.planningsFetch();
    this.createDataSource(this.props);
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

  // search(date) {
  //   this.setState({date: date});
  //   console.log(date);
  //   this.props.planningsFetch(date);
  // }

  render(){
    const{container, mainContainer, datePickerStyle, pickerText} = styles;

    return(
      <View style={container}>
        <Header
          Name={'Planning'}
          Icon={(require('./../add.png'))}
          Page={(Actions.addPlannings)}
        />

        <View style={mainContainer}>

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
    // alignItems: 'center',
    backgroundColor: 'beige'
  }
};

const mapStateToProps = state => {
  const plannings = _.map(state.plannings, (val, uid) => {
    return { ...val, uid };
  });

  return {plannings};
}

export default connect(mapStateToProps, { planningsFetch })(Plannings);
