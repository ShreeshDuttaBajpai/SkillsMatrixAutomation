import * as types from 'rootpath/redux/common/constants/ActionTypes';

export const initGetApiCall = () => ({
  type: types.INIT_GET_API_CALL
});

export const refreshData = payload => ({
  type: types.REFRESH_DATA,
  payload
});

export const userToken = payload => ({
  type: types.AUTH_SUCCESS,
  payload
});

export const authSuccess = payload => ({
  type: types.AUTH_SUCCESS,
  payload
});

export const myData = payload => ({
  type: types.MY_DATA,
  payload
});

export const open = payload => ({
  type: types.OPEN,
  payload
});

export const openActions= payload => ({
  type: types.OPEN_ACTIONS,
  payload
});

export const selected= payload => ({
  type: types.SELECTED,
  payload
});

export const data= payload => ({
  type: types.DATA,
  payload
});

export const oldData= payload => ({
  type: types.OLD_DATA,
  payload
});

export const newData= payload => ({
  type: types.NEW_DATA,
  payload
});

export const editopen= payload => ({
  type: types.EDIT_OPEN,
  payload
});