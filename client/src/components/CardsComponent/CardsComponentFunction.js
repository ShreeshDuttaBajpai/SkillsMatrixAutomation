import {
    CategoryListApi,
    SubCategoryListApi
} from "../../services/CategoryService/CategoryService";
import { ClientTeamsApi } from "../../services/ClientService/ClientService";
import { EmpListApi } from "../../services/EmployeeService/EmployeeService";
import { ClientListApi } from "../../services/MasterService/MasterService";

export const getClientsList = async () => {
    const result = await ClientListApi();
    console.log(result);
    return result;
};

export const getClientsTeamsList = async clientId => {
    console.log(clientId);
    const result = await ClientTeamsApi(clientId);
    console.log(result);
    return result;
};

export const getCategoryList = async () => {
    const result = await CategoryListApi();
    console.log(result);
    return result;
};

export const getSubCategoryList = async catId => {
    console.log(catId);
    const result = await SubCategoryListApi(catId);
    console.log(result);
    return result;
};

export const getEmployeeList = async teamId => {
    console.log(teamId);
    const result = await EmpListApi(teamId);
    console.log(result);
    return result;
};
