import React from "react";
import { Router, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history"
import './App.css';

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"

const browserHistory = createBrowserHistory()

const App = () => {
    return (
        <div>
            <Router history={browserHistory}>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Router>            
        </div>
    );
};

export default App;
