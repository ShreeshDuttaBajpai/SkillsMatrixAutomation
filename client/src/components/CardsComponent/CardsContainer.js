import { connect } from "react-redux";
import {
    getClientsList,
    getClientsTeamsList
} from "../CardsComponent/CardsComponentFunction";
import {
    fetchClientTeams,
    fetchClients,
    fetchEmp,
    getCategory,
    setClientTeams
} from "../../redux/common/actions";
import CardsComponent from "./CardsComponent";
import { getClient } from "../../redux/common/actions";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients,
    teams: state.skillMatrixOps.teams
});

const mapDispatchToProps = dispatch => {
    return {
        fetchClientTeamsList: async clientId => {
            const teams = await getClientsTeamsList(clientId);
            console.log(teams);
            dispatch(setClientTeams(teams));
        },
        getClient: async client => {
            dispatch(getClient(client));
        },
        getCategory: async cat => {
            dispatch(getCategory(cat))
        },
        getEmp: async e => {
            dispatch(fetchEmp(e))
        }
    };
};

const CardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsComponent);

export default CardsContainer;
