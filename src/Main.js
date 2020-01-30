import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../src/Login';
import Home from '../src/Login';
import Admin from '../src/Admin';
import Patient from '../src/Patient';
import Doctor from '../src/Login';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/patient" component={Patient}></Route>
            <Route exact path="/doctor" component={Doctor}></Route>
        </Switch>
    );
};

export default Main;
