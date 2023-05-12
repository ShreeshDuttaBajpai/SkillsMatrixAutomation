import * as types from "rootpath/redux/common/constants/ActionTypes";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

const cookies = new Cookies();
let tokenData = cookies.get("my_cookie");
const userName = tokenData ? jwt_decode(tokenData).Emp_name : "";
console.log(userName);

const skillMatrixState = {
    clients: [],
    teams: [],
    category: [],
    categories: [],
    subCategories: [],
    expectedScoreMappings: [],
    teamEmployees: [],
    skillMatrixData: [],
    employeeScores: [],
    category: [],
    subcategory: [],
    client: {},
    categoryItem:{},
    employee: [],
    empItem: {}

};

export const skillMatrixOps = (state = skillMatrixState, action) => {
    switch (action.type) {
        case types.SET_CLIENTS:
            return { ...state, clients: action.payload };
        case types.SET_CLIENT_TEAMS:
            return { ...state, teams: action.payload };
        case types.SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case types.SET_SUB_CATEGORIES:
            return { ...state, subCategories: action.payload };
        case types.SET_SCORE_MAPPINGS:
            return { ...state, expectedScoreMappings: action.payload };
        case types.SET_TEAM_EMPLOYEES:
            return { ...state, teamEmployees: action.payload };
        case types.SET_SKILL_MATRIX_DATA:
            return { ...state, skillMatrixData: action.payload };
        case types.SET_EMPLOYEE_SCORES:
            return { ...state, employeeScores: action.payload };
        case types.POST_TEAMS:
            return { ...state, teams: action.payload };
        case types.FETCH_CATEGORY:
            return { ...state, category: action.payload };
        case types.FETCH_SUBCATEGORY:
            return { ...state, subcategory: action.payload };
        case types.CLIENT:
            return{...state, client:action.payload}
            case types.POST_SUBCATEGORY:
                return{...state, subcategory:action.payload}
            case types.CATEGORY:
            return { ...state, categoryItem: action.payload };
        case types.GET_EMPLOYEE:
            return { ...state, employee: action.payload };  
        case types.EMPLOYEE:
            return {...state, empItem: action.payload}     
        case types.POST_EMPLOYEE:
            return {...state, employee: action.payload}      
        default:
            return state;
    }
};
