export const handleEmployeeScoreChange = (
    event,
    subCatId,
    employeeScoringArr,
    setEmployeeScoringArr,
    setEmployeeSubCategoryScore
) => {
    console.log(employeeScoringArr);
    const updatedScoringArr = employeeScoringArr;
    if (updatedScoringArr.length > 0) {
        const isExisted = updatedScoringArr.findIndex(
            score => score.subCategoryId === subCatId
        );
        if (isExisted > -1) {
            updatedScoringArr[isExisted].employeeScore = event.target.value;
            // setEmployeeScoringArr(updatedScoringArr);
        } else {
            updatedScoringArr.push({
                subCategoryId: subCatId,
                employeeScore: event.target.value
            });
            // setEmployeeScoringArr(updatedScoringArr);
        }
    } else {
        updatedScoringArr.push({
            subCategoryId: subCatId,
            employeeScore: event.target.value
        });
        // setEmployeeScoringArr(updatedScoringArr);
    }
    setEmployeeScoringArr(updatedScoringArr);
    setEmployeeSubCategoryScore(
        updatedScoringArr.find(score => score.subCategoryId === subCatId)
            .employeeScore
    );
};
