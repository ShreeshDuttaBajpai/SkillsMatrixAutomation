import { connect } from "react-redux";
import { getSkillsMatrixTableList } from "./SkillMatrixFunctions";
import SkillMatrixComponent from "./SkillMatrixComponent";
import { setSkillMatrixData } from "../../redux/common/actions";

const mapStateToProps = state => {
    return {
        skillMatrixData: state.skillMatrixOps.skillMatrixData || [],
        teams: state.skillMatrixOps.teams || [],
        categories: state.skillMatrixOps.categories || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSkillMatrixTable: async () => {
            const skillsMatrixTable = await getSkillsMatrixTableList();
            dispatch(setSkillMatrixData(skillsMatrixTable));
        }
    };
};

const SkillMatrixContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillMatrixComponent);
export default SkillMatrixContainer;
