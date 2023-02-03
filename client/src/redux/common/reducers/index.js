import * as types from 'rootpath/redux/common/constants/ActionTypes';
import Cookies from 'universal-cookie';
import { userToken } from '../actions';
import jwt_decode from 'jwt-decode';

const cookies = new Cookies();
let tokenData = cookies.get('my_cookie');
const userName = tokenData ? jwt_decode(tokenData).Emp_name : '';
console.log(userName);

const initialState = {
  apiResponse: 0,
  resContent: '',
  myData:'',
  openActions:'',
  selected:'',
  data:'',
  oldData:'',
  newData:'',
  editopen: '',
  authSuccess: false,
  userToken: tokenData,
  open: false,
  ticketDetails:{
    ticket_no: '',
    client: 'CW',
    team: 'CNS',
    name: userName,
    ticket_type: 'Story',
    story_point: '',
    start_date: '',
    end_date: '',
    hours: 0,
    status: 'Completed',
    code_reviewer: '',
    code_deviation_count: '',
    bug_count: '',
    remarks: ''
  }
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
    
    case types.OPEN:
      return 

    default:
      return state;
  }
};

export const authUser = (state = initialState, action) => {
  switch (action.type)
  {
    case types.MY_DATA:
      console.log(action.payload.displayName)
      alert("Hi")
      return Object.assign({}, state, {
        ...state,
        myData: {
          emp_id: action.payload.employeeId,
          emp_name: action.payload.displayName,
          emp_designation: action.payload.jobTitle,
          emp_firstname: 'Mudit'
        }
      });
    
    case types.AUTH_SUCCESS:
      return {
        ...state,
        authSuccess: action.payload
      }
    case types.TICKET_DETAILS:
      console.log(action.payload.ticketkey+ " "+action.payload.value );
      return {
        ...state,
        ticketDetails: { ...state.ticketDetails,
          [action.payload.ticketkey]: action.payload.value
        }
      }
    case types.OPEN:
      return {
        ...state,
        open: action.payload
      }
    case types.USER_TOKEN:
      return {
        ...state, userToken:''
      };
    default: return state
  }
}