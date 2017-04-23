import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PLANNINGS_UPDATE,
  PLANNINGS_CREATE,
  PLANNINGS_FETCH_SUCCESS,
  PLANNINGS_SAVE_SUCCESS,
  PLANNINGS_CLEAR
 } from './types';

export const planningsUpdate = ({ prop, value }) => {
  return {
    type: PLANNINGS_UPDATE,
    payload: { prop, value }
  };
};


export const planningsCreate = ({ date, category, amount, notes, month }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plannings`)
      .push({ date, category, amount, notes, month })
      .then(() => {
        dispatch({ type: PLANNINGS_CREATE});
        Actions.pop();
        // JSON.stringify(month);
      });
  };
};

export const planningsFetch = (month) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plannings`)
      .orderByChild('month')
      .equalTo(month)
      .on('value', function(snap) {
        dispatch({ type: PLANNINGS_FETCH_SUCCESS, payload: snap.val() });
        // console.log(month, snap.val())
      });
  };
};

export const planningsSave = ({ date, category, amount, notes, month, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plannings/${uid}`)
    .set({ date, category, amount, notes, month })
    .then(() => {
      dispatch({ type: PLANNINGS_SAVE_SUCCESS });
      Actions.pop();
    });
  };
};

export const planningsDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/plannings/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};

export const planningsClear = () => {
  return ({
    type: PLANNINGS_CLEAR
  });
};
