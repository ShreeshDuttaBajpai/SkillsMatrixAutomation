import { Bar } from "react-chartjs-2/dist";
import React from 'react';
import css from '../ReportsComponent/ReportsComponent.css';

export const BarChart = ({ chartData }) => (
  <div className={css.tab}>
    <div className={css.chart_container}>
      <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
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
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020'
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  </div>
);