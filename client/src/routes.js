import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NoMatch from "./components/Test/NoMatch";
import { Provider } from "react-redux";
import MainPage from "./Pages/HomePage";
import Cookies from "universal-cookie";
import { AuthProvider } from "./components/auth.context";
import jwt_decode from "jwt-decode";
import TablePage from "./Pages/TablePage";
import CodeReviewPage from "./Pages/CodeReviewPage";
import ReportsPage from "./Pages/ReportsPage";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import MainDashboardEntry from "./components/MainDashboardEntry";
import configureStore from "./store/main";
import css from "./routes.css";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ClientScorePage from "./Pages/ClientScorePage";
import EmployeeScorePage from "./Pages/EmployeeScorePage";

const store = configureStore();

const App = () => {
    const cookies = new Cookies();
    let tokenData = cookies.get("my_cookie");
    if (tokenData) {
        const decoded_token = jwt_decode(tokenData);
        const Emp_designation = decoded_token.Emp_designation;
        const Emp_id = decoded_token.Emp_id;
    }

    return (
        <div>
            {
                <Provider store={store}>
                    {/* <AuthProvider tokenData={tokenData}> */}
                    <Router>
                        <div className={css.appContainerDiv}>
                            <Navbar />
                            <div className={css.mainContainerDiv}>
                                <SidebarContainer />
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        component={MainPage}
                                    />
                                    <Route
                                        path="/category"
                                        component={MainDashboardEntry}
                                    />
                                    <Route
                                        path="/client-score"
                                        component={ClientScorePage}
                                    />
                                    {/* <ProtectedRoute
                    path="/Table"
                    component={MainDashboardEntry}
                  /> */}
                                    <Route
                                        path="/CodeReview"
                                        component={CodeReviewPage}
                                    />
                                    <Route
                                        path="/Reports"
                                        component={ReportsPage}
                                    />
                                    <Route
                                        path="/employee-score"
                                        component={EmployeeScorePage}
                                    />

                                    <Route component={NoMatch} />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                    {/* </AuthProvider> */}
                </Provider>
            }
        </div>
    );
};
export default App;
