import {
  EXPENSES_UPDATE
} from './types';

export const expensesUpdate = ({ prop, value }) => {
  return {
    type: EXPENSES_UPDATE,
    payload: { prop, value }
  };
};
