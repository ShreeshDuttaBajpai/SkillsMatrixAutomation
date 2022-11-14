import * as types from 'rootpath/redux/common/constants/ActionTypes';

export const initGetApiCall = () => ({
  type: types.INIT_GET_API_CALL
});

export const refreshData = payload => ({
  type: types.REFRESH_DATA,
  payload
});
