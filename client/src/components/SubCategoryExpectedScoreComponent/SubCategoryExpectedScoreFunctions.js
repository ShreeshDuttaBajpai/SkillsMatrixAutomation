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
            // setExpectedScoreMappings(updatedScoreMapping);
        } else {
            updatedScoreMapping.push({
                subCategoryId: subCatId,
                expectedClientScore: Number(event.target.value)
            });
            // setExpectedScoreMappings(updatedScoreMapping);
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
