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

const store = configureStore();

const App = () => {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState("");
    const [graphData, setGraphData] = useState(null);

    console.log(accounts);
    const handleLogin = async () => {
        try {
            await instance.loginRedirect();
        } catch (err) {
            console.error(err);
        }
    };

    const acquireToken = () => {
        console.log(accounts);
        instance
            .acquireTokenSilent({
                ...msalConfig.auth.scopes,
                account: accounts[0]
            })
            .then(response => {
                callMsGraph(response.accessToken).then(response =>
                    setGraphData(response)
                );
            });
    };

    useEffect(() => {
        accounts.length && acquireToken();
    }, [accounts]);

    const handleLogout = () => {
        instance.logout();
    };

    useEffect(() => {
        console.log(graphData);
    }, [graphData]);

    const isAuthenticated = useIsAuthenticated();
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
                            <button onClick={handleLogin}>Sign In</button>
                        </UnauthenticatedTemplate>
                    </div>
                </Router>
            </Provider>
        </div>
    );
};
export default App;
