import { connect } from "react-redux";
import AccordionCategoriesComponent from "./AccordionCategoriesComponent";
import { getSubCategoriesList } from "./AccordionCategoriesFunctions";
import {
    setExpectedScoreMappings,
    setSubCategories
} from "../../redux/common/actions";

const mapStateToProps = state => {
    return {
        categories: state.skillMatrixOps.categories || [],
        subCategories: state.skillMatrixOps.subCategories || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSubCategoriesList: async () => {
            const subCategories = await getSubCategoriesList();
            dispatch(setSubCategories(subCategories));
        }
    };
};

const AccordionCategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccordionCategoriesComponent);
export default AccordionCategoriesContainer;
