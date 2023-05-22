import { connect } from "react-redux";
import EmployeeScoreComponent from "./EmployeeScoreComponent";
import {
    getCategoriesList,
    getClientsList,
    getClientsTeamsList
} from "../ExpectedScoreMappingComponent/ExpectedScoreMappingFunctions";
import {
    setCategories,
    setClientTeams,
    setClients,
    setEmployeeScores,
    setExpectedScoreMappings,
    setSubCategories,
    setTeamEmployees
} from "../../redux/common/actions";
import {
    getEmployeeScoresList,
    getSubCategoriesList,
    getTeamEmployeesList
} from "./EmployeeScoreFunctions";

const mapStateToProps = state => {
    return {
        employeeScores: state.skillMatrixOps.employeeScores || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEmployeeScore: async (teamid) => {
            const score = await getEmployeeScoresList(teamid);
            dispatch(setEmployeeScores(score))
        },
        setExpectedScores: async scores => {
            dispatch(setEmployeeScores(scores));
        },
        setExpectedScoreMappings: scoringData => {
            dispatch(setExpectedScoreMappings(scoringData));
        }
    };
};

const EmployeeScoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeScoreComponent);
export default EmployeeScoreContainer;
