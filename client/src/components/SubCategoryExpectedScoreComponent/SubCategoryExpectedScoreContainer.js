import { connect } from "react-redux";
import SubCategoryExpectedScoreComponent from "./SubCategoryExpectedScoreComponent";
import { setExpectedScoreMappings } from "../../redux/common/actions";

const mapStateToProps = state => {
    return {
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setExpectedScoreMappings: scoringData => {
            dispatch(setExpectedScoreMappings(scoringData));
        }
    };
};

const SubCategoryExpectedScoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubCategoryExpectedScoreComponent);
export default SubCategoryExpectedScoreContainer;
