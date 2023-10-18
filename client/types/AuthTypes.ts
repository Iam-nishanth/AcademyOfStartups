import { Dispatch, ReactNode } from "react";

export interface User {
    id: string;
    name: string;
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
    token: string | null;
    investorData?: InvestorInterface | null;
}
export interface Business {
    id: string;
    businessEmail: string;
    ownerName: string;
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
    Logo?: string | null;
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
    token: string | null | undefined;
    investorData?: InvestorInterface | null | undefined;
};

export interface AuthContextProviderProps {
    children: ReactNode;
}

export interface InvestorResponse {
    auth: boolean;
    investor: Investor | null;
    investorInfo: InvestorInfo | null;
}

export interface InvestorInterface {
    investor: Investor;
    investorInfo: InvestorInfo;
}

export interface Investor {
    id: string;
    role: string;
    gender: string;
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface InvestorInfo {
    id: string;
    PhoneNo: string;
    Address: string;
    Image: null;
    InvestorType: string;
    InvestmentRange: string;
    DomainsOfInterest: string[];
    ExistingInvestments: string;
}
