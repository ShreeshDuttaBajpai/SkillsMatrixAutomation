import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';

function TablePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (    
    <>  
      <Navbar/>
      <div className={css.dropdown}>
            <ButtonComponent
                cname={css.button1}
                value="Actions"
                run={handleOpen}
            />
            {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Edit</button>
          </li>
          <li className="menu-item">
            <button>Delete</button>
          </li>
        </ul>
      ) : null}
      </div>
      <Tables />
      </>
  )
}

export default TablePage;
