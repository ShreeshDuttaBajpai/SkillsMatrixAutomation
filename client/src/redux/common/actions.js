import * as types from 'rootpath/redux/common/constants/ActionTypes';

export const initGetApiCall = () => ({
  type: types.INIT_GET_API_CALL
});

export const refreshData = payload => ({
  type: types.REFRESH_DATA,
  payload
});

export const userToken =() => ({
  type: types.AUTH_SUCCESS,
});

export const authSuccess = () => ({
  type: types.AUTH_SUCCESS,
});

export const myData = () => ({
  type: types.MY_DATA,
});