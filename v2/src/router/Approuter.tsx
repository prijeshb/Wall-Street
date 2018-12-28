import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../components/Home"
import Buy from "../components/Buy"
import View from "../components/View"
import Assets from "../components/Assets"
import Signup from "../components/Signup"
import Signin from "../components/Signin"
import LogOut from "../components/LogOut"

export default () => (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/buy" component={Buy} exact/>
            <Route path="/view" component={View} exact/>
            <Route path="/assets" component={Assets} exact/>
            <Route path="/signup" component={Signup} exact/>
            <Route path="/login" component={Signin} exact/>
            <Route path="/logout" component={LogOut} exact/>
        </Switch>
    </Router>
);