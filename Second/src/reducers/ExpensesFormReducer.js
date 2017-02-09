import {
  EXPENSES_UPDATE
} from './../actions/types';

const INITIAL_STATE = {
  date: '',
  category: '',
  amount: '',
  note: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSES_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value};
    default:
     return state;
  }
};
