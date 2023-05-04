import { SubCategoryListApi } from "../../services/MasterService/MasterService";

export const getSubCategoriesList = async () => {
    const result = await SubCategoryListApi();
    console.log(result);
    return result;
};
export const handleExpectedScoreChange = (
    event,
    subCatId,
    expectedScoreMappings,
    setExpectedScoreMappings
) => {
    console.log(expectedScoreMappings);
    const updatedScoreMapping = expectedScoreMappings;
    if (updatedScoreMapping.length > 0) {
        const isExisted = updatedScoreMapping.findIndex(
            score => score.subCategoryId === subCatId
        );
        if (isExisted > -1) {
            updatedScoreMapping[isExisted].expectedClientScore =
                event.target.value;
            setExpectedScoreMappings(updatedScoreMapping);
        } else {
            updatedScoreMapping.push({
                subCategoryId: subCatId,
                expectedClientScore: event.target.value
            });
            setExpectedScoreMappings(updatedScoreMapping);
        }
    } else {
        updatedScoreMapping.push({
            subCategoryId: subCatId,
            expectedClientScore: event.target.value
        });
        setExpectedScoreMappings(updatedScoreMapping);
    }
};
