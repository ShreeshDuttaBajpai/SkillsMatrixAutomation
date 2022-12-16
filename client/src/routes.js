import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NoMatch from './components/Test/NoMatch';
import configureStore from './store/main';
import { Provider } from 'react-redux';
// import dynamicLoader from './components/layout/loader';
// import AppContainer from './components/layout/AppContainer';
// import Home from './components/Test/HomeContainer';
import MainPage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';
import Cookies from 'universal-cookie';
import { AuthProvider } from './components/auth.context';
import { useAuth } from '../src/components/auth.context';
import jwt_decode from 'jwt-decode';
// import { Table } from '@material-ui/core';
import TablePage from '../src/Pages/TablePage';

const store = configureStore();
// const dynamicLoad = dynamicLoader(store);

const cookies = new Cookies();
let tokenData = cookies.get('my_cookie');

if (tokenData) {
  const decoded_token = jwt_decode(tokenData);
  const Emp_designation = decoded_token.Emp_designation;
}

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider tokenData={tokenData}>
        {/* let Emp_designation = '';

  if (userToken) {
    const decoded_token = jwt_Decode(userToken);
    Emp_designation = decoded_token.Emp_designation;
  } */}
        <Router>
          <div>
            <Switch store={store}>
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/Home" exact component={MainPage} />
              <Route path="/User" component={UserPage} />
              <Route path="/Admin" component={AdminPage} />
              <Route path="/Table" component={TablePage} />
              if (Emp_designation=="Associate Software Engineer")
              {
                <Route>
                  <Route path="/User" component={UserPage} />
                </Route>
              }
              else
              {<Route path="/Admin" component={AdminPage} />}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
