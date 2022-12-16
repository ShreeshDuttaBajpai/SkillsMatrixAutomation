import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import jwt_decode from 'jwt-decode';
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
import { Input } from '@material-ui/core';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props}  ref={ref}  />),
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

function Tables() {
  const { userToken } = useAuth();
  const decoded = jwt_decode(userToken);

  const api = axios.create({
    baseURL: `https://localhost:7040/api/${
      decoded.Emp_designation === 'Engineering Manager' ? 'Admin' : 'User'
    }`
  });

  var columns = [
    { title: 'Ticket_no', field: 'ticket_no', editable: 'onAdd' },
    {
      title: 'Client',
      field: 'client',
      lookup: {
        1: 'CW'
      }
    },
    { title: 'Team',
      field: 'team',
      lookup:{
        1:'CNS',
        2:'Mobile Team',
        3:'Partner Service',
        4:'Contacts',
        5:'CP',
        6:'Event Bridge'
      }
    },
    {
      title: 'Name',
      field: 'name',
      initialEditValue: decoded.Emp_name,
      editable: 'never'
    },
    {
      title: 'Ticket_type',
      field: 'ticket_type',
      lookup: {
        1: 'Story',
        2: 'Bug',
        3: 'Task',
        4: 'Sub-Task'
      }
    },
    { title: 'Story_point', field: 'story_point' },
    { title: 'Start_date', field: 'start_date', type: 'date' },
    { title: 'End_date', field: 'end_date', type: 'date' },
    { title: 'Hours', field: 'hours' },
    {
      title: 'Status',
      field: 'status',
      lookup: {
        1: 'Completed',
        2: 'InProgress',
        3: 'Incomplete'
      }
    },
    { title: 'Code_Reviewer', field: 'code_reviewer' },
    decoded.Emp_designation === 'Engineering Manager'
      ? { title: 'Code_deviation_count', field: 'code_deviation_count' }
      : {
          title: 'Code_deviation_count',
          field: 'code_deviation_count',
          editable: 'never'
        },
    decoded.Emp_designation === 'Engineering Manager'
      ? { title: 'Bugs_count', field: 'bugs_count' }
      : { title: 'Bugs_count', field: 'bugs_count', editable: 'never' },
    decoded.Emp_designation === 'Engineering Manager'
      ? { title: 'Remarks', field: 'remarks' }
      : { title: 'Remarks', field: 'remarks', editable: 'never' }
  ];
  const [data, setData] = useState([]); //table data
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    api
      .get(
        `/${
          decoded.Emp_designation === 'Engineering Manager'
            ? ''
            : decoded.Emp_id
        }`
      )
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log('Error');
      });
  }, []);

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = [];
    if (newData.Ticket_no === '') {
      errorList.push('Please enter Ticket_no');
    }
    if (newData.Team === '') {
      errorList.push('Please enter Team');
    }
    if (newData.Name === '') {
      errorList.push('Please enter Name');
    }
    if (newData.Client === '') {
      errorList.push('Please enter a Client');
    }
    if (newData.Ticket_type === '') {
      errorList.push('Please enter Ticket_type');
    }
    if (newData.Story_point === '') {
      errorList.push('Please enter Story_point');
    }
    if (newData.Start_date === '') {
      errorList.push('Please enter Start_date');
    }
    if (newData.Hours === '') {
      errorList.push('Please enter a Hours');
    }
    if (newData.Status === '') {
      errorList.push('Please enter a Status');
    }

    if (errorList.length < 1) {
      api
        .put(`/${oldData.ticket_no}`, newData)
        .then(res => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve();
          setIserror(false);
          setErrorMessages([]);
        })
        .catch(error => {
          console.log(oldData);
          setErrorMessages(['Update failed! Server error']);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };
  //Add Data of User
  const handleRowAdd = (newData, resolve) => {
    console.log(newData);
    //validation
    let errorList = [];
    if (newData.ticket_no === undefined) {
      errorList.push('Please enter Ticket_no');
    }
    if (newData.team === undefined) {
      errorList.push('Please enter Team');
    }
    if (newData.name === undefined) {
      errorList.push('Please enter Name');
    }
    if (newData.client === undefined) {
      errorList.push('Please enter a Client');
    }
    if (newData.ticket_type === undefined) {
      errorList.push('Please enter Ticket_type');
    }
    if (newData.story_point === undefined) {
      errorList.push('Please enter Story_point');
    }
    if (newData.start_date === undefined) {
      errorList.push('Please enter Start_date');
    }
    if (newData.hours === undefined) {
      errorList.push('Please enter Hours');
    }
    if (newData.status === undefined) {
      errorList.push('Please enter Status');
    }


    if (errorList.length < 1) {
      //no error
      api
        .post('/', newData)
        .then(res => {
          let dataToAdd = [...data];
          dataToAdd.push(newData);
          setData(dataToAdd);
          resolve();
          setErrorMessages([]);
          setIserror(false);
          window.location.reload();
        })
        .catch(error => {
          setErrorMessages(['Cannot add data. Server error!']);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };
  //Delete records
  const handleRowDelete = (oldData, resolve) => {
    console.log(oldData);
    api
      .delete(`/${oldData.ticket_no}`)
      .then(res => {
        const dataDelete = [...data];
        console.log(dataDelete);
        setData(prev =>
          prev.filter(obj => obj.ticket_no !== oldData.ticket_no)
        );
        window.location.reload();
        resolve();
      })
      .catch(error => {
        setErrorMessages(['Delete failed! Server error']);
        setIserror(true);
        resolve();
      });
  };
  return (
    <div className="App" style={{ marginTop: '60px' }}>
      <h2 style={{ textAlign: 'center' }}>User Details</h2>
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
            mt={90}
            title="Client : ConnectWise"
            columns={columns}
            data={data}
            icons={tableIcons}
            options={{
              headerStyle: { size: '80px' }
            }}
            //Add, Edit & Update functionality to User Only
            editable={
              decoded.Emp_designation !== 'Engineering Manager' && {
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    handleRowUpdate(newData, oldData, resolve);
                  }),
                onRowAdd: newData =>
                  new Promise(resolve => {
                    handleRowAdd(newData, resolve);
                    // window.location.reload();
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    handleRowDelete(oldData, resolve);
                  })
              }
            }
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default Tables;
