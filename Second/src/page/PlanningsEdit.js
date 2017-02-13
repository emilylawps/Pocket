import _ from 'lodash';
import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import PlanningsForm from './PlanningsForm';
import {planningsUpdate, planningsSave, planningsDelete } from './../actions';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import Header from './../components/Header';
import Button from './../components/Button';
import ConfirmDelete from './../components/ConfirmDelete';
// import { Card, CardSection } from './../components';

class PlanningsEdit extends Component {
  state = {showModal: false};

  componentWillMount() {
    _.each(this.props.planning, (value, prop) => {
      this.props.planningsUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { date, category, amount, notes } = this.props;

    this.props.planningsSave({ date, category, amount, notes, uid: this.props.planning.uid });
  }

  onAccept() {
    const {uid} = this.props.planning;

    this.props.planningsDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const {container, mainContainer} = styles;

    return (
      <TouchableWithoutFeedback onPress={()=>dismissKeyboard()}>
        <View style={container}>
          <Header Name={'Edit Plans'} />

          <View style={mainContainer}>
            <PlanningsForm />

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
  const { date, category, amount, notes } = state.addPlannings;

  return { date, category, amount, notes };
};

export default connect (mapStateToProps, {
  planningsUpdate, planningsSave, planningsDelete
})(PlanningsEdit);
