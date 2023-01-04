import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Table from '../components/TableComponent/Tables';
import css from '../../src/Pages/CodeReview.css';

function CodeReview() {
  return (
    <div className={css.codereviewhead}> 
      <Navbar />
      <h3 className={css.dashboardhead}>Code Reviewer Dashboard</h3>
      <Table />
    </div>
  );
}

export default CodeReview;
