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
  editopen:''
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
    case types.MY_DATA:
      return  { ...state,myData:{emp_id: json.employeeId,
      emp_name: json.displayName,
      emp_designation: json.jobTitle,
      emp_firstname:json.givenName}}
    case types.REVIEW_DEL:
      return {...state,data:(prev =>
        prev.filter(obj => obj.ticket_no !== oldData.ticket_no))}
    case types.REVIEW_UPD:
      return {...state,data:([...dataUpdate])}
      case types.OLD_DATA:
        return{...state,oldData:rows[0]}

    default:
      return state;
  }
};

// export const authUser = (state = initialState, action) => {
//   switch (action.type) {
//     case types.AUTH_SUCCESS:
//       return action.payload;
//     case types.REFRESH_DATA:
//       return Object.assign({}, state, {
//         resContent: action.payload,
//         userToken:
//       });

//     default:
//       return state;
//   }
// };

// useEffect(() => {
//   const authUser = async () => {
//     try {
//       const decoded = await jwt_decode(userToken);
//       await axios
//         .get(`https://localhost:7040/api/Emp/${decoded.Emp_id}`)
//         .then(res => {
//           if (res.status === 200) {
//             setAuthSuccess(true);
//           } else setAuthSuccess(false);
//         });
//     } catch (error) {
//       setAuthSuccess(false);
//     }
//   };
//   authUser();
// }, [userToken]);
