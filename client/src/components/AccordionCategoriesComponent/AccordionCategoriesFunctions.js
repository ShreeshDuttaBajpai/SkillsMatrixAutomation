import { SubCategoryListApi } from "../../services/MasterService/MasterService";

export const getSubCategoriesList = async () => {
    const result = await SubCategoryListApi();
    return result;
};
export const handleExpectedScoreChange = (
    event,
    subCatId,
    expectedScoreMappings,
    setExpectedScoreMappings
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
            setExpectedScoreMappings(updatedScoreMapping);
        } else {
            updatedScoreMapping.push({
                subCategoryId: subCatId,
                expectedClientScore: Number(event.target.value)
            });
            setExpectedScoreMappings(updatedScoreMapping);
        }
    } else {
        updatedScoreMapping.push({
            subCategoryId: subCatId,
            expectedClientScore: Number(event.target.value)
        });
        setExpectedScoreMappings(updatedScoreMapping);
    }
};
export const getScoreForSubCategoryId = (expectedScoreMappings, subCatId) => {
    const scoreObj = expectedScoreMappings.find(
        score => score.subCategoryId === subCatId
    );
    return scoreObj ? scoreObj.expectedClientScore : 0;
};
