import {
    CategoryListApi,
    SubCategoryListApi
} from "../../services/CategoryService/CategoryService";
import {
    ClientTeamsApi,
    EditCategorySubcategoriesApi,
    EditClientTeamApi,
    EditTeamEmployeesApi
} from "../../services/ClientService/ClientService";
import { EmpListApi } from "../../services/EmployeeService/EmployeeService";
import { ClientListApi } from "../../services/MasterService/MasterService";

export const getClientsList = async () => {
    const result = await ClientListApi();
    return result;
};

export const getClientsTeamsList = async clientId => {
    const result = await ClientTeamsApi(clientId);
    return result;
};

export const getCategoryList = async () => {
    const result = await CategoryListApi();
    return result;
};

export const getSubCategoryList = async catId => {
    const result = await SubCategoryListApi(catId);
    return result;
};

export const getEmployeeList = async teamId => {
    const result = await EmpListApi(teamId);
    return result;
};

export const handleHeadChange = (e, setEditObj, titleName) => {
    setEditObj(prev => {
        return { ...prev, [titleName]: e.target.value };
    });
};

export const editClientTeams = async editObj => {
    await EditClientTeamApi(editObj);
};

export const editCategorySubcategories = async editObj => {
    await EditCategorySubcategoriesApi(editObj);
};

export const editTeamEmployees = async editObj => {
    await EditTeamEmployeesApi(editObj);
};
