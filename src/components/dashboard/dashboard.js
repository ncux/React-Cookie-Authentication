import React, { useContext } from 'react';
import { AuthContext } from "../../context/authentication";
import cx from "classnames";
import styles from "./dashboard.module.css";

export const Dashboard = props => {

    const { isAuthenticated, logoutUser } = useContext(AuthContext);

    const logout = () => {
        if(isAuthenticated) {
            logoutUser();
        }
    };

    return (
        <div className={ cx(styles.container ) }>
            <h1>Dashboard!</h1>
            <button type="button" onClick={ logout } className={ styles.button }>Logout</button>
        </div>
    );

};

