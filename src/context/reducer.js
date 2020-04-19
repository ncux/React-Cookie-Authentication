import { LOGOUT_USER, SET_IS_AUTHENTICATED, SET_LOADING } from "./types";

export const Reducer = (state, action) => {

    switch (action.type) {

        case SET_LOADING:
            return { ...state,
                loading: true
            };

        case SET_IS_AUTHENTICATED:
            return { ...state,
                loading: false,
                isAuthenticated: true
            };

        case LOGOUT_USER:
            return { ...state,
                loading: false,
                isAuthenticated: false
            };

        default:
            return state;
    }
};

