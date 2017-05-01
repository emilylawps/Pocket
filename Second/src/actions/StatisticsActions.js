import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EXPENSES_STATISTICS_FETCH_SUCCESS,
  PLANNINGS_STATISTICS_FETCH_SUCCESS
} from './types';

export const expensesStatisticsFetch = (month) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/expenses`)
      .orderByChild('month')
      .equalTo(month)
      .on('value', function(snap) {
        dispatch({ type: EXPENSES_STATISTICS_FETCH_SUCCESS, payload: snap.val() });
        console.log(month, snap.val())
      });
  };
};

export const planningsStatisticsFetch = (month) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plannings`)
      .orderByChild('month')
      .equalTo(month)
      .on('value', function(snap) {
        dispatch({ type: PLANNINGS_STATISTICS_FETCH_SUCCESS, payload: snap.val() });
        console.log(month, snap.val())
      });
  };
};
