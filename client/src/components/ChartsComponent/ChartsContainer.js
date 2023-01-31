import { connect } from "react-redux";
import { setTeam } from "../../redux/common/actions";
import { Chartteamapi } from "../../services/Charts/ChartService";
import Horizontalchart from "../ChartsComponent/Chart";


const mapStateToProps = (state) => ({
    team:state.authUser.team,
})

const mapDispatchToProps = dispatch =>(
    {
        fetchTeam:async()=>{
            const url = await Chartteamapi.then(res => {
                console.log(res.data);
                dispatch(setTeam(res));
              });
              return url;
        }
    })

const ChartsContainer=connect(mapStateToProps,mapDispatchToProps)(Horizontalchart);
export default ChartsContainer;