import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';

function TablePage() {
  const [open, setOpen] = React.useState(false);
  const [select, setSelected] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (    
    <>  
      <Navbar/>
      <div className={css.dropdown}>
            <ButtonComponent select={select}
                cname={css.button1}
                value="Actions"
                run={handleOpen}
            />
            {open ? (
              <ul className="menu">
                <ul className="menu-item">
                  <button>Edit</button>
                </ul>
                <ul className="menu-item">
                  <button>Delete</button>
                </ul>
              </ul>
      ) : null}
      </div>
      <Tables setSelected={setSelected} />
      </>
  )
}

export default TablePage;
