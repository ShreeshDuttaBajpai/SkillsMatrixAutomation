import { GetSkillMatrixAPI } from "../../services/SkillMatrixTableService/SkillMatrixTableService";

export const getSkillsMatrixTableList = async () => {
    const result = await GetSkillMatrixAPI();
    console.log(result);
    return result;
};
