import { connect } from 'react-redux';
import { editopen, tabledel, tableupd, toggleOpen } from '../../redux/common/actions';
import { deleteUser, updateUser } from '../../services/UserServices/UserService';
import UserComponent from './UserComponent';

const mapStateToProps = state => ({
  data: state.tableUser.data,
  openForm: state.tableUser.openForm,
  editForm: state.tableUser.editForm,
});

const mapDispatchToProps = dispatch => ({
  handleRowDelete: async oldData => {
    if (window.confirm('Are you sure you want to delete this Ticket?')) {
      const deluser = await deleteUser(`/User/${oldData.ticket_no}`).then(
        res => {
          alert('Ticket Deleted successfully!!');
          // const dataDelete = [...data];
          // console.log(dataDelete);
          dispatch(tabledel(oldData));
          window.location.reload();
          //resolve();
        }
      );
      return deluser;
    }
  },

  handleRowUpdate: async (newData, oldData) => {
    const update = await updateUser(`/User/${oldData.ticket_no}`, newData)
      .then(res => {
        alert('Ticket Edited successfully!!');
        const dataUpdate = [...data];
        console.log(dataUpdate);
        const index = oldData.tableData.id;
        console.log(index);
        dataUpdate[index] = newData;
        dispatch(tableupd(...dataUpdate));
      })
      .catch(error => {
        console.log(error);
      });
    return update;
  },

  handleOpen: (openForm)=>{
    dispatch(toggleOpen(openForm))
  },

 handleEditOpen:(editForm)=>{
  console.log(editForm);
  dispatch(editopen(editForm))
 },
});

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);

export default UserContainer;
