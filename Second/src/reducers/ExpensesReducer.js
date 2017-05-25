import {
  EXPENSES_FETCH_SUCCESS
} from './../actions/types';

import { REHYDRATE } from 'redux-persist/constants'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSES_FETCH_SUCCESS:
      return (
        action.payload
        // console.log('date')
      );
    case REHYDRATE:
      var incoming = action.payload;
      if(incoming){
        return { ...state, ...incoming }
      } else {
        return state;
      };
    default:
      return state;
  }
};
