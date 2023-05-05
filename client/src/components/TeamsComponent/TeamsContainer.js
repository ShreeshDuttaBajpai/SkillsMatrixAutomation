import { connect } from "react-redux";
import { TeamPostApi } from "../../services/ClientService/ClientService";
import { postTeams } from "../../redux/common/actions";
import TeamsComponent from "./TeamsComponent";

const mapStateToProps = state => ({
    teams: state.skillMatrixOps.teams,
  });

  const mapDispatchToProps =  dispatch =>({
    postTeam : async (team) => {
        const teams=await TeamPostApi(team)
        dispatch(postTeams(teams))
    }
  })

  const TeamsContainer=connect(mapStateToProps,mapDispatchToProps)(TeamsComponent);

export default TeamsContainer;