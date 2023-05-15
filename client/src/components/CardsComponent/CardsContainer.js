import { connect } from "react-redux";
import {
    getClientsList,
    getClientsTeamsList,
    getEmployeeList
} from "../CardsComponent/CardsComponentFunction";
import {
    fetchClientTeams,
    fetchClients,
    fetchEmp,
    getCategory,
    getEmpList,
    setClientTeams
} from "../../redux/common/actions";
import CardsComponent from "./CardsComponent";
import { getClient } from "../../redux/common/actions";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients,
    teams: state.skillMatrixOps.teams,
    employee: state.skillMatrixOps.employee
});

const mapDispatchToProps = dispatch => {
    return {
        fetchClientTeamsList: async clientId => {
            const teams = await getClientsTeamsList(clientId);
            console.log(teams);
            dispatch(setClientTeams(teams));
        },
        fetchEmplist: async teamid => {
            const emps = await getEmployeeList(teamid);
            console.log(emps)
            dispatch(getEmpList(emps))
        },
        getClient: async client => {
            dispatch(getClient(client));
        },
        getCategory: async cat => {
            dispatch(getCategory(cat));
        },
        getEmp: async e => {
            dispatch(fetchEmp(e));
        }
    };
};

const CardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsComponent);

export default CardsContainer;
