import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Tables from '../components/TableComponent/Tables';
import css from '../../src/Pages/TablePage.css';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../components/PopupComponent/PopupComponent';
import { useAuth } from '../components/auth.context';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
// import TablesContainer from '../components/TableComponent/TablesContainer';

function TablePage(props) {
  const { userToken } = useAuth();
  const userName = jwt_decode(userToken).Emp_name;
  const decoded = jwt_decode(userToken);

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState({});
  const [newData, setNewData] = useState({
    ticket_no: '',
    client: 'CW',
    team: 'CNS',
    name: userName,
    ticket_type: 'Story',
    story_point: 0,
    start_date: '',
    end_date: '',
    hours: 0,
    status: 'Completed',
    code_reviewer: '',
    code_deviation_count: '',
    bug_count: '',
    remarks: ''
  });

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleEditOpen = () => {
    setEditOpen(!editOpen);
  };
  console.log(oldData);

  const handleOpenActions = () => {
    setOpenActions(!openActions);
  };

  const postUser = async e => {
    // e.preventDefault();
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
        setData(prev =>
          prev.filter(obj => obj.ticket_no !== oldData.ticket_no)
        );
        window.location.reload();
        //resolve();
      });
  };

  const handleRowUpdate = (newData, oldData) => {
    axios
      .put(`https://localhost:7040/api/User/${oldData.ticket_no}`, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className={css.tab}>
      <Navbar />

      <div className={css.headers}>
        <h3 className={css.dashboard}>
          {decoded.Emp_designation === 'Engineering Manager'
            ? 'Admin Dashboard'
            : 'User Dashboard'}
        </h3>
        
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
                    run={handleEditOpen}
                    //disable={true}
                    // run={() => {
                    //   handleRowUpdate(newData, oldData);
                    // }}
                  />
                  {editOpen ? (
                    <PopupComponent
                      handleOpen={handleEditOpen}
                      setNewData={setNewData}
                      val1="Edit Ticket"
                      val2={() => {
                        handleRowUpdate(newData, oldData);
                      }}
                      ticketno={oldData.ticket_no}
                      tickettype={oldData.ticket_type}
                      team={oldData.team}
                      storypoints={oldData.story_point}
                      startdate={oldData.start_date}
                      enddate={oldData.end_date}
                      hours={oldData.hours}
                      status={oldData.status}
                      codereviewer={oldData.code_reviewer}
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

        <div className={css.dropdowndiv}>
          <ButtonComponent
            cname={css.add_button}
            value="Add"
            // disable={false}
            run={handleOpen}
          />
          {open && (
            <PopupComponent
              handleOpen={handleOpen}
              setNewData={setNewData}
              val1="Add Ticket"
              val2={postUser}
            />
          )}
        </div>
      </div>
      <div className={css.tablediv}>
        <Tables
          setSelected={setSelected}
          setOldData={setOldData}
          setNewData={setNewData}
        />
      </div>
    </div>
  );
}

export default TablePage;
