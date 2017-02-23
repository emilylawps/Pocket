import {
  EXPENSES_UPDATE,
  EXPENSES_CREATE,
  EXPENSES_SAVE_SUCCESS,
  EXPENSES_CLEAR
} from './../actions/types';

const INITIAL_STATE = {
  // date: '',
  category: '',
  amount: '',
  notes: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSES_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value};
    case EXPENSES_CREATE:
      return INITIAL_STATE;
    case EXPENSES_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EXPENSES_CLEAR:
      return INITIAL_STATE;
    default:
     return state;
  }
};
