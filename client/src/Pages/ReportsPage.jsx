import React from 'react';
import Horizontalchart from '../components/ChartsComponent/Chart.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import NavbarContainer from '../components/Navbar/NavbarContainer.js';

function ReportsPage() {
  return (
    <div>
      {/* <ReportsComponent/> */}
      <NavbarContainer />
      <Horizontalchart />
    </div>
  );
}

export default ReportsPage;
