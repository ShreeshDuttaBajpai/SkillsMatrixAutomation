import * as types from 'rootpath/redux/common/constants/ActionTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let tokenData = cookies.get('my_cookie');

const initialState = {
  apiResponse: 0,
  resContent: '',
  userToken: tokenData
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
    case types.RUN_FUNCTION:
      return {
        emp_id: json.employeeId,
        emp_name: json.displayName,
        emp_designation: json.jobTitle,
        emp_firstname:json.givenName
      };
    default:
      return state;
  }
};