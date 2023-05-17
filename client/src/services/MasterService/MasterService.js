import { getApi } from "../baseApiService";

export const ClientListApi = async () => {
    const baseURL = "https://localhost:44325/clientmaster";
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data.length > 0) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const ClientTeamsApi = async clientId => {
    const baseURL = `https://localhost:44325/teamclients?ClientId=${clientId}`;
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data.length > 0) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const CategoryListApi = async () => {
    const baseURL = "https://localhost:44325/categorymaster";
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data.length > 0) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const SubCategoryListApi = async () => {
    const baseURL = "https://localhost:44325/SubCategoryMaster";
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data.length > 0) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const SubCategoryCategoryListApi = async categoryId => {
    const baseURL = `https://localhost:44325/SubCategoryAndCategoryMaster?CategoryId=${categoryId}`;
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data.length > 0) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const TeamEmployeesListApi = async teamId => {
    const baseURL = `https://localhost:44325/EmployeeDetailsTeamWise?TeamId=${teamId}`;
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data.length > 0) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};
