import React, { useState } from 'react';
import css from '../UserComponent/UserComponent.css';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { setNewData } from '../../redux/common/actions';
import NavbarContainer from '../Navbar/NavbarContainer';
import PopupContainer from '../PopupComponent/PopupContainer';
import TablesContainer from '../TableComponent/TablesContainer';

const UserComponent = ({
  handleRowUpdate,
  handleRowDelete,
  handleOpen,
  openForm,
  handleEditOpen,
  editForm,
  ticketDetails,
  userToken,
  oldSelectedData
}) => {
  const userName = jwt_decode(userToken).Emp_name;
  const decoded = jwt_decode(userToken);
  console.log(userName);
  const [getdata, setGetdata] = useState();
  const [selected, setSelected] = useState();

  const postUser = async e => {
    console.log(ticketDetails);
    axios.post('https://localhost:7040/api/User', ticketDetails).then(res => {
      alert('Ticket added successfully!!');
    });
  };

  return (
    <div className={css.tab}>
      <NavbarContainer />
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
            />
          </div>
          <div className={css.ActionsOptions}>
            {selected ? (
              <ul className={css.menu}>
                <li className={css.menu_item}>
                  <ButtonComponent
                    cname={css.button1}
                    value="Edit"
                    run={() => handleEditOpen(editForm)}
                  />
                  {editForm && (
                    <PopupContainer
                      ename={css.editopen}
                      handleOpen={() => handleEditOpen(editForm)}
                      val1="Edit Ticket"
                      val2={() => {
                        handleRowUpdate(ticketDetails);
                      }}
                      ticketno={ticketDetails.ticket_no}
                      tickettype={ticketDetails.ticket_type}
                      team={ticketDetails.team}
                      storypoints={ticketDetails.story_point}
                      startdate={ticketDetails.start_date}
                      enddate={ticketDetails.end_date}
                      hours={ticketDetails.hours}
                      status={ticketDetails.status}
                      codereviewer={ticketDetails.code_reviewer}
                    />
                  )}
                </li>
                <li className={css.delete_button}>
                  <ButtonComponent
                    cname={css.button1}
                    value="Delete"
                    run={() => {
                      handleRowDelete(ticketDetails);
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
            run={() => handleOpen(openForm)}
          />
          {openForm && (
            <PopupContainer
              handleOpen={() => handleOpen(openForm)}
              setNewData={setNewData}
              val1="Add Ticket"
              val2={postUser}
            />
          )}
        </div>
        <div className={css.reports}>
          {getdata && (
            <CSVLink data={getdata} className={css.btn}>
              <ButtonComponent cname={css.add_button} value="Export Data" />
            </CSVLink>
          )}
        </div>
      </div>
      <div className={css.tablediv}>
        <TablesContainer
          data={getdata}
          setData={setGetdata}
          setSelected={setSelected}
          setOldData={oldSelectedData}
          setNewData={setNewData}
        />
      </div>
    </div>
  );
};

export default UserComponent;
