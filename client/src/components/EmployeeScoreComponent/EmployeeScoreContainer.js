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
        clients: state.skillMatrixOps.clients || [],
        teams: state.skillMatrixOps.teams || [],
        employees: state.skillMatrixOps.teamEmployees || [],
        categories: state.skillMatrixOps.categories || [],
        subCategories: state.skillMatrixOps.subCategories || [],
        employeeScores: state.skillMatrixOps.employeeScores || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchClientList: async () => {
            const clients = await getClientsList();
            dispatch(setClients(clients));
        },
        fetchClientTeamsList: async clientId => {
            const teams = await getClientsTeamsList(clientId);
            dispatch(setClientTeams(teams));
        },
        fetchTeamEmployeesList: async teamId => {
            const employees = await getTeamEmployeesList(teamId);
            dispatch(setTeamEmployees(employees));
        },
        fetchCategoriesList: async () => {
            const categories = await getCategoriesList();
            dispatch(setCategories(categories));
        },
        fetchSubCategoriesList: async categoryId => {
            const subCategories = await getSubCategoriesList(categoryId);
            dispatch(setSubCategories(subCategories));
        },
        fetchEmployeeScores: async employeeId => {
            const employeeScores = await getEmployeeScoresList(employeeId);
            dispatch(setEmployeeScores(employeeScores));
        },
        setExpectedScores: async scores => {
            dispatch(setEmployeeScores(scores));
        }
    };
};

const EmployeeScoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeScoreComponent);
export default EmployeeScoreContainer;
