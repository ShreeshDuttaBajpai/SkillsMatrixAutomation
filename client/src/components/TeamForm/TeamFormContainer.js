import { connect } from "react-redux";
import TeamForm from "./TeamForm";
import { TeamPostApi } from "../../services/ClientService/ClientService";
import { postTeams } from "../../redux/common/actions";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients,
    client: state.skillMatrixOps.client,
  });

  const mapDispatchToProps =  dispatch =>({
    postTeam : async (team) => {
      console.log(team)
        const teams=await TeamPostApi(team)
        dispatch(postTeams(teams))
    }
  })

  const TeamFormContainer=connect(mapStateToProps,mapDispatchToProps)(TeamForm);

export default TeamFormContainer;