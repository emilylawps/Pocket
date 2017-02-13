import {
  PLANNINGS_UPDATE,
  PLANNINGS_CREATE,
  PLANNINGS_SAVE_SUCCESS,
  PLANNINGS_CLEAR
} from './../actions/types';

const INITIAL_STATE = {
  date: '',
  category: '',
  amount: '',
  notes: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLANNINGS_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value};
    case PLANNINGS_CREATE:
      return INITIAL_STATE;
    case PLANNINGS_SAVE_SUCCESS:
      return INITIAL_STATE;
    case PLANNINGS_CLEAR:
      return INITIAL_STATE;
    default:
     return state;
  }
};
