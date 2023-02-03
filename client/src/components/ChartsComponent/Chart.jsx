import { Bar, Pie } from 'react-chartjs-2';
import React from 'react';
import css from '../ChartsComponent/Chart.css';
import { useEffect } from 'react';
import { options } from './ChartConstant';

const Horizontalchart = ({
  fetchTeam,
  team,
  name,
  fetchName,
  fetchdata,
  firstCol,
  secondCol,
  handleChangeFirst,
  handleChangeSec,
  chartData
}) => {
  useEffect(() => {
    fetchTeam();
    fetchName();
  }, []);

  useEffect(() => {
    firstCol && secondCol && fetchdata(firstCol, secondCol);
  }, [firstCol, secondCol]);
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
            {
              handleChangeFirst(e.target.value);
            }
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
            handleChangeSec(e.target.value);
          }}
        >
          {name &&
            name.map((val, index) => {
              return <option key={index}>{val}</option>;
            })}
        </select>
      </div>
      <div className={css.app}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
export default Horizontalchart;
