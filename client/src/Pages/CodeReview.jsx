import React, { useState } from 'react';
import Table from '../components/TableComponent/Tables';
import css from '../../src/Pages/CodeReview.css';
import axios from 'axios';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../components/PopupComponent/PopupComponent';
import { useAuth } from '../components/auth.context';
import jwt_decode from 'jwt-decode';
import {
  deleteReview,
  updateReview
} from '../services/CodeReview/codereviewService';

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
  // const { userToken } = useAuth();
  //  const decoded = jwt_decode(userToken);

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

  const handleRowDelete = async oldData => {
    const delrev = await deleteReview(`/User/${oldData.ticket_no}`).then(
      res => {
        alert('Ticket Deleted successfully!!');
        const dataDelete = [...data];
        console.log(dataDelete);
        setData(prev =>
          prev.filter(obj => obj.ticket_no !== oldData.ticket_no)
        );
        window.location.reload();
        //resolve();
      }
    );
    return delrev;
  };

  const handleRowUpdate = async (newData, oldData) => {
    const update = await updateReview(`/Review/${oldData.ticket_no}`, newData)
      .then(res => {
        alert('Ticket Edited successfully!!');
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
    return update;
  };

  return (
    <div className={css.codereviewhead}>
      <div className={css.headers}>
        <h3 className={css.dashboard}>Code Reviewer Dashboard</h3>
        <div className={css.Actionsdiv}>
          <div className={css.dropdown}>
            <ButtonComponent
              selected={selected}
              cname={css.Actionsbutton}
              value="Actions"
              disable={true}
              //run={handleOpenActions}
            />
          </div>
          <div className={css.ActionsOptions}>
            {selected ? (
              <ul className={css.menu}>
                <li className={css.menu_item}>
                  <ButtonComponent
                    cname={css.button1}
                    value="Edit"
                    run={handleEditopen}
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
        setNewData={setNewData}
      />
    </div>
  );
}

export default CodeReview;
