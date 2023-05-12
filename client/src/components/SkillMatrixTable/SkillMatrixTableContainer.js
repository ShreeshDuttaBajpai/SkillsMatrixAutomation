import { connect } from "react-redux";
import ClientsCard from "./ClientsCard";
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
    fetchSubCategoryList: async id => {
        const sub = await getSubCategoryList(id);
        dispatch(setSubCategories(sub));
    }
});

const SkillMatrixTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillMatrixTable);

export default SkillMatrixTableContainer;
