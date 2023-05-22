import { connect } from "react-redux";
import { getEmployeeScoresList, getSkillsMatrixTableList } from "./SkillMatrixFunctions";
import SkillMatrixComponent from "./SkillMatrixComponent";
import { setCategories, setEmployeeScores, setSkillMatrixData, setSubCategories } from "../../redux/common/actions";
import { getCategoriesList } from "../ExpectedScoreMappingComponent/ExpectedScoreMappingFunctions";
import { getSubCategoriesList } from "../AccordionCategoriesComponent/AccordionCategoriesFunctions";

const mapStateToProps = state => {
    return {
        skillMatrixData: state.skillMatrixOps.skillMatrixData || [],
        teams: state.skillMatrixOps.teams || [],
        categories: state.skillMatrixOps.categories || [],
        subCategories: state.skillMatrixOps.subCategories || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || [],
        employeeScores: state.skillMatrixOps.employeeScores || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSkillMatrixTable: async () => {
            const skillsMatrixTable = await getSkillsMatrixTableList();
            dispatch(setSkillMatrixData(skillsMatrixTable));
        },
        fetchCategoriesList: async () => {
            const categories = await getCategoriesList();
            dispatch(setCategories(categories));
        },
        fetchSubCategoriesList: async () => {
            const subCategories = await getSubCategoriesList();
            dispatch(setSubCategories(subCategories));
        },
        fetchEmployeeScore: async (teamid) => {
            const score = await getEmployeeScoresList(teamid);
            dispatch(setEmployeeScores(score))
        }
    };
};

const SkillMatrixContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillMatrixComponent);
export default SkillMatrixContainer;
