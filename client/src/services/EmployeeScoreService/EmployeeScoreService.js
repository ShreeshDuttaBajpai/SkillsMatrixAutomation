import { postApi } from "../baseApiService";

export const PostEmployeeScore = async employeeScoringObject => {
    const baseURL = "https://localhost:44325/PostSkillMatrix";
    await postApi(baseURL, employeeScoringObject)
        .then(() => {
            console.log("Data inserted successfully");
            alert("Posted Successfully!!!");
        })
        .catch(error => {
            console.log(error);
        });
};
