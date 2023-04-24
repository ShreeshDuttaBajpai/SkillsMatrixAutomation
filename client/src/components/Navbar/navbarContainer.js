import { connect } from 'react-redux';
import { continueWithMicrosoft } from './../HomePage/HomePageMainComponent/homePageFunctions';
import { authUser, logout } from './NavbarFunctions';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  // myData: state.authUser.myData,
  // authSuccess: state.authUser.authSuccess,
  // userToken: state.authUser.userToken
});

console.log(mapStateToProps);

const mapDispatchToProps = dispatch => ({
  authorizeUser: userToken => authUser(dispatch, userToken),
  logoutFunction: Emp_id => logout(dispatch, Emp_id),
  ContinueWithMicrosoft: () => continueWithMicrosoft(dispatch)
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;
