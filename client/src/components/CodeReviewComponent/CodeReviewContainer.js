import { connect } from "react-redux";
import { reviewdel, reviewupd } from "../../redux/common/actions";
import { CodeReview } from "./CodeReview";
import { deleteReview,updateReview } from "../../services/CodeReview/codereviewService";


const mapStateToProps = (state) => ({
  data: state.authUser.data,
  ticketDetails: state.authUser.ticketDetails
})

const mapDispatchToProps = dispatch =>(
    {
        handleRowDelete:async(oldData)=>{
            if (window.confirm('Are you sure you want to delete this Ticket?')) {
                const delrev = await deleteReview(`/User/${oldData.ticket_no}`).then(
                  res => {
                    alert('Ticket Deleted successfully!!');
                    // const dataDelete = [...data];
                    // console.log(dataDelete);
                    dispatch(reviewdel(oldData));
                    window.location.reload();
                    //resolve();
                  }
                );
                return delrev;
              }
        },

    handleRowUpdate : async (ticketDetails) => {
      const update = await updateReview(`/Review/${ticketDetails.ticket_no}`, ticketDetails)
        .then(res => {
          alert('Ticket Edited successfully!!');
          const dataUpdate = [...data];
          console.log(dataUpdate);
          const index = ticketDetails.tableData.id;
          console.log(index);
          dataUpdate[index] = ticketDetails;
          dispatch(reviewupd(...dataUpdate));
        })
        .catch(error => {
          console.log(error);
        });
      return update;
    }
  }
)
const CodeReviewContainer=connect(mapStateToProps,mapDispatchToProps)(CodeReview);
export default CodeReviewContainer;