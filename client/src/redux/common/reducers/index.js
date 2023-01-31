import * as types from 'rootpath/redux/common/constants/ActionTypes';
import Cookies from 'universal-cookie';

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
  data:[],
  oldData:{},
  newData:'',
  editopen:'',
  team:'',
  chartData:{},
  firstCol:'',
  secondcol:'',
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

export const authUser = (state = initialState, action) => {
   switch (action.type)
  {
    case types.MY_DATA:
    return {
      ...state,
      myData: {
      emp_id: action.payload.employeeId,
      emp_name: action.payload.displayName,
      emp_designation: action.payload.jobTitle,
      emp_firstname: action.payload.givenName
    }}
    case types.AUTH_SUCCESS:
    return {
      ...state,
      authSuccess: {
      authSuccess : true
    }}
    case types.REVIEW_DEL:
      return {...state,data:(prev =>
        prev.filter(obj => obj.ticket_no !== action.payload.ticket_no))}
    case types.REVIEW_UPD:
      return {...state,data:([action.payload])}
      case types.OLD_DATA:
        return{...state,oldData:rows[0]}
    case types.FETCH_TEAM:
      // return {...state,team:}
    default: return state
  }
};

