import { getApi } from "../baseApiService";

export const GetSkillMatrixAPI = async () => {
    const baseURL = "https://localhost:44325/SkillsMatrixJoinTables";
    const response = await getApi(baseURL)
        .then(res => {
            if (res && res.data) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    console.log(response);
    return response;
};
