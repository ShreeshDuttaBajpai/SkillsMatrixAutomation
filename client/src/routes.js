import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NoMatch from './components/Test/NoMatch';
import configureStore from './store/main';
import { Provider } from 'react-redux';
import MainPage from './Pages/HomePage';
import Cookies from 'universal-cookie';
import { AuthProvider, useAuth } from './components/auth.context';
import jwt_decode from 'jwt-decode';
import TablePage from '../src/Pages/TablePage';
import CodeReview from './Pages/CodeReview';
import ReportsPage from './Pages/ReportsPage';
import Navbar from './components/Navbar/Navbar';
// import InactivityLogout from "./components/InactivityLogout";
import ProtectedRoute from "./components/ProtectedRoute";
import MainDashboardEntry from "./components/MainDashboardEntry";
// import {logout} from './components/auth.context';
// import TablesContainer from './components/TableComponent/TablesContainer';
// import HomePageContainer from "./components/HomePage/HomePageMainComponent/HomePageContainer";

// const {logout} = useAuth();
const store = configureStore();

const App = () => {
  const cookies = new Cookies();
  let tokenData = cookies.get('my_cookie');
  if (tokenData) {
    const decoded_token = jwt_decode(tokenData);
    const Emp_designation = decoded_token.Emp_designation;
  }

  return <div>
    {
  <Provider store={store}>
  <AuthProvider tokenData={tokenData}>
    <Router>
      <div>
      <Navbar />
        <Switch store={store}>
          <Route exact path="/" component={MainPage} />
          <ProtectedRoute path="/Table" component={MainDashboardEntry} />
          <ProtectedRoute path="/CodeReview" component={CodeReview} />
          <ProtectedRoute path="/Reports" component={ReportsPage}/>

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </AuthProvider>
</Provider>}</div>;
};

export default App;
