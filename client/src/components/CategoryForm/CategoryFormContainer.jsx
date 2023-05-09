import { connect } from "react-redux";
import { handlechangecategory } from "../../redux/common/actions";
import CategoryForm from "./CategoryForm";

const mapStateToProps = state => ({
    category: state.skillMatrixOps.category
});
const mapDispatchToProps = dispatch => ({
    handlechange: async e => {
        dispatch(handlechangecategory(e));
    }
});
const CategoryFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryForm);

export default CategoryFormContainer;
