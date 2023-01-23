import { connect } from 'react-redux';
import { myData } from '../../../redux/common/actions';
import HomePageMainComponent from './HomePageMainComponent';
// import { authUser } from '../../../redux/common/reducers';
import { continueWithMicrosoft } from './homePageFunctions';


const mapStateToProps = state => ({
  myData: state.authUser.myData,
  authSuccess :state.authUser.authSuccess
  });
  // console.log(myData);
const mapDispatchToProps = dispatch => (
  { ContinueWithMicrosoft: () => (continueWithMicrosoft(dispatch)) }
)

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageMainComponent);
export default HomePageContainer;