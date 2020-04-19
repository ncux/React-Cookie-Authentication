import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login } from "./components/login/login";
import { Dashboard } from "./components/dashboard/dashboard";
import { AuthContext } from "./context/authentication";

const RouteGuard = ({ component: Component, ...rest }) => {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Route
            { ...rest }
            render = {
                () => isAuthenticated ? (<Component />) : (<Redirect to="/login" />)
            }
        />
    );
};

const LoginGuard = ({ component: Component, ...rest }) => {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Route
            { ...rest }
            render = {
                () => !isAuthenticated ? (<Component />) : (<Redirect to="/dashboard" />)
            }
        />
    );
};

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <LoginGuard exact path="/login" component={ Login } />
                <RouteGuard exact path="/dashboard" component={ Dashboard } />
            </Switch>
        </BrowserRouter>
    );

};
