import { connect } from "react-redux";
import ClientsCard from "./ClientsCard";
import {
    getCategoryList,
    getClientsList
} from "../CardsComponent/CardsComponentFunction";
import { fetchCategory, setClients } from "../../redux/common/actions";
import { CategoryListApi } from "../../services/CategoryService/CategoryService";

const mapStateToProps = state => ({
    clients: state.skillMatrixOps.clients,
    category: state.skillMatrixOps.category
});

const mapDispatchToProps = dispatch => ({
    fetchClientList: async () => {
        const clients = await getClientsList();
        console.log(1);
        dispatch(setClients(clients));
    },
    fetchCategoryList: async () => {
        const category = await getCategoryList();
        console.log(category);
        dispatch(fetchCategory(category));
    }
});

const ClientsCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientsCard);

export default ClientsCardContainer;
