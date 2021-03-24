import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"
import TestComponent from "./components/dashboard/TestComponent"
import Festivals from "./components/festival/Festivals"
import Jeux from "./components/jeu/Jeux"
import FestivalDetails from "./components/festival/FestivalDetails";

const history = createBrowserHistory();

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={() =>
                    <Dashboard>
                        <Festivals title="festivals" path="/dashboard/festivals" />
                        <Jeux title="Jeux" path="/dashboard/jeux" />
                        <TestComponent title="Welcome" path="/dashboard/welcome" />
                        <TestComponent title="Hi" path="/dashboard/hi" />
                        <TestComponent title="Hello" path="/dashboard/hello" />
                        <TestComponent title="Sup" path="/dashboard/sup" />
                    </Dashboard>
                } />
                <Route path="/dashboard/festivals/:pathFestival" children={<FestivalDetails />} />
            </Router>
        </div>
    );
};

export default App;
