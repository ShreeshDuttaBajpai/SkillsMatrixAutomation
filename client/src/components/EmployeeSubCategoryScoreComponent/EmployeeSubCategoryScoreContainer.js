import { connect } from "react-redux";
import EmployeeSubCategoryScoreComponent from "./EmployeeSubCategoryScoreComponent";
import { setEmployeeScores } from "../../redux/common/actions";

const mapStateToProps = state => {
    return { employeeScores: state.skillMatrixOps.employeeScores || [] };
};

const mapDispatchToProps = dispatch => {
    return {
        setExpectedScores: async scores => {
            dispatch(setEmployeeScores(scores));
        }
    };
};

const EmployeeSubCategoryScoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeSubCategoryScoreComponent);
export default EmployeeSubCategoryScoreContainer;
