import { connect } from 'react-redux';
import FormComponent from './FormComponent';
import { handleOpen } from './FormFunctions';

const mapStateToProps = state => ({
  open: state.authUser.open
});
  
const mapDispatchToProps = dispatch => (
  { handleOpen: () => (handleOpen(dispatch)) }
)

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
export default HomePageContainer;