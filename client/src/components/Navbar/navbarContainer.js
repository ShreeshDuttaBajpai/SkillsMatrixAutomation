import { connect } from 'react-redux';
// import { myData } from '../../../redux/common/actions';
// import HomePageMainComponent from './HomePageMainComponent';
// import { authUser } from '../../../redux/common/reducers';
import { continueWithMicrosoft } from './../HomePage/HomePageMainComponent/homePageFunctions';
import { logout } from './NavbarFunctions';
import Navbar from './Navbar';

// const mapStateToProps = state => ({
// //   myData: state.authUser.myData,
// //   authSuccess :state.authUser.authSuccess
//   });
//   console.log(myData);
const mapDispatchToProps = dispatch => (
    { ContinueWithMicrosoft: () => (continueWithMicrosoft(dispatch)) },
    {Logout:()=>(logout(dispatch))}
)

const NavbarContainer = connect(undefined, mapDispatchToProps)(Navbar);
export default NavbarContainer;