import { connect } from 'react-redux';
import App from './App';
import { toggleFullscreen } from 'rootpath/redux/layout/actions';

const mapStateToProps = state => ({
});

const mapDispatchToprops = dispatch => ({
  onDesktopToggleFullscreen: () => {
    
  }
});


const AppContainer = connect(mapStateToProps, mapDispatchToprops)(App);

export default AppContainer;
