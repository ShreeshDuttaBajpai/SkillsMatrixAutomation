import {
    SubCategoryCategoryListApi,
    TeamEmployeesListApi
} from "../../services/MasterService/MasterService";

export const getTeamEmployeesList = async teamId => {
    const result = await TeamEmployeesListApi(teamId);
    console.log(result);
    return result;
};

export const getSubCategoriesList = async categoryId => {
    const result = await SubCategoryCategoryListApi(categoryId);
    console.log(result);
    return result;
};
export const handleEmployeeScoreChange = (
    event,
    subCatId,
    employeeScoringArr,
    setEmployeeScoringArr
) => {
    console.log(employeeScoringArr);
    const updatedScoringArr = employeeScoringArr;
    if (updatedScoringArr.length > 0) {
        const isExisted = updatedScoringArr.findIndex(
            score => score.subCategoryId === subCatId
        );
        if (isExisted > -1) {
            updatedScoringArr[isExisted].employeeScore = event.target.value;
            setEmployeeScoringArr(updatedScoringArr);
        } else {
            updatedScoringArr.push({
                subCategoryId: subCatId,
                employeeScore: event.target.value
            });
            setEmployeeScoringArr(updatedScoringArr);
        }
    } else {
        updatedScoringArr.push({
            subCategoryId: subCatId,
            employeeScore: event.target.value
        });
        setEmployeeScoringArr(updatedScoringArr);
    }
};

export const handleScoreSave = (selectedEmployee, employeeScoringArr) => {
    const employeeScoringObject = {
        employeeId: selectedEmployee,
        scores: employeeScoringArr
    };
    console.log(employeeScoringObject);
};
