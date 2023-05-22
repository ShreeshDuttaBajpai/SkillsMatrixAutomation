import { getClientsList, getClientsTeamsList, getEmployeeList } from "../CardsComponent/CardsComponentFunction";
import { getEmp, getEmpList, setCategories, setClientTeams, setClients, setEmployeeScores, setExpectedScoreMappings } from "../../redux/common/actions";
import { connect } from "react-redux";
import SkillMatrix from "./SkillMatrix";
import { getCategoriesList, getTeamExpectedScores } from "../ExpectedScoreMappingComponent/ExpectedScoreMappingFunctions";
import { getEmployeeScoresList } from "./SkillMatrixFunctions";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients || [],
    teams: state.skillMatrixOps.teams || [],
    categories: state.skillMatrixOps.categories || [],
    expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || {},
    employee: state.skillMatrixOps.employee || [],
    employeeScores: state.skillMatrixOps.employeeScores || [],
});
const mapDispatchToProps = dispatch => ({
    fetchClientList: async () => {
        const clients = await getClientsList();
        console.log(1);
        dispatch(setClients(clients));
    },
    fetchTeamList: async(id) => {
        const team = await getClientsTeamsList(id)
        dispatch(setClientTeams(team))
    },
    fetchExpectedScore: async teamId => {
        const scores = await getTeamExpectedScores(teamId);
        console.log(scores);
        dispatch(setExpectedScoreMappings(scores));
    },
    fetchCategoriesList: async () => {
        const categories = await getCategoriesList();
        dispatch(setCategories(categories));
    },
    fetchClientTeamsList: async clientId => {
        const teams = await getClientsTeamsList(clientId);
        dispatch(setClientTeams(teams));
    },
    fetchEmplist: async teamid => {
        const emps = await getEmployeeList(teamid);
        console.log(emps)
        dispatch(getEmpList(emps))
    },
    fetchEmployeeScores: async teamId => {
        const employeeScores = await getEmployeeScoresList(teamId);
        dispatch(setEmployeeScores(employeeScores));
    },
});

const SkillMatrixContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillMatrix);

export default SkillMatrixContainer;