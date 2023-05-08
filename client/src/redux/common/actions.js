import * as types from "rootpath/redux/common/constants/ActionTypes";

export const initGetApiCall = () => ({
    type: types.INIT_GET_API_CALL
});

export const refreshData = payload => ({
    type: types.REFRESH_DATA,
    payload
});

export const openActions = payload => ({
    type: types.OPEN_ACTIONS,
    payload
});

export const selected = payload => ({
    type: types.SELECTED,
    payload
});

export const openToggle = payload => ({
    type: types.OPEN,
    payload
});

export const setTeam = payload => ({
    type: types.FETCH_TEAM,
    payload
});

export const setName = payload => ({
    type: types.FETCH_NAME,
    payload
});

export const fetchData = payload => ({
    type: types.FETCH_DATA,
    payload
});

export const toggleOpen = payload => ({
    type: types.OPEN,
    payload
});

export const setClients = payload => ({
    type: types.SET_CLIENTS,
    payload
});

export const setClientTeams = payload => ({
    type: types.SET_CLIENT_TEAMS,
    payload
});

export const setCategories = payload => ({
    type: types.SET_CATEGORIES,
    payload
});

export const setSubCategories = payload => ({
    type: types.SET_SUB_CATEGORIES,
    payload
});

export const setExpectedScoreMappings = payload => ({
    type: types.SET_SCORE_MAPPINGS,
    payload
});

export const setTeamEmployees = payload => ({
    type: types.SET_TEAM_EMPLOYEES,
    payload
});

export const setSkillMatrixData = payload => ({
    type: types.SET_SKILL_MATRIX_DATA,
    payload
});
export const setEmployeeScores = payload => ({
    type: types.SET_EMPLOYEE_SCORES,
    payload
});

export const postTeams = payload => ({
    type: types.POST_TEAMS,
    payload
});

export const fetchCategory = payload => ({
    type: types.FETCH_CATEGORY,
    payload
});

export const fetchSubCategory = payload => ({
    type: types.FETCH_SUBCATEGORY,
    payload
});

export const getClient = payload => ({
    type: types.CLIENT,
    payload
});

export const postSubCategory = payload => ({
    type: types.POST_SUBCATEGORY,
    payload
});
