import {
    SubCategoryCategoryListApi,
    TeamEmployeesListApi
} from "../../services/MasterService/MasterService";

import { PostEmployeeScore } from "../../services/EmployeeScoreService/EmployeeScoreService";
import { EmployeeScoresApi } from "../../services/ScoreService/ScoreService";
export const getTeamEmployeesList = async teamId => {
    const result = await TeamEmployeesListApi(teamId);
    return result;
};

export const getSubCategoriesList = async categoryId => {
    const result = await SubCategoryCategoryListApi(categoryId);
    return result;
};
export const getEmployeeScoresList = async employeeId => {
    const result = await EmployeeScoresApi(employeeId);
    return result;
};

export const handleEmployeeScoreChange = (
  event,
  subCatId,
  employeeScoringArr,
  setEmployeeScoringArr,
  empId
) => {
  const updatedScoringArr = employeeScoringArr.map((score) => ({ ...score }));

  const existingScoreIndex = updatedScoringArr.findIndex(
    (score) =>
      score.subCategoryId === subCatId && score.employeeId === empId
  );

  const employeeScore = parseInt(event.target.value, 10); 

  if (existingScoreIndex !== -1) {
    updatedScoringArr[existingScoreIndex].employeeScore = employeeScore;
  } else {
    updatedScoringArr.push({
      employeeId: empId,
      subCategoryId: subCatId,
      employeeScore: employeeScore,
    });
  }

  setEmployeeScoringArr(updatedScoringArr);
};

export const handleScoreSave = async (employeeScoringArr) => {
     
    const postobj = {scores:employeeScoringArr}
    await PostEmployeeScore(postobj);
};