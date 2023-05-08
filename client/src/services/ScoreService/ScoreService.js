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

// export const GetSkillMatrixData = async () => {
//     const baseURL = "";
//     // https://localhost:44325/SkillsMatrix";
//     const response = await getApi(baseURL)
//         .then(res => {
//             if (res.data.length > 0) return res.data;
//             else return [];
//         })
//         .catch(error => {
//             return error;
//         });
//     console.log(res.data);
//     return response;
// };

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
export const EmployeeScoresApi = async employeeId => {
    const baseURL = `https://localhost:44325/EmployeeScores?employeeId=${employeeId}`;
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
