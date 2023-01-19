import { Bar, Pie } from "react-chartjs-2";
 import React from "react";
import css from "../ChartsComponent/Chart.css"
import { useEffect ,useState } from "react";
import axios from "axios";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
const options = {
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  scales: {
        x: {
            ticks: {
                font: {
                    size: 20 //this change the font size
                      ,weight: 'bold'
                }
            }
        },
         y: {
            ticks: {
                font: {
                    size: 18 //this change the font size
                }
            }
        }
    },
  // responsive :true,
  plugins: {
    legend: {
      position: 'top',
      display: false

    },
    title: {
      display: true,
      text: 'Data of the User',
      font: {
        size: 24
      }
    }
  }
};


const Horizontalchart = ()=>{

    const [team, setTeam] = useState();
    const[name,setName]=useState();
    const [firstCol, setFirstCol] = useState();
    const [secondCol, setSecondCol] = useState()
    const [data, setData] = useState({})
useEffect(()=>{
    const fetchTeam=async ()=>{
        const url = `https://localhost:7040/api/User/Team`;
        axios.get(url).then(res=>{
            console.log(res.data);
            setTeam(()=>res.data.map((val)=>val.team))
            setFirstCol(res.data[0].team)
        })
    }
    fetchTeam();

    const fetchName=async()=>{
        const url = `https://localhost:7040/api/User/Name`;
        axios.get(url).then(res=>{
            console.log(res.data);
            setName(()=>res.data.map((val)=>val.name))
            setSecondCol(res.data[0].name);
        })
    }
       fetchName();
},[])




    useEffect(()=>{
        const fetchdata=async ()=>{
            const url = `https://localhost:7040/api/Charts/${firstCol}/${secondCol}`;
            //  const url = 'https://jsonplaceholder.typicode.com/comments';
            const labelset=[];
            const dataset1=[];
            // const dataset2=[];
            await fetch(url).then((data)=>{
                console.log("api data",data)
                const res =data.json();
                return res
            }).then((res)=>{
                console.log("ressss",res)
                for(const val of res ){
                    dataset1.push(val.valcount);
                    // dataset2.push(val.postId)
                    labelset.push(val.status)
                }
                setData({
                  labels: labelset,
                  datasets: [
                    {
                      label: 'Total Tickets ',
                      data: dataset1,
                      borderColor: [
                        'rgb(26, 230, 43)',
                        'rgb(243, 27, 27)',
                        'rgb(247, 180, 36)'
                      ],
                      backgroundColor: [
                        'rgb(26,230,43,0.5)',
                        'rgba(243,27,27,0.5)',
                        'rgb(247, 180, 36,0.5)'
                      ]
                    }
                    // {
                    //   label: 'Datasets ID',
                    //   data: dataset2,
                    //   borderColor: 'rgb(53,162,235)',
                    //   backgroundColor: 'rgb(53,162,235,0.5)'
                    // }
                  ]
                });

                console.log('arrData', dataset1);
            }).catch(e=>{
                console.log("error",e)
            })
        }
        firstCol && secondCol && fetchdata();
    },[firstCol,secondCol])
    return (
      <div className={css.tab}>
        <h2>Bar Chart</h2>
        <div className={css.heads}>
          <select
            // type="number"
            id="Team"
            placeholder="Team"
            required
            // defaultValue={props.team ? props.team : ''}
            onChange={e => {
              setFirstCol(e.target.value);
            }}
            value={firstCol && firstCol}
          >
            {team &&
              team.map((val, index) => {
                return <option key={index}>{val}</option>;
              })}
          </select>
          <select
            id="Name"
            value={secondCol && secondCol}
            required
            // placeholder="Ticket Type"
            // defaultValue={props.tickettype ? props.tickettype : ''}
            onChange={e => {
              setSecondCol(e.target.value);
            }}
          >
            {name &&
              name.map((val, index) => {
                return <option key={index}>{val}</option>;
              })}
          </select>
        </div>
        <div className={css.app} >
          {/* <div className={css.btn}>
            <button className={css.complete} />
            <h6>=Completed</h6>
            <button className={css.incomplete} />
            <h6>=Incomplete</h6>
            <button className={css.inprogress} />
            <h6>=Inprogress</h6>
          </div> */}
          {/* <div className={css.chart}> */}
            <Bar data={data} options={options} />
          {/* </div> */}
        </div>
      </div>
    );

}
export default Horizontalchart;