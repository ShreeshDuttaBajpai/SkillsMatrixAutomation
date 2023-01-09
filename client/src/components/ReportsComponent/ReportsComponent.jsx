import React, { useState } from 'react';
import { Data } from "./Data";
import { BarChart } from "../ReportsComponent/BarChart";
import css from "./ReportsComponent.css";

export default function ReportsComponent() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),

    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="App">
      <BarChart className={css.barChart} chartData={chartData} />
    </div>
  );
}
