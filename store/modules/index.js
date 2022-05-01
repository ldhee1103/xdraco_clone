import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import listOption from './listOption';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({ listOption })(state, action);
};

export default reducer;
