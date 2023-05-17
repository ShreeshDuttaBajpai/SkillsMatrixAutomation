import { connect } from "react-redux";
import ClientsCard from "./ClientsCard";
import {
    getCategoryList,
    getClientsList,
    getClientsTeamsList,
    getEmployeeList
} from "../CardsComponent/CardsComponentFunction";
import { getEmp } from "../../redux/common/actions";
import {
    fetchCategory,
    setClientTeams,
    setCategories,
    setClients
} from "../../redux/common/actions";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients || [],
    categories: state.skillMatrixOps.categories || []
});

const mapDispatchToProps = dispatch => ({
    fetchClientList: async () => {
        const clients = await getClientsList();
        dispatch(setClients(clients));
    },
    fetchCategoryList: async () => {
        const categories = await getCategoryList();
        dispatch(setCategories(categories));
    },
    fetchTeamList: async id => {
        const team = await getClientsTeamsList(id);
        dispatch(setClientTeams(team));
    }
});

const ClientsCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientsCard);

export default ClientsCardContainer;
