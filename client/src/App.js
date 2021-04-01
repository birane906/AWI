import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"
import Festivals from "./components/festival/Festivals"
import Jeux from "./components/jeu/Jeux"
import Zones from "./components/zone/Zones"
import Suivis from "./components/suivi/Suivis"
import Exposants from "./components/exposant/Exposant"
import FestivalDetails from "./components/festival/FestivalDetails";
import Homepage from "./components/home/Homepage"
import Reservations from "./components/reservation/Reservations";

const App = () => {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login} />
                <Route exact path="/dashboard">
                    <Redirect to="/dashboard/home" />
                </Route>
                <Route path="/dashboard" component={() =>
                    <Dashboard>
                        <Homepage title="Homepage" path="/dashboard/home"/>
                        <Festivals title="Festivals" path="/dashboard/festivals" />
                        <Reservations title="Réservations" path="/dashboard/reservations" />
                        <Exposants title="Exposants" path="/dashboard/exposant"/>
                        <Jeux title="Jeux" path="/dashboard/jeux"/>
                        <Zones title="Zones" path="/dashboard/zones"/>
                        <Suivis title="Suivis" path="/dashboard/suivis"/>
                    </Dashboard>
                } />
                <Route path="/dashboard/festivals/:pathFestival" children={<FestivalDetails />} />
                <Route >
                    <Redirect to="/dashboard/home"/>
                </Route>
            </Router>
        </div>
    );
};

export default App;
