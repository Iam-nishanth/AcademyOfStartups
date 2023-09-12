import { Dispatch, ReactNode } from "react";

export interface User {
    id: string;
    userEmail: string;
    password: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    business: Business | null;
}


export interface State {
    user: User | null;
    loading: boolean;
    business: Business | null;
}
export interface Business {
    id: string;
    businessEmail: string;
    name: string;
    phoneNo: string;
    businessName: string;
    businessCategory: string;
    registrationType: string;
    productOrService: string;
    incNo: string;
    companyWebsite: string;
    panNo: string;
    gstNo: string;
    itrPerYear: string;
    address: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Action {
    type: string;
    payload?: any;
}

export type AuthContextType = {
    dispatch: Dispatch<Action>;
    user: User | null | undefined;
    loading: boolean;
    business: Business | null | undefined;
};

export interface AuthContextProviderProps {
    children: ReactNode;
}