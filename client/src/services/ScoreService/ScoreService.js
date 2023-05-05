import { getApi, postApi } from "../baseApiService";

export const PostScoreMappings = async scoreMappings => {
    const baseURL = "https://localhost:44325/PostSubCategoryMapping";
    await postApi(baseURL, scoreMappings)
        .then(() => {
            console.log("Data inserted successfully");
        })
        .catch(error => {
            console.log(error);
        });
};
export const GetSkillMatrixData = async () => {
    const baseURL = "";
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
export const TeamExpectedScoresListApi = async teamId => {
    const baseURL = `https://localhost:44325/GetTeamSubCategoryMapping?teamId=${teamId}`;
    const response = await getApi(baseURL)
        .then(res => {
            if (res.data !== null) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    return response;
};
