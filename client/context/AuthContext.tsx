import React, { createContext, useReducer, useEffect } from "react";
import { AuthContextProviderProps, AuthContextType, State, Action } from '@/types/AuthTypes';
import { decryptResponse } from "@/lib/encryption";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                loading: false,
                business: action.payload.business,
                token: action.payload.token,
                investorData: state.investorData
            };
        case 'LOGOUT':
            return {
                user: null,
                business: null,
                loading: false,
                token: null,
                investorData: state.investorData
            };
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'EDIT':
            return {
                ...state,
                business: action.payload
            }
        case 'INVESTOR':
            return {
                ...state,
                investorData: action.payload
            }
        case 'INVESTOR_LOGOUT':
            return {
                ...state,
                investorData: null
            }
        case 'VERIFY_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

const initialState: State = {
    user: null,
    loading: true,
    business: null,
    token: null,
    investorData: null
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const business = localStorage.getItem('business');
        const token = localStorage.getItem('token');
        const investor = localStorage.getItem('investor');

        if (user && business && token) {
            const userObject = decryptResponse(JSON.parse(user), process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string);
            const businessObject = business ? decryptResponse(JSON.parse(business), process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string) : null;
            const AccessToken = token ? JSON.parse(token) : null;
            const InvestorObject = investor ? JSON.parse(investor) : null;

            dispatch({
                type: 'LOGIN',
                payload: {
                    user: userObject,
                    business: businessObject,
                    token: AccessToken
                },
            });
            dispatch({
                type: 'INVESTOR',
                payload: InvestorObject
            })

            dispatch({ type: 'LOADING', payload: false });
        }
        else if (user && !business && !token) {
            const userObject = JSON.parse(user);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user: userObject,
                },
            });
            dispatch({ type: 'LOADING', payload: false });
        }
        else if (investor) {
            const InvestorObject = investor ? JSON.parse(investor) : null;
            dispatch({
                type: 'INVESTOR',
                payload: InvestorObject
            })

            dispatch({ type: 'LOADING', payload: false });
        }
        else {
            dispatch({ type: 'LOADING', payload: false });
        }
    }, []);


    // console.log("AuthContext", state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider >
    );
}
