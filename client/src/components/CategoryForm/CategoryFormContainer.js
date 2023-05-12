import { connect } from "react-redux";
import {
    handlechangecategory,
    setCategories
} from "../../redux/common/actions";
import CategoryForm from "./CategoryForm";
import { getCategoriesList } from "../ExpectedScoreMappingComponent/ExpectedScoreMappingFunctions";

const mapStateToProps = state => ({
    category: state.skillMatrixOps.category
});
const mapDispatchToProps = dispatch => {
    return {
        fetchCategoriesList: async () => {
            const categories = await getCategoriesList();
            dispatch(setCategories(categories));
        }
    };
};
const CategoryFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryForm);

export default CategoryFormContainer;
