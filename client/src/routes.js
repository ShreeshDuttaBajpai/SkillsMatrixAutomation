import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NoMatch from './components/Test/NoMatch';
import configureStore from './store/main';
import { Provider } from 'react-redux';
// import dynamicLoader from './components/layout/loader';
// import AppContainer from './components/layout/AppContainer';
import Home from './components/Test/HomeContainer';
import MainPage from './components/HomePage/HomePageMainComponent/HomePageMainComponent';

const store = configureStore();
// const dynamicLoad = dynamicLoader(store);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch store={store}>
            {/* <Route path="/" component={AppContainer}>
              {homeRoute('/home', dynamicLoad)}
            </Route> */}
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={MainPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
