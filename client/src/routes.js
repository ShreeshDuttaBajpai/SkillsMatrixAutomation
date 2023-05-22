import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NoMatch from "./components/Test/NoMatch";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import configureStore from "./store/main";
import css from "./routes.css";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ClientScorePage from "./Pages/ClientScorePage";
import EmployeeScorePage from "./Pages/EmployeeScorePage";
import SkillMatrixPage from "./Pages/SkillMatrixPage";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";
import EmployeePage from "./Pages/EmployeePage";
import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
    useIsAuthenticated,
    useMsal
} from "@azure/msal-react";
import { useEffect } from "react";
import msalInstance, { msalConfig } from "./msalConfig";
import { callMsGraph } from "./graph";
import { acquireToken, handleLogin } from "./commonFunctions";

const store = configureStore();

const App = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        accounts.length && acquireToken(instance, accounts, setGraphData);
    }, [accounts]);

    useEffect(() => {});

    return (
        <div>
            <Provider store={store}>
                <Router>
                    <div className={css.appContainerDiv}>
                        <Navbar />
                        <AuthenticatedTemplate>
                            <div className={css.mainContainerDiv}>
                                <SidebarContainer />
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        component={HomePage}
                                    />
                                    <Route
                                        path="/category"
                                        component={CategoryPage}
                                    />
                                    <Route
                                        path="/employee"
                                        component={EmployeePage}
                                    />
                                    <Route
                                        path="/client-score"
                                        component={ClientScorePage}
                                    />
                                    <Route
                                        path="/employee-score"
                                        component={EmployeeScorePage}
                                    />
                                    <Route
                                        path="/skill-matrix"
                                        component={SkillMatrixPage}
                                    />

                                    <Route component={NoMatch} />
                                </Switch>
                            </div>
                        </AuthenticatedTemplate>
                        <UnauthenticatedTemplate>
                            <div className={css.unauthenticatedLayout}>
                                <div className={css.loginText}>
                                    Please login to continue
                                </div>
                                <button
                                    onClick={() => handleLogin(instance)}
                                    className={css.loginBtn}
                                >
                                    Sign In
                                </button>
                            </div>
                        </UnauthenticatedTemplate>
                    </div>
                </Router>
            </Provider>
        </div>
    );
};
export default App;
