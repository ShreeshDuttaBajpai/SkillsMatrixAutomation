import * as types from 'rootpath/redux/common/constants/ActionTypes';
import Cookies from 'universal-cookie';
// import jwt_decode from 'jwt-decode';

const cookies = new Cookies();
let tokenData = cookies.get('my_cookie');

const initialState = {
  apiResponse: 0,
  resContent: '',
  userToken: tokenData,
  myData:'',
  open:'',
  openActions:'',
  selected:'',
  data:'',
  oldData:'',
  newData:'',
  editopen: '',
  authSuccess: false,

};

// const decoded = await jwt_decode(userToken);

export const commonApi = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_GET_API_CALL:
      return action.payload;
    case types.REFRESH_DATA:
      return Object.assign({}, state, {
        resContent: action.payload,
        apiResponse: 1
      });
    // case types.MY_DATA:
    //   return {
    //     ...state,
    //     myData: {
    //       emp_id: json.employeeId,
    //       emp_name: json.displayName,
    //       emp_designation: json.jobTitle,
    //       emp_firstname:json.givenName}}
    case types.OPEN:
      return 

    default:
      return state;
  }
};

export const authUser = (state = initialState, action) => {
  switch (action.type)
  {
    case types.CONTINUE_WITH_MICROSOFT:
      return {
        ...state,
        authSuccess: true
      }
    case types.MY_DATA:
      return {
        ...state,
        myData: {
          emp_id: action.payload.employeeId,
          emp_name: action.payload.displayName,
          emp_designation: action.payload.jobTitle,
          emp_firstname: action.payload.givenName 
        }
      }
    default: return state
  }
}