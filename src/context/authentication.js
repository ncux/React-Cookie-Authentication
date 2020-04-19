import React, { useEffect, useReducer, createContext } from 'react';
import Cookies from 'js-cookie';
import { Reducer } from "./reducer";
import { LOGOUT_USER, SET_IS_AUTHENTICATED, SET_LOADING } from "./types";

const GlobalState = {
    loading: false,
    isAuthenticated: false,
};

export const AuthContext = createContext(GlobalState);

export const AuthState = ({ children }) => {

    useEffect(() => {
        checkIfUserIsAuthenticated();
    }, []);

    const [state, dispatch] = useReducer(Reducer, GlobalState);

    const setLoading = () => dispatch({ type: SET_LOADING });

    const setIsAuthenticated = () => {
        setLoading();
        return dispatch({ type: SET_IS_AUTHENTICATED });
    };

    const loginUser = () => {
        setLoading();
        Cookies.set('user', 'isLoggedIn', { expires: 7 });
        return dispatch({ type: SET_IS_AUTHENTICATED });
    };

    const logoutUser = () => {
        setLoading();
        Cookies.remove('user');
        return dispatch({ type: LOGOUT_USER });
    };

    const checkIfUserIsAuthenticated = () => {
        const user = Cookies.get('user');
        if(user) {
            return dispatch({ type: SET_IS_AUTHENTICATED });
        }
    };


    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            isAuthenticated: state.isAuthenticated,
            setIsAuthenticated,
            loginUser,
            logoutUser
        }}>
            { children }
        </AuthContext.Provider>
    )

};
