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
        subCategories: state.skillMatrixOps.subCategories || [],
        expectedScoreMappings: state.skillMatrixOps.expectedScoreMappings || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSubCategoriesList: async () => {
            const subCategories = await getSubCategoriesList();
            dispatch(setSubCategories(subCategories));
        },
        setExpectedScoreMappings: scoringData => {
            dispatch(setExpectedScoreMappings(scoringData));
        }
    };
};

const AccordionCategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccordionCategoriesComponent);
export default AccordionCategoriesContainer;
