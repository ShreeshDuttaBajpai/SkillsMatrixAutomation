import { combineReducers } from 'redux';
import layout from './layout';
import common from './common';
export const createReducer = () =>
  combineReducers({
    ...layout.Reducers,
    ...common.Reducers
  });
