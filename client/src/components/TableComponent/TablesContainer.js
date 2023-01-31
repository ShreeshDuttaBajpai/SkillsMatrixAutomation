import { connect } from 'react-redux';
import { useAuth } from '../auth.context';
import jwt_decode from 'jwt-decode';
import Tables from './Tables';
import TablePage from '../../Pages/TablePage';

const { userToken } = useAuth();
const decoded = jwt_decode(userToken);

const mapDispatchToProps = dispatch => {
    return {
        dashboard : () => {
            decoded.Emp_designation === 'Engineering Manager' ? 'Admin Dashboard' : 'User Dashboard'
        }
    }
}

const TablesContainer=connect(
    undefined,
    mapDispatchToProps
)(Tables);
export default TablesContainer;