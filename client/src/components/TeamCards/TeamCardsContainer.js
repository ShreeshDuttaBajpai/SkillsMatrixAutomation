
import TeamCards from "./TeamCards";
import { getClientsList, getClientsTeamsList, getEmployeeList } from "../CardsComponent/CardsComponentFunction";
import { getEmp, getEmpList, setClientTeams, setClients } from "../../redux/common/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
     clients: state.skillMatrixOps.clients,
     teams: state.skillMatrixOps.teams,
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
});

const TeamCardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamCards);

export default TeamCardsContainer;