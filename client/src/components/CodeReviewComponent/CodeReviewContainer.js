import { connect } from "react-redux";
import { datafunc, oldData } from "../../redux/common/actions";
import { CodeReview } from "./CodeReview";
import { deleteReview } from "../../services/CodeReview/codereviewService";


const mapStateToProps = (state,) => ({
    data:state.commonApi.data,

})

const mapDispatchToProps = dispatch =>{
    return{
        handleRowDelete:async(oldData)=>{
            if (window.confirm('Are you sure you want to delete this Ticket?')) {
                const delrev = await deleteReview(`/User/${oldData.ticket_no}`).then(
                  res => {
                    alert('Ticket Deleted successfully!!');
                    const dataDelete = [...data];
                    console.log(dataDelete);
                    dispatch(datafunc());
                    window.location.reload();
                    //resolve();
                  }
                );
                return delrev;
              }
        }
    }
}
const CodeReviewContainer=connect(mapStateToProps,mapDispatchToProps)(CodeReview);
export default CodeReviewContainer;