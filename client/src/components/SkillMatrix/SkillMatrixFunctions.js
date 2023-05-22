import { EmployeeScoresApi } from "../../services/ScoreService/ScoreService";

export const getEmployeeScoresList = async employeeId => {
    const result = await EmployeeScoresApi(employeeId);
    return result;
};