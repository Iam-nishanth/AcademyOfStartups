import React, { createContext, useReducer, useEffect } from "react";
import { AuthContextProviderProps, AuthContextType, Business, State, Action } from '@/types/AuthTypes';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                loading: false,
                business: action.payload.business
            };
        case 'LOGOUT':
            return {
                user: null,
                business: null,
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
    business: null
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const business = localStorage.getItem('business');

        if (user) {
            const userObject = JSON.parse(user);
            const businessObject = business ? JSON.parse(business) : null;

            dispatch({
                type: 'LOGIN',
                payload: {
                    user: userObject,
                    business: businessObject
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
