import { connect } from "react-redux";
import { fetchClients, fetchClientTeams } from "../../redux/common/actions";
import {
    getClientsList,
    getClientsTeamsList
} from "../ClientsComponent/ClientsComponentFunctions";
import ExpectedScoreMappingComponent from "./ExpectedScoreMappingComponent";

const mapStateToProps = state => {
    return {
        clients: state.skillMatrixOps.clients,
        teams: state.skillMatrixOps.teams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchClientList: async () => {
            const clients = await getClientsList();
            console.log(1);
            dispatch(fetchClients(clients));
        },
        fetchClientTeamsList: async clientId => {
            const teams = await getClientsTeamsList(clientId);
            console.log(teams);
            dispatch(fetchClientTeams(teams));
        }
    };
};

const ExpectedScoreMappingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpectedScoreMappingComponent);
export default ExpectedScoreMappingContainer;
