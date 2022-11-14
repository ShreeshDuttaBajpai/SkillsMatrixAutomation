import * as types from 'rootpath/redux/common/constants/ActionTypes';

const initialState = {
  apiResponse: 0,
  resContent: ''
};

export const commonApi = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_GET_API_CALL:
      return action.payload;
    case types.REFRESH_DATA:
      return Object.assign({}, state, {
        resContent: action.payload,
        apiResponse: 1
      });

    default:
      return state;
  }
};
