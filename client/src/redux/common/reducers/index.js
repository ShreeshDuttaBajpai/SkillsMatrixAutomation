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
  data:[],
  oldData:{},
  newData:'',
  editopen:'',
  team:'',
  name:'',
  chartData:{},
  firstCol:'',
  secondCol:'',
  authSuccess: false,
  openForm: false,
  getdata: '',
  editForm:false,
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
      console.log(action.payload)
      return {...state,team:action.payload.map(val => val.team),
        firstCol:action.payload[0].team
      }
    case types.FETCH_NAME:
      return {...state,name: action.payload.map(val => val.name),
        secondCol:(action.payload[0].name)}
    case types.FETCH_DATA:
      return {...state, chartData:{
        labels: action.payload.labelset,
        datasets: [
          {
            label: 'Total Tickets ',
            data: action.payload.dataset1,
            borderColor: [
              'rgb(26, 230, 43)',
              'rgb(243, 27, 27)',
              'rgb(247, 180, 36)'
            ],
            backgroundColor: [
              'rgb(26,230,43,0.8)',
              'rgba(243,27,27,0.8)',
              'rgb(247, 180, 36,0.8)'
            ]
          }
        ]
      }}
    case types.HANDLECHANGE_FIRST:
      return {...state, firstCol:action.payload}
      case types.HANDLECHANGE_SEC:
        return {...state, secondCol:action.payload}
    
    default: return state
  }
};

export const tableUser = (state = initialState, action) => {
   switch (action.type) {
     case types.TableDel:
       return {
         ...state,
         data: prev =>
           prev.filter(obj => obj.ticket_no !== action.payload.ticket_no)
       };

     case types.TableUpd:
       return { ...state, data: [action.payload] };

     case types.OPEN:
       // console.log(openForm);
       return {
         ...state,
         openForm: !action.payload
       };

     case types.EDIT_OPEN:
       return {
         ...state,
         editForm: !action.payload
       };

     default:
       return state;
   }
};
