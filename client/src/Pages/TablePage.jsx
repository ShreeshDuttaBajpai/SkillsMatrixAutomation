import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';

function TablePage() {
  const [open, setOpen] = React.useState(false);
  return (    
    <>  
      <Navbar/>
            <ButtonComponent
                cname={css.button1}
                value="Actions"
            />
      <Tables />
      </>
  )
}

export default TablePage;
