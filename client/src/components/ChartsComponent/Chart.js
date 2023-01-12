import { Bar } from "react-chartjs-2";
 import React from "react";
import css from "../ChartsComponent/Chart.css"
import { useEffect ,useState } from "react";
import axios from "axios";
const options ={
    elements:{
        bar:{
            borderWidth:2,
        },
    },
    responsive :true,
    plugins:{
        legend:{
            position:'top',
        },
        title:{
            display:true,
            text:'Data for the Users',
        },
    },
};


const Horizontalchart = ()=>{

const [data, setData] = useState({
    labels :['Sunday','Monday','Tuesday','Wednesday' ,'Thursday'],
    datasets:[
        {
            label:'Datasets 1',
            data:[1,4,3,5,2.5],
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgb(255,99,132,0.5)',
        },
        // {
        //     label:'Datasets 2',
        //     data:[5,2,3.5,1,4.5],
        //     borderColor: 'rgb(53,162,235)',
        //     backgroundColor: 'rgb(53,162,235,0.5)',
        // }
    ]
}
)

    useEffect(()=>{
        const fetchdata=async ()=>{
            const url =`https://localhost:7040/api/Charts/`;
            const labelset=[];
            const dataset1=[];
            // const dataset2=[];
            await axios.get(url).then((data)=>{
                console.log("api data",data)
                const res =data.json();
                return res
            }).then((res)=>{
                console.log("ressss",res)
                for(const val of res ){
                    dataset1.push(val.status);
                    // dataset2.push(val.name)
                    labelset.push(val.name)
                }
                setData({
                  labels: ['CNS','Mobile Team','Partner Service',' Contact' ,'CP'],
                  datasets: [
                    {
                      label: 'Datasets ID',
                      data: dataset1,
                      borderColor: 'rgb(255,99,132)',
                      backgroundColor: 'rgb(255,99,132,0.5)'
                    }
                    // {
                    //   label: 'Datasets ID',
                    //   data: dataset2,
                    //   borderColor: 'rgb(53,162,235)',
                    //   backgroundColor: 'rgb(53,162,235,0.5)'
                    // }
                  ]
                });

                console.log('arrData', dataset1, dataset2);
            }).catch(e=>{
                console.log("error",e)
            })
        }

        fetchdata();
    },[])
    return (
      <div className={css.tab}>
        <h2>Bar Chart</h2>
        <div className={css.heads}>
          <select
            id="Name"
            required
            // placeholder="Ticket Type"
            // defaultValue={props.tickettype ? props.tickettype : ''}
            // onChange={e => {
            //   handleChangetickettype(e);
            // } }
          >
            <option>Mudit</option>
            <option>Anjali</option>
            <option>Shreesh</option>
            <option>Naina</option>
          </select>
          <select
            // type="number"
            id="Team"
            placeholder="Team"
            required
            // defaultValue={props.team ? props.team : ''}
            // onChange={e => {
            //   handleChangeteam(e);
            // }}
          >
            <option>CNS</option>
            <option>Mobile Team</option>
            <option>Partner Service</option>
            <option>Contact</option>
            <option>CP</option>
            <option>Event Bridge</option>
          </select>
        </div>
        <div className={css.app} style={{ width: '60%', height: '60%' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    );

}
export default Horizontalchart;