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
  token: string;
  refreshToken: string;
  user: User;
  business: Business;
}

export interface RegisterResponse {
  id: string;
  name: string;
  role: string;
  userEmail: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}


export interface Investors {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  confirmPassword: string | undefined | null;
  address: string;
  investorType: string;
  investmentRange: string;
  domainsOfInterest: string[];
  existingInvestments?: string;
}