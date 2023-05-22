import { EmployeeScoresApi } from "../../services/ScoreService/ScoreService";
import { GetSkillMatrixAPI } from "../../services/SkillMatrixTableService/SkillMatrixTableService";

export const getSkillsMatrixTableList = async () => {
    const result = await GetSkillMatrixAPI();
    console.log(result);
    return result;
};

export const getEmployeeScoresList = async teamId => {
    const result = await EmployeeScoresApi(teamId);
    return result;
};
