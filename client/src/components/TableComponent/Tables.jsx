import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from '@material-table/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../auth.context';
import jwt_decode from 'jwt-decode';
import { CodeReviewapi } from './../../services/TableService/tableService';
import { display } from '@mui/system';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const Tables = props => {
  // const { userToken } = useAuth();
  const rawData = [];
  // console.log(props.userToken, 'userToken');
  // const decoded = jwt_decode(props.userToken);
  // console.log(decoded);
  const api = axios.create({
    baseURL: `https://localhost:44325/`
  });

  if (window.location.pathname === '/CodeReview') {
    var columns = [
      {
        title: 'Ticket No',
        field: 'ticket_no',
        editable: 'onAdd',
        width: '24%'
      },
      {
        title: 'Team',
        field: 'team',
        width: '30%',
        lookup: {
          CNS: 'CNS',
          'Mobile Team': 'Mobile Team',
          'Partner Service': 'Partner Service',
          Contact: 'Contact',
          CP: 'CP',
          'Event Bridge': 'Event Bridge'
        }
      },
      {
        title: 'Name',
        field: 'name',
        initialEditValue: 'decoded.Emp_name',
        editable: 'never',
        cellStyle: {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          maxWidth: 130,
          '&:hover': {
            textOverflow: 'none'
          }
        }
      },
      {
        title: 'Ticket Type',
        field: 'ticket_type',
        cellStyle: {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          maxWidth: 150
        },
        lookup: {
          Story: 'Story',
          Bug: 'Bug',
          Task: 'Task',
          'Sub-Task': 'Sub-Task'
        }
      },

      {
        title: 'Status',
        field: 'status',
        lookup: {
          Completed: 'Completed',
          Incomplete: 'Incomplete',
          InProgress: 'InProgress'
        },
        width: '25%'
      },
      { title: 'Code Reviewer', field: 'code_reviewer' },
      { title: 'Code Deviation Count', field: 'code_deviation_count' },
      { title: 'Bugs Count', field: 'bugs_count' },
      { title: 'Remarks', field: 'remarks' }
    ];
  } else {
    var columns = [
      {
        title: 'Ticket No',
        field: 'ticket_no',
        editable: 'onAdd',
        width: '24%'
      },
      {
        title: 'Team',
        field: 'team',
        width: '30%',
        lookup: {
          CNS: 'CNS',
          'Mobile Team': 'Mobile Team',
          'Partner Service': 'Partner Service',
          Contact: 'Contact',
          CP: 'CP',
          'Event Bridge': 'Event Bridge'
        }
      },
      {
        title: 'Name',
        field: 'name',
        initialEditValue: 'decoded.Emp_name',
        editable: 'never',
        cellStyle: {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          maxWidth: 130,
          '&:hover': {
            textOverflow: 'none'
          }
        }
      },
      {
        title: 'Ticket Type',
        field: 'ticket_type',
        cellStyle: {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          maxWidth: 150
        },
        lookup: {
          Story: 'Story',
          Bug: 'Bug',
          Task: 'Task',
          'Sub-Task': 'Sub-Task'
        }
      },
      { title: 'Story Point', field: 'story_point' },
      { title: 'Start date', field: 'start_date', type: 'date' },
      { title: 'End date', field: 'end_date', type: 'date' },
      { title: 'Hours', field: 'hours' },
      {
        title: 'Status',
        field: 'status',
        lookup: {
          Completed: 'Completed',
          InProgress: 'InProgress',
          Incomplete: 'Incomplete'
        },
        width: '20%'
      },
      { title: 'Code Reviewer', field: 'code_reviewer' }
    ];
  }
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  // const getData = async () => {
  //   const response = await CodeReviewapi(decoded);
  //   console.log(props.response, 'gagan');
  //   return response;
  // };

  useEffect(() => {
    // if (window.location.pathname === '/CodeReview') {
    //   getData()
    //     .then(res => {
    //       props.setData(res);
    //       console.log(res);
    //     })
    //     .catch(error => {
    //       console.log('Error' + error);
    //     });
    // } else {
    api
      .get(`storytracker`)
      .then(res => {
        props.setData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log('Error');
      });
    // }
  }, []);

  //   const handleRowUpdate = (newData, oldData, resolve) => {
  //     //validation
  //     let errorList = [];
  //     if (newData.first_name === '') {
  //       errorList.push('Please enter first name');
  //     }
  //     if (newData.last_name === '') {
  //       errorList.push('Please enter last name');
  //     }
  //     if (newData.email === '' || validateEmail(newData.email) === false) {
  //       errorList.push('Please enter a valid email');
  //     }

  //     if (errorList.length < 1) {
  //       api
  //         .patch('/users/' + newData.id, newData)
  //         .then(res => {
  //           const dataUpdate = [...data];
  //           const index = oldData.tableData.id;
  //           dataUpdate[index] = newData;
  //           setData([...dataUpdate]);
  //           resolve();
  //           setIserror(false);
  //           setErrorMessages([]);
  //         })
  //         .catch(error => {
  //           setErrorMessages(['Update failed! Server error']);
  //           setIserror(true);
  //           resolve();
  //         });
  //     } else {
  //       setErrorMessages(errorList);
  //       setIserror(true);
  //       resolve();
  //     }
  //   };
  //  const handleRowDelete = (oldData, resolve) => {
  //    api
  //      .delete('/users/' + oldData.id)
  //      .then(res => {
  //        const dataDelete = [...data];
  //        const index = oldData.tableData.id;
  //        dataDelete.splice(index, 1);
  //        setData([...dataDelete]);
  //        resolve();
  //      })
  //      .catch(error => {
  //        setErrorMessages(['Delete failed! Server error']);
  //        setIserror(true);
  //        resolve();
  //      });
  //  };
  const [hoveringOver, setHoveringOver] = useState('');

  // This is the only downside.. very hacky
  const [, setForceUpdate] = useState(0);
  const forceUpdate = () => setForceUpdate(old => old + 1);

  const handleRowHover = (event, propsData) =>
    setHoveringOver(propsData.data.tableData.id);
  const handleRowHoverLeave = (event, propsData) => setHoveringOver('');

  return (
    <div className="App" style={{ marginTop: '60px' }}>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div>
            {iserror && (
              <Alert severity="error">
                {errorMessages.map((msg, i) => {
                  return <div key={i}>{msg}</div>;
                })}
              </Alert>
            )}
          </div>

          <MaterialTable
            localization={{
              body: {
                emptyDataSourceMessage: (
                  <h1
                    style={{
                      marginTop: '10%',
                      position: 'absolute',
                      top: '16%',
                      marginLeft: '20px',
                      textAlign: 'center'
                    }}
                  >
                    No records to display
                  </h1>
                )
              }
            }}
            mt={90}
            title="Client : ConnectWise"
            columns={columns}
            options={{
              showTextRowsSelected: false,
              selection: true
            }}
            // actions={[
            //   rowData => {
            //     return hoveringOver !== '' &&
            //       rowData.tableData.id === hoveringOver
            //       ? { icon: Edit, hidden: false, onClick: handleEditClick }
            //       : { icon: Edit, hidden: true, onClick: () => {} };
            //   }
            // ]}
            // editable={{
            //   onRowUpdate: (newData, oldData) =>
            //     new Promise(resolve => {
            //       handleRowUpdate(newData, oldData, resolve);
            //     }),
            //   onRowDelete: oldData =>
            //     new Promise(resolve => {
            //       handleRowDelete(oldData, resolve);
            //     })
            // }}
            onSelectionChange={rows => {
              if (rows.length === 1) {
                props.setSelected(true);
                props.oldSelectedData(rows[0]);
                props.setNewData(rows[0]);
              } else {
                props.setSelected(false);
              }
            }}
            data={props.data}
            icons={tableIcons}
          />
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Tables;
