import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import csss from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';

function TablePage() {
  return (
    <div className={csss.tabb}>
      <Navbar/>
      <Tables />
    </div>
  )
}

export default TablePage;
