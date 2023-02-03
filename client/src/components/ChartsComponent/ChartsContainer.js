import { connect } from "react-redux";
import { fetchData, handleChangeFirst, handleChangeSec, setName, setTeam } from "../../redux/common/actions";
import { Chartapi, Chartnameapi, Chartteamapi } from "../../services/Charts/ChartService";
import Horizontalchart from "../ChartsComponent/Chart";


const mapStateToProps = (state) => ({
    team:state.authUser.team,
    name:state.authUser.name,
    firstCol:state.authUser.firstCol,
    secondCol:state.authUser.secondCol,
    chartData:state.authUser.chartData
})

const mapDispatchToProps = dispatch =>(
    {
        fetchTeam:async()=>{
            const url = await Chartteamapi().then(res => {
                console.log(res.data);
                dispatch(setTeam(res.data));
              });
              return url;
        },
        fetchName:async()=>{
            const url = await Chartnameapi().then(res => {
                console.log(res.data);
                dispatch(setName(res.data))
              });
              return url;
        },
        fetchdata : async(firstCol,secondCol) => {
            const labelset = [];
            const dataset1 = [];
            const url = await Chartapi(`/${firstCol}/${secondCol}`)
              .then(data => {
                console.log('api data', data);
                // const res = data;
                return data;
              })
              .then(res => {
                console.log('ressss', res);
                for (const val of res) {
                  dataset1.push(val.valcount);
                  // dataset2.push(val.postId)
                  labelset.push(val.status);
                }
                const payload = {labelset:labelset,dataset1:dataset1}
                dispatch(fetchData(payload))
                  console.log('arrData', dataset1);
                })  
                .catch(e => {
                  console.log('error', e);
                });
              return url;
        },
        handleChangeFirst: (e) => 
        dispatch(handleChangeFirst(e)),

        handleChangeSec: (e) => 
        dispatch(handleChangeSec(e))
    })

const ChartsContainer=connect(mapStateToProps,mapDispatchToProps)(Horizontalchart);
export default ChartsContainer;