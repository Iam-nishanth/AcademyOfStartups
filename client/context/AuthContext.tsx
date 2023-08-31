import React, { createContext, useReducer, useEffect } from "react";
import { AuthContextProviderProps, AuthContextType, Startup, State, Action } from '@/types/AuthTypes';
import { start } from "repl";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                loading: false,
                startup: action.payload.startup
            };
        case 'LOGOUT':
            return {
                user: null,
                startup: null,
                loading: false
            };
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
};

const initialState: State = {
    user: null,
    loading: true,
    startup: null
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const startup = localStorage.getItem('startup');

        if (user) {
            const userObject = JSON.parse(user);
            const startupObject = startup ? JSON.parse(startup) : null;

            dispatch({
                type: 'LOGIN',
                payload: {
                    user: userObject,
                    startup: startupObject
                }
            });

            dispatch({ type: 'LOADING', payload: false });
        } else {
            dispatch({ type: 'LOADING', payload: false });
        }
    }, []);


    console.log("AuthContext", state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}
