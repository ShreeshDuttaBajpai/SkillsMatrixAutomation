export const handleExpectedScoreChange = (
    event,
    subCatId,
    expectedScoreMappings,
    setExpectedScoreMappings,
    setSubCategoryScore
) => {
    const updatedScoreMapping = expectedScoreMappings;
    if (updatedScoreMapping.length > 0) {
        const isExisted = updatedScoreMapping.findIndex(
            score => score.subCategoryId === subCatId
        );
        if (isExisted > -1) {
            updatedScoreMapping[isExisted].expectedClientScore = Number(
                event.target.value
            );
        } else {
            updatedScoreMapping.push({
                subCategoryId: subCatId,
                expectedClientScore: Number(event.target.value)
            });
        }
    } else {
        updatedScoreMapping.push({
            subCategoryId: subCatId,
            expectedClientScore: Number(event.target.value)
        });
    }
    setExpectedScoreMappings(updatedScoreMapping);
    setSubCategoryScore(
        updatedScoreMapping.find(score => score.subCategoryId === subCatId)
            .expectedClientScore
    );
};

export const handleEmployeeScoreChange = (
    event,
    subCatId,
    fetchEmployeeScores,
    employeeScores,
    setEmployeeScore
) => {
    const updatedScoreMapping = employeeScores;
    if (updatedScoreMapping.length > 0) {
        const isExisted = updatedScoreMapping.findIndex(
            score => score.subCategoryId === subCatId
        );
        if (isExisted > -1) {
            updatedScoreMapping[isExisted].expectedClientScore = Number(
                event.target.value
            );
        } else {
            updatedScoreMapping.push({
                subCategoryId: subCatId,
                expectedClientScore: Number(event.target.value)
            });
        }
    } else {
        updatedScoreMapping.push({
            subCategoryId: subCatId,
            expectedClientScore: Number(event.target.value)
        });
    }
    fetchEmployeeScores(updatedScoreMapping);
    setEmployeeScore(
        updatedScoreMapping.find(score => score.subCategoryId === subCatId)
            .expectedClientScore
    );
};
