import { getApi, postApi } from "../baseApiService";

export const PostScoreMappings = async scoreMappings => {
    const baseURL = "https://localhost:44325/PostSubCategoryMapping";
    await postApi(baseURL, scoreMappings)
        .then(() => {
            console.log("Data inserted successfully");
            window.alert("Data posted successfully!");
        })
        .catch(error => {
            window.alert("Error ocurred, check console!");
            console.log(error);
        });
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
export const EmployeeScoresApi = async teamId => {
    const baseURL = `https://localhost:44325/EmployeeScores?teamId=${teamId}`;
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
