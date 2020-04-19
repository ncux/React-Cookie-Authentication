import React, { useContext } from 'react';
import styles from './login.module.css'
import cx from 'classnames';
import { AuthContext } from "../../context/authentication";


export const Login = props => {

    const { isAuthenticated, loginUser } = useContext(AuthContext);

    const login = () => {
        if(isAuthenticated) return;
        loginUser();
    };

    return (
        <div className={ cx(styles.container ) }>
            <button type="button" onClick={ login } className={ styles.button }>Login</button>
        </div>
    );

};

