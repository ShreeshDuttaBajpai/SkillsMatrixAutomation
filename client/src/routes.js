import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NoMatch from './components/Test/NoMatch';
import configureStore from './store/main';
import { Provider } from 'react-redux';
// import dynamicLoader from './components/layout/loader';
// import AppContainer from './components/layout/AppContainer';
// import Home from './components/Test/HomeContainer';
import MainPage from './Pages/HomePage';

const store = configureStore();
// const dynamicLoad = dynamicLoader(store);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch store={store}>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" component={MainPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
