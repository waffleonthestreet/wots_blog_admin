import PropTypes from "prop-types";
import React, {createContext, useEffect, useReducer} from "react";
import axios from '../utils/axios'

// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const {isAuthenticated, user} = action.payload;
        return {
            ...state,
            isAuthenticated,
            user,
            isInitialized: true,
        };
    },
    LOGIN: (state, action) => {
        const {user} = action.payload;
        return {
            ...state,
            user,
            isAuthenticated: true,
        };
    },
    LOGOUT: (state) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        };
    },
};

const reducer = (state, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
    ...initialState,
    method: "jwt",
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");

                if (accessToken) {
                    localStorage.setItem("accessToken", accessToken);

                    // const response = await axios.get('/api/account/my-account');
                    // const {user} = response.data

                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user: {
                                id: "woojong610",
                                name: "Woojeong Kim",
                            },
                        },
                    });
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
    }, []);

    const login = async (id, password) => {
        const {data} = await axios.get(`/admin/user?id=${id}&pw=${password}`);

        if (!data) {
            return;
        }
        // const { accessToken, user } = response.data;
        const accessToken = "1234";
        const user = data;

        localStorage.setItem("accessToken", accessToken);

        dispatch({
            type: "LOGIN",
            payload: {
                user,
            },
        });
    };

    const logout = async () => {
        localStorage.removeItem("accessToken");
        dispatch({type: "LOGOUT"});
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: "jwt",
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};
