export interface User {
    id: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
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
  
  export interface LoginResponse {
    auth: boolean;
    accessToken: string;
    refreshToken: string;
    user: User;
    business: Business;
  }