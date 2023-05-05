import { connect } from "react-redux";
import SkillMatrixComponent from "./SkillMatrixComponent";

const mapStateToProps = state => {
    // return { skillMatrixData: state.skillMatrixOps.skillMatrixData || [] };
    return {
        skillMatrixData: state.skillMatrixOps.skillMatrixData || [],
        teams: state.skillMatrixOps.teams || [],
        categories: state.skillMatrixOps.categories || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
    };
};

const SkillMatrixContainer = connect(mapStateToProps)(SkillMatrixComponent);
export default SkillMatrixContainer;
