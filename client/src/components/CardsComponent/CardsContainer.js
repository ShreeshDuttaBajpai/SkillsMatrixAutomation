import { connect } from "react-redux";
import { getClientsList, getClientsTeamsList } from "../CardsComponent/CardsComponentFunction";
import { fetchClientTeams, fetchClients } from "../../redux/common/actions";
import CardsComponent from "./CardsComponent";
import { getClient } from "../../redux/common/actions";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients,
    teams: state.skillMatrixOps.teams,
  });

  const mapDispatchToProps =  dispatch =>({
    fetchClientTeamsList: async clientId => {
        const teams = await getClientsTeamsList(clientId);
        console.log(teams);
        dispatch(fetchClientTeams(teams));
    },
    getClient:async(client)=>{
      dispatch(getClient(client))
    }
  })

  const CardsContainer=connect(mapStateToProps,mapDispatchToProps)(CardsComponent);

export default CardsContainer;