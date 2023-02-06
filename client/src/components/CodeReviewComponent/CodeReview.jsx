import React, { useState } from 'react';
import Table from '../../components/TableComponent/Tables';
import css from '../../components/CodeReviewComponent/CodeReview.css';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import PopupComponent from '../../components/PopupComponent/PopupComponent';
import { CSVLink } from 'react-csv';
import PopupContainer from '../PopupComponent/PopupContainer';
import TablesContainer from '../TableComponent/TablesContainer';

export const CodeReview = ({
  handleRowDelete,
  handleRowUpdate,
  oldSelectedData,
  ticketDetails
}) => {
  const [open, setOpen] = useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const [oldData, setOldData] = useState({});
  const [newData, setNewData] = useState({});
  const [editopen, setEditopen] = useState();
  const [getdata, setGetdata] = useState();

  const handleEditopen = () => {
    setEditopen(!editopen);
  };

  console.log(oldData);
  // const { userToken } = useAuth();
  //  const decoded = jwt_decode(userToken);

  const handleOpenActions = () => {
    setOpenActions(!openActions);
  };

  return (
    <div className={css.codereviewhead}>
      <div className={css.codereviewhead}>
        <div className={css.headers}>
          <h3 className={css.dashboard}>Code Reviewer Dashboard</h3>
          <div className={css.Actionsdiv}>
            <div className={css.ActionsButton}>
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
                      <PopupContainer
                        handleOpen={handleEditopen}
                        setNewData={setNewData}
                        val1="Edit Ticket"
                        val2={() => {
                          handleRowUpdate(ticketDetails);
                        }}
                        code_deviation_count={
                          ticketDetails.code_deviation_count
                        }
                        bugs_count={ticketDetails.bugs_count}
                        remarks={ticketDetails.remarks}
                      />
                    ) : null}
                  </li>
                  <li className={css.delete_button}>
                    <ButtonComponent
                      cname={css.button1}
                      value="Delete"
                      //disable={true}
                      run={() => {
                        handleRowDelete(ticketDetails);
                        //window.location.reload();
                      }}
                    />
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className={css.reports}>
            {getdata && (
              <CSVLink data={getdata} className={css.btn}>
                <ButtonComponent
                  cname={css.reports_button}
                  value="Export Data"
                />
              </CSVLink>
            )}
          </div>
        </div>

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
