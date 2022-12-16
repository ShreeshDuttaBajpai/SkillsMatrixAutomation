import React from 'react';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import Navbar from '../components/Navbar/Navbar';
import Tables from '../components/TableComponent/Tables';

function TablePage() {
  return (
    <>
      <Navbar />
      <Tables />
      <ButtonComponent />
    </>
  );
}

export default TablePage;
