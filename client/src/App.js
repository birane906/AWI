import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"
import TestComponent from "./components/dashboard/TestComponent"
import Festivals from "./components/festival/Festivals"
import Jeux from "./components/jeu/Jeux"
import JeuxReserves from "./components/jeuReserve/JeuxReserves"

const App = () => {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={() => 
                    <Dashboard>
                        <Festivals title="festivals" path="/dashboard/festivals"/>
                        <Jeux title="Jeux" path="/dashboard/jeux"/>
                        <JeuxReserves title="JeuxReserves" path="/dashboard/jeuReserve"/>
                        <TestComponent title="Welcome" path="/dashboard/welcome"/>
                        <TestComponent title="Hi" path="/dashboard/hi"/>
                        <TestComponent title="Hello" path="/dashboard/hello"/>
                        <TestComponent title="Sup" path="/dashboard/sup"/>
                        
                    </Dashboard>
                }/>
            </Router>            
        </div>
    );
};

export default App;
