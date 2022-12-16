import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NoMatch from './components/Test/NoMatch';
import configureStore from './store/main';
import { Provider } from 'react-redux';
import MainPage from './Pages/HomePage';
import Cookies from 'universal-cookie';
import { AuthProvider } from './components/auth.context';
import jwt_decode from 'jwt-decode';
import TablePage from '../src/Pages/TablePage';
import CodeReview from './Pages/CodeReview';

const store = configureStore();

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
        <Router>
          <div>
            <Switch store={store}>
              <Route exact path="/" component={MainPage} />
              <Route path="/Table" component={TablePage} />
              <Route path="/CodeReview" component={CodeReview} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
