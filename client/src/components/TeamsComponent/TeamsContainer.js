import { connect } from "react-redux";
import {
    DeleteEmployeeApi,
    DeleteSubCategoryApi,
    DeleteTeamApi,
    TeamPostApi
} from "../../services/ClientService/ClientService";
import { postTeams } from "../../redux/common/actions";
import TeamsComponent from "./TeamsComponent";

const mapStateToProps = state => ({
    teams: state.skillMatrixOps.teams
});

const mapDispatchToProps = dispatch => {
    return {
        postTeam: async team => {
            const teams = await TeamPostApi(team);
            dispatch(postTeams(teams));
        },
        deleteEmployee: async employeeID => {
            await DeleteEmployeeApi(employeeID);
        },
        deleteTeam: async teamId => {
            await DeleteTeamApi(teamId);
        },
        deleteSubCategory: async subCategoryId => {
            await DeleteSubCategoryApi(subCategoryId);
        }
    };
};

const TeamsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamsComponent);

export default TeamsContainer;
