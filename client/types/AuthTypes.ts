import { Dispatch, ReactNode } from "react";

export interface User {
    id: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    startup: Startup | null;
}

export interface State {
    user: User | null;
    loading: boolean;
    startup: Startup | null;
}
export interface Startup {
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
    startup: Startup | null | undefined;
};

export interface AuthContextProviderProps {
    children: ReactNode;
}