import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Table from '../components/TableComponent/Tables';
import css from '../../src/Pages/CodeReview.css';
import axios from 'axios';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../components/PopupComponent/PopupComponent';
import { useAuth } from '../components/auth.context';
import jwt_decode from 'jwt-decode';

function CodeReview(props) {

  const [open, setOpen] = useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState({});
  const [newData, setNewData] = useState({});
  const [editopen, setEditopen] = useState();

  const handleEditopen = () => {
    setEditopen(!editopen);
  };
  
  const handleOpen = () => {
    setOpen(!open);
  };

  console.log(oldData);
  const { userToken } = useAuth();
  const decoded = jwt_decode(userToken);

  const handleOpenActions = () => {
    setOpenActions(!openActions);
  };

  const postUser = async e => {
    // e.preventDefault();
    console.log(ticketDetails);
    axios.post('https://localhost:7040/api/User', newData).then(res => {
      alert('Ticket added successfully!!');
    });
  };

  const handleRowDelete = oldData => {
    console.log(oldData);
    axios
      .delete(`https://localhost:7040/api/User/${oldData.ticket_no}`)
      .then(res => {
        const dataDelete = [...data];
        console.log(dataDelete);
        setData(prev =>
          prev.filter(obj => obj.ticket_no !== oldData.ticket_no)
        );
        window.location.reload();
        //resolve();
      });
  };

  const handleRowUpdate = (newData, oldData) => {
    console.log(newData);
    console.log(oldData);
    axios
      .put(`https://localhost:7040/api/User/${oldData.ticket_no}`, newData)
      .then(res => {
        const dataUpdate = [...data];
        console.log(dataUpdate);
        const index = oldData.tableData.id;
        console.log(index);
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className={css.codereviewhead}> 
      <Navbar />
      <div className={css.headers}>
        <h3 className={css.dashboard}>Code Reviewer Dashboard</h3>
      <div className={css.Actionsdiv}>
          <div className={css.dropdown}>
            <ButtonComponent
              selected={selected}
              cname={css.Actionsbutton}
              value="Actions"
              disable={true}
              run={handleOpenActions}
            />
          </div>
          <div className={css.ActionsOptions}>
            {selected && openActions ? (
              <ul className={css.menu}>
                <li className={css.menu_item}>
                  <ButtonComponent
                    cname={css.button1}
                    value="Edit"
                    run={handleEditopen}
                    //disable={true}
                    // run={() => {
                    //   handleRowUpdate(newData, oldData);
                    // }}
                  />
                  {editopen ? (
                    <PopupComponent
                      setNewData={setNewData}
                      val1="Edit Ticket"
                      val2={() => {
                        handleRowUpdate(newData, oldData);
                      }}
                      code_deviation_count={oldData.code_deviation_count}
                      bugs_count={oldData.bugs_count}
                      remarks={oldData.remarks}
                    />
                  ) : null}
                </li>
                <li className={css.delete_button}>
                  <ButtonComponent
                    cname={css.button1}
                    value="Delete"
                    //disable={true}
                    run={() => {
                      handleRowDelete(oldData);
                      //window.location.reload();
                    }}
                  />
                </li>
              </ul>
            ) : null}
          </div>
        </div>
        </div>
        
      <Table
       setSelected={setSelected} 
       setOldData={setOldData}
       setNewData={setNewData}/>
    </div>
  );
}

export default CodeReview;
