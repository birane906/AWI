import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"
import TestComponent from "./components/dashboard/TestComponent"
import Festivals from "./components/festival/Festivals"
import Jeux from "./components/jeu/Jeux"
import Zones from "./components/zone/Zones"
import Suivis from "./components/suivi/Suivis"
import Exposants from "./components/exposant/Exposant"
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
                        <Festivals title="Festivals" path="/dashboard/festivals" />
                        <Exposants title="Exposants" path="/dashboard/exposant"/>
                        <Jeux title="Jeux" path="/dashboard/jeux"/>
                        <Zones title="Zones" path="/dashboard/zones"/>
                        <Suivis title="Suivis" path="/dashboard/suivis"/>
                    </Dashboard>
                } />
                <Route path="/dashboard/festivals/:pathFestival" children={<FestivalDetails />} />
            </Router>
        </div>
    );
};

export default App;
