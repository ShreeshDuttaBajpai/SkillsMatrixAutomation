import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../components/PopupComponent/PopupComponent';
import { useAuth } from '../components/auth.context';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
// import TablesContainer from '../components/TableComponent/TablesContainer';


function TablePage(props) {
  const [open, setOpen] = useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const [oldData, setOldData] = useState();
  const [data, setData] = useState([]); 
  const [newData, setNewData] = useState();
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);


  const handleOpen = () => {
    setOpen(!open);
  };

const { userToken } = useAuth();
const decoded = jwt_decode(userToken);

  const handleOpenActions = () => {
    setOpenActions(!openActions);
  };

  const api = axios.create({
    baseURL: `https://localhost:7040/api/${
      decoded.Emp_designation === 'Engineering Manager' ? 'Admin' : 'User'
    }`
  });

  const handleRowDelete = (oldData) => {
    console.log(oldData);
    api
      .delete(`/${oldData[0].ticket_no}`)
      .then(res => {
        const dataDelete = [...data];
        console.log(dataDelete);
        setData(prev =>
          prev.filter(obj => obj.ticket_no !== oldData[0].ticket_no)
        );
		alert('Ticket Deleted successfully!!');
        window.location.reload();
      })
      .catch(error => {
        setErrorMessages(['Delete failed! Server error']);
        setIserror(true);
      });
  };


  const handleRowUpdate = (newData, oldData) => {
    //validation
    let errorList = [];
    if (newData.ticket_no === '') {
      errorList.push('Please enter Ticket_no');
    }
    if (newData.team === '') {
      errorList.push('Please enter Team');
    }
    if (newData.name === '') {
      errorList.push('Please enter Name');
    }
    // if (newData.Client === '') {
    //   errorList.push('Please enter a Client');
    // }
    if (newData.ticket_type === '') {
      errorList.push('Please enter Ticket_type');
    }
    if (newData.story_point === '') {
      errorList.push('Please enter Story_point');
    }
    if (newData.start_date === '') {
      errorList.push('Please enter Start_date');
    }
    if (newData.hours === '') {
      errorList.push('Please enter a Hours');
    }
    if (newData.status === '') {
      errorList.push('Please enter a Status');
    }

    if (errorList.length < 1) {
      api
        .put(`/${oldData[0].ticket_no}`, newData)
        .then(res => {
          const dataUpdate = [...data];
          const index = oldData[0].tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          setIserror(false);
          setErrorMessages([]);
        })
        .catch(error => {
          console.log(oldData);
          setErrorMessages(['Update failed! Server error']);
          setIserror(true);
      
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
    }
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
						<div className={css.edit_option}>
            				<ButtonComponent 
            				cname={css.button1}
            				value="Edit"
            				//disable={true} 
							run={()=>{handleRowUpdate(newData,oldData)}}
							/>
						{open?(
          				<PopupComponent/>
          				) : null}
					</div>
          			</li>
          			<li className={css.delete_button}>
		  				<ButtonComponent 
            			cname={css.button1}
            			value="Delete"
						//disable={true} 
						run={() =>{handleRowDelete(oldData)}}
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
    	<Tables setSelected={setSelected} setOldData={setOldData} setNewData={setNewData}/>
    </div>
	</div>
  )
}

export default TablePage;