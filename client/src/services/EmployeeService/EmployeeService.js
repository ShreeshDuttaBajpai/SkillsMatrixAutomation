import { getApi, postApi } from "../baseApiService";

export const EmpListApi = async teamId => {
    const baseURL = `https://localhost:44325/EmployeeDetailsTeamWise?TeamId=${teamId}`;
    const response = await getApi(baseURL)
        .then(res => {
            if (res && res.data) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const EmpPostApi = async data => {
    const baseURL = "https://localhost:44325/postEmpMaster";
    const response = await postApi(baseURL, data)
        .then(res => {
            alert("Team added successfully!!");
        })
        .catch(error => {
            return error;
        });
    return response;
};