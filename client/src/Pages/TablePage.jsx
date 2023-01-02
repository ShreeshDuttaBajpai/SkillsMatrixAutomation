import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../components/PopupComponent/PopupComponent';
import { useAuth } from '../components/auth.context';
import jwt_decode from 'jwt-decode';
// import TablesContainer from '../components/TableComponent/TablesContainer';


function TablePage(props) {
  const [open, setOpen] = useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  
  const handleOpen = () => {
    setOpen(!open);
  };

const { userToken } = useAuth();
const decoded = jwt_decode(userToken);

  const handleOpenActions = () => {
    setOpenActions(!openActions);
  };

  return (    
    <div className={css.tab}>  
      <Navbar/>
	 
		<div className={css.headers}>
        	<h3 className={css.dashboard}>{
            	decoded.Emp_designation === 'Engineering Manager' ? 'Admin Dashboard' : 'User Dashboard'
        	}</h3>
		
			<div className={css.Actionsdiv}>
      			<div className={css.dropdown}>
            		<ButtonComponent selected={selected}
                	cname={css.Actionsbutton}
                	value="Actions"
                	disable={true}
                	run={handleOpenActions}
            	/> </div>
				<div className={css.ActionsOptions}>
            	{selected && openActions ?(
        		<ul className={css.menu}>
          			<li className={css.menu_item}>
            		<ButtonComponent 
            		cname={css.button1}
            		value="Edit"
            		disable={true} 
					/>
          			</li>
          			<li className={css.delete_button}>
		  				<ButtonComponent 
            			cname={css.button1}
            			value="Delete"
						disable={true} 
            		/>
          			</li>
        		</ul>
     		 ) : null}
			 </div>
	  	</div>
     
      	<div className={css.dropdowndiv}>
        	<ButtonComponent
        	cname={css.add_button}
        	value="Add"
        	// disable={false}
        	run={handleOpen}
        	/>
        	{open?(
          		<PopupComponent/>
          	) : null}
      	</div>
		</div>
		<div className={css.tablediv}>
    	<Tables setSelected={setSelected}/>
    </div>
	</div>
  )
}

export default TablePage;