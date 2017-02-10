import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EXPENSES_UPDATE,
  EXPENSES_CREATE,
  EXPENSES_FETCH_SUCCESS
} from './types';

export const expensesUpdate = ({ prop, value }) => {
  return {
    type: EXPENSES_UPDATE,
    payload: { prop, value }
  };
};


export const expensesCreate = ({ date, category, amount, notes }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/expenses`)
      .push({ date, category, amount, notes })
      .then(() => {
        dispatch({ type: EXPENSES_CREATE});
        Actions.pop();
      });
  };
};

export const expensesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/expenses`)
      .on('value', snapshot => {
        dispatch({ type: EXPENSES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
