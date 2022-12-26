import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../components/PopupComponent/PopupComponent';

function TablePage() {
  const [open, setOpen] = React.useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const handleOpen = () => {
    setOpen(!open);
  };

  return (    
    <div className={css.tab}>  
      <Navbar/>
      <div className={css.dropdown}>
            <ButtonComponent selected={selected}
                cname={css.button1}
                value="Actions"
                disable={true}
                // run={handleOpen}
            />
            {open ? (
        <ul className={css.menu}>
          <li className={css.menu_item}>
            <button>Edit</button>
          </li>
          <li className={css.menu_item}>
            <button>Delete</button>
          </li>
        </ul>
      ) : null}
      </div>
      <div className={css.dropdowndiv}>
        <ButtonComponent
        cname={css.button1}
        value="Add"
        disable={false}
        run={handleOpen}
        />
        {open?(
          <PopupComponent/>
          ) : null}
      </div>
      <Tables setSelected={setSelected}/>
    </div>
  )
}

export default TablePage;
