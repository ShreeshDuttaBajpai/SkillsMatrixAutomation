import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NoMatch from "./components/Test/NoMatch";
import { Provider } from "react-redux";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import Navbar from "./components/Navbar/Navbar";
import configureStore from "./store/main";
import css from "./routes.css";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ClientScorePage from "./Pages/ClientScorePage";
import EmployeeScorePage from "./Pages/EmployeeScorePage";
import SkillMatrixPage from "./Pages/SkillMatrixPage";
import ClientsCardContainer from "./components/ClientsCard/ClientsCardContainer";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";
import EmployeePage from "./Pages/EmployeePage";

const store = configureStore();

const App = () => {
    const cookies = new Cookies();
    let tokenData = cookies.get("my_cookie");
    if (tokenData) {
        const decoded_token = jwt_decode(tokenData);
    }
    // const store = useStore();
    console.log(store.getState().skillMatrixOps.clients);

    return (
        <div>
            {
                <Provider store={store}>
                    <Router>
                        <div className={css.appContainerDiv}>
                            <Navbar />
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
                                        component={EmployeePage} />
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
                        </div>
                    </Router>
                </Provider>
            }
        </div>
    );
};
export default App;
