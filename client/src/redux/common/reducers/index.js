import * as types from "rootpath/redux/common/constants/ActionTypes";
import Cookies from "universal-cookie";
import { userToken } from "../actions";
import jwt_decode from "jwt-decode";
// import jwt_decode from 'jwt-decode';

const cookies = new Cookies();
let tokenData = cookies.get("my_cookie");
const userName = tokenData ? jwt_decode(tokenData).Emp_name : "";
console.log(userName);

const skillMatrixState = {
    clients: [],
    teams: [],
    category:[],
    subcategory:[],
    client:{}
};


export const skillMatrixOps = (state = skillMatrixState, action) => {
    switch (action.type) {
        case types.FETCH_CLIENTS:
            return { ...state, clients: action.payload };
        case types.FETCH_CLIENT_TEAMS:
            return { ...state, teams: action.payload };
        case types.POST_TEAMS:
            return{...state, teams:action.payload}
        case types.FETCH_CATEGORY:
            return{...state, category:action.payload}
            case types.FETCH_SUBCATEGORY:
                return{...state, subcategory:action.payload}
        case types.CLIENT:
            return{...state, client:action.payload}
            case types.POST_SUBCATEGORY:
                return{...state, subcategory:action.payload}
        default:
            return state;
    }
};
