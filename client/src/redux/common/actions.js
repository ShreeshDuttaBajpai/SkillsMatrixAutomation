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
