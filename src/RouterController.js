import React from "react";

import { Route, Switch } from "react-router-dom";

import HomeController from './pages/home/HomeController';


export default function RouterController() {
    return (
        <Switch>
            <Route path="/home">
                <HomeController/>
            </Route>
        </Switch>
    );
}