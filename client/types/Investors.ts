export interface GetInvestors {
    response: object
    data: object
    investors: Investor[]
    map: object
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
    InvestorInfo: InvestorInfo[];
}

export interface InvestorInfo {
    id: string;
    PhoneNo: string;
    Address: string;
    Image: String | null;
    InvestorType: string;
    InvestmentRange: string;
    DomainsOfInterest: string[];
    ExistingInvestments: null;
}