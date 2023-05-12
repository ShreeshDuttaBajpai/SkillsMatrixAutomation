import { connect } from "react-redux";
import FormAdd from "./FormAdd";
import { getClientsList } from "../CardsComponent/CardsComponentFunction";
import { setClients } from "../../redux/common/actions";

const mapDispatchToProps = dispatch => {
    return {
        fetchClientList: async () => {
            const clients = await getClientsList();
            dispatch(setClients(clients));
        }
    };
};

const FormAddContainer = connect(null, mapDispatchToProps)(FormAdd);
export default FormAddContainer;
