import { connect } from "react-redux";
import { reviewdel, reviewupd } from "../../redux/common/actions";
import { CodeReview } from "./CodeReview";
import { deleteReview,updateReview } from "../../services/CodeReview/codereviewService";


const mapStateToProps = (state) => ({
    data:state.authUser.data,
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

    handleRowUpdate : async (newData, oldData) => {
      const update = await updateReview(`/Review/${oldData.ticket_no}`, newData)
        .then(res => {
          alert('Ticket Edited successfully!!');
          const dataUpdate = [...data];
          console.log(dataUpdate);
          const index = oldData.tableData.id;
          console.log(index);
          dataUpdate[index] = newData;
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