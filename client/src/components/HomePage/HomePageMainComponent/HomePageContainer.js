import { connect } from 'react-redux';
import HomePageMainComponent from './HomePageMainComponent';
import { continueWithMicrosoft } from './homePageFunctions';

const mapStateToProps = state => ({
  myData: state.authUser.myData,
  authSuccess :state.authUser.authSuccess
});
  
const mapDispatchToProps = dispatch => (
  { ContinueWithMicrosoft: () => (continueWithMicrosoft(dispatch)) }
)

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageMainComponent);
export default HomePageContainer;