import { connect } from "react-redux";
import { postEmp, postTeams } from "../../redux/common/actions";
import EmpForm from "./EmpForm";
import { EmpPostApi } from "../../services/EmployeeService/EmployeeService";

const mapStateToProps = state => ({
    empItem: state.skillMatrixOps.empItem
});

const mapDispatchToProps = dispatch => ({
    postEmp: async team => {
        console.log(team);
        const teams = await EmpPostApi(team);
        dispatch(postEmp(teams));
    }
});

const EmpFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmpForm);

export default EmpFormContainer;
