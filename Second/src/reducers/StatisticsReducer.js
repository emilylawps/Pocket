import {
  EXPENSES_STATISTICS_FETCH_SUCCESS,
  PLANNINGS_STATISTICS_FETCH_SUCCESS
} from './../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSES_STATISTICS_FETCH_SUCCESS:
      return action.payload;
    case PLANNINGS_STATISTICS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
