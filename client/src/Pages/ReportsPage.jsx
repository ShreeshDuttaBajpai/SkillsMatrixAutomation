import React from 'react';
// import Horizontalchart from '../components/ChartsComponent/Chart';
import ChartsContainer from '../components/ChartsComponent/ChartsContainer';
import Navbar from '../components/Navbar/Navbar';

function ReportsPage() {
  return (
    <div>
      <Navbar />
      {/* <ReportsComponent/> */}
      {/* <Horizontalchart /> */}
      <ChartsContainer />
    </div>
  );
}

export default ReportsPage;
