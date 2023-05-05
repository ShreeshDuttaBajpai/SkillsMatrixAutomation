import { connect } from "react-redux";
import {
    setCategories,
    setClients,
    setClientTeams
} from "../../redux/common/actions";
import ExpectedScoreMappingComponent from "./ExpectedScoreMappingComponent";
import {
    getCategoriesList,
    getClientsList,
    getClientsTeamsList
} from "./ExpectedScoreMappingFunctions";

const mapStateToProps = state => {
    return {
        clients: state.skillMatrixOps.clients || [],
        teams: state.skillMatrixOps.teams || [],
        categories: state.skillMatrixOps.categories || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
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
        fetchCategoriesList: async () => {
            const categories = await getCategoriesList();
            dispatch(setCategories(categories));
        }
    };
};

const ExpectedScoreMappingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpectedScoreMappingComponent);
export default ExpectedScoreMappingContainer;
