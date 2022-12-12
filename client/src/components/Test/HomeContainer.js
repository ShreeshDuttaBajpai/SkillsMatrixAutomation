import { connect } from 'react-redux';
import Home from './Home';
import { refreshData } from 'rootpath/redux/common/actions';
import { fetchStates } from 'rootpath/services/Home/homeService';

const mapStateToProps = state => ({
  apiResponse: state.commonApi.apiResponse,
  resContent: state.commonApi.resContent
});

const mapDispatchToprops = dispatch => ({
  onButtonClick: async () => {
    const responseData = await fetchStates();
    dispatch(refreshData(responseData.body));
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToprops)(Home);

export default HomeContainer;
