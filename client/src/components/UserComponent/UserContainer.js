import { connect } from 'react-redux';
import { editopen, tabledel, tableupd, toggleOpen } from '../../redux/common/actions';
import { deleteUser, updateUser } from '../../services/UserServices/UserService';
import UserComponent from './UserComponent';

const mapStateToProps = state => ({
  data: state.tableUser.data,
  openForm: state.tableUser.openForm,
  editForm: state.tableUser.editForm,
  ticketDetails: state.authUser.ticketDetails,
  userToken: state.authUser.userToken
});

const mapDispatchToProps = dispatch => ({
  handleRowDelete: async oldData => {
    if (window.confirm('Are you sure you want to delete this Ticket?')) {
      const deluser = await deleteUser(`/User/${oldData.ticket_no}`).then(
        res => {
          alert('Ticket Deleted successfully!!');
          dispatch(tabledel(oldData));
          window.location.reload();
   
        }
      );
      return deluser;
    }
  },

  handleRowUpdate: async (ticketDetails) => {
    const update = await updateUser(`/User/${ticketDetails.ticket_no}`, ticketDetails)
      .then(res => {
        alert('Ticket Edited successfully!!');
        const dataUpdate = [...data];
        console.log(dataUpdate);
        const index = oldData.tableData.id;
        console.log(index);
        dataUpdate[index] = ticketDetails;
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
  }
  
});

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);

export default UserContainer;
