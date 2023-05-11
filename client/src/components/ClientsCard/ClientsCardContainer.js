import { connect } from "react-redux";
import ClientsCard from "./ClientsCard";
import {
    getCategoryList,
    getClientsList,
    getClientsTeamsList,
    getEmployeeList
} from "../CardsComponent/CardsComponentFunction";
import { fetchCategory, setClientTeams, setClients } from "../../redux/common/actions";
import { getEmp } from "../../redux/common/actions";

const mapStateToProps = state => ({
    // clients: state.skillMatrixOps.clients,
    // category: state.skillMatrixOps.category,
});

const mapDispatchToProps = dispatch => ({
    fetchClientList: async () => {
        const clients = await getClientsList();
        console.log(1);
        dispatch(setClients(clients));
    },
    fetchCategoryList: async () => {
        const category = await getCategoryList();
        console.log(category);
        dispatch(fetchCategory(category));
    },
    fetchTeamList: async(id) => {
        const team = await getClientsTeamsList(id)
        dispatch(setClientTeams(team))
    }
});

const ClientsCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientsCard);

export default ClientsCardContainer;
