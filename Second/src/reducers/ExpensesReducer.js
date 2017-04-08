import {
  EXPENSES_FETCH_SUCCESS
} from './../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSES_FETCH_SUCCESS:
      return (
        action.payload
        // console.log('date')
      );
    default:
      return state;
  }
};
