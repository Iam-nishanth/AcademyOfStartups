import React, { createContext, useReducer, ReactNode, Dispatch, useEffect, useCallback } from "react";

interface User {
    id: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

interface State {
    user: User | null;
    loading: boolean;
}

interface Action {
    type: string;
    payload?: any;
}

type AuthContextType = {
    dispatch: Dispatch<Action>;
    user: User | null | undefined;
    loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload,
                loading: false
            };
        case 'LOGOUT':
            return {
                user: null,
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


interface AuthContextProviderProps {
    children: ReactNode;
}

const initialState: State = {
    user: null,
    loading: true
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: JSON.parse(user)
            });

            // Set loading to false after user is fetched
            dispatch({ type: 'LOADING', payload: false });
        } else {
            // Set loading to false if user is not found
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
