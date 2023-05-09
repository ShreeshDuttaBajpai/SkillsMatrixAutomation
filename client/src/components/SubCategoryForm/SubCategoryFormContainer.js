import { connect } from "react-redux";
import { postSubCategory, postTeams } from "../../redux/common/actions";
import { SubCatPostApi } from "../../services/CategoryService/CategoryService";
import SubCategory from "./SubCategory";

const mapStateToProps = state => ({
    client: state.skillMatrixOps.client,
    categoryItem: state.skillMatrixOps.categoryItem
  });

  const mapDispatchToProps =  dispatch =>({
    postSubCat : async (cat) => {
        const teams=await SubCatPostApi(cat)
        dispatch(postSubCategory(teams))
    }
  })

  const SubCategoryFormContainer=connect(mapStateToProps,mapDispatchToProps)(SubCategory);

export default SubCategoryFormContainer;