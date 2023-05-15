import { connect } from "react-redux";

import {
    getCategoryList,
    getClientsList,
    getClientsTeamsList,
    getEmployeeList,
    getSubCategoryList
} from "../CardsComponent/CardsComponentFunction";
import { getEmp, setSubCategories } from "../../redux/common/actions";
import {
    fetchCategory,
    setClientTeams,
    setCategories,
    setClients
} from "../../redux/common/actions";
import SkillMatrixTable from "./SkillMatrixTable";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients,
    categories: state.skillMatrixOps.categories,
    subCategories: state.skillMatrixOps.subCategories
});

const mapDispatchToProps = dispatch => ({
    fetchClientList: async () => {
        const clients = await getClientsList();
        console.log(1);
        dispatch(setClients(clients));
    },
    fetchCategoryList: async () => {
        const categories = await getCategoryList();
        console.log(categories);
        dispatch(setCategories(categories));
    },
    fetchSubCategoriesList: async () => {
        const subCategories = await getSubCategoriesList();
        dispatch(setSubCategories(subCategories));
    }
});

const SkillMatrixTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillMatrixTable);

export default SkillMatrixTableContainer;
