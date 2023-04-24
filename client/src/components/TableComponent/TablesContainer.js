import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Tables from './Tables';
import { oldSelectedData } from '../../redux/common/actions';

const mapStateToProps = state => ({
  ticketDetails: state.authUser.ticketDetails
  // userToken: state.authUser.userToken
});

const mapDispatchToProps = dispatch => {
  return {
    dashboard: () => {
      const decoded = jwt_decode(userToken);
      decoded.Emp_designation === 'Engineering Manager'
        ? 'Admin Dashboard'
        : 'User Dashboard';
    },
    oldSelectedData: rows => {
      dispatch(oldSelectedData(rows));
    }
  };
};

const TablesContainer = connect(mapStateToProps, mapDispatchToProps)(Tables);
export default TablesContainer;
