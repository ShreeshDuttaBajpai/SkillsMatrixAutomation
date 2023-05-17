import { connect } from "react-redux";
import { getSkillsMatrixTableList } from "./SkillMatrixFunctions";
import SkillMatrixComponent from "./SkillMatrixComponent";
import { setCategories, setSkillMatrixData, setSubCategories } from "../../redux/common/actions";
import { getCategoriesList } from "../ExpectedScoreMappingComponent/ExpectedScoreMappingFunctions";
import { getSubCategoriesList } from "../AccordionCategoriesComponent/AccordionCategoriesFunctions";

const mapStateToProps = state => {
    return {
        skillMatrixData: state.skillMatrixOps.skillMatrixData || [],
        teams: state.skillMatrixOps.teams || [],
        categories: state.skillMatrixOps.categories || [],
        subCategories: state.skillMatrixOps.subCategories || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
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
        fetchSubCategoriesList: async categoryId => {
            const subCategories = await getSubCategoriesList(categoryId);
            dispatch(setSubCategories(subCategories));
        },
    };
};

const SkillMatrixContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillMatrixComponent);
export default SkillMatrixContainer;
