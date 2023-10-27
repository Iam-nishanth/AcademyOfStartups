import * as yup from 'yup';


export const registerSchema = yup.object().shape({
    email: yup.string().email().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).required('Email is required'),
    password: yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*()<>?]).{8,}$/).required('Password is required'),
    name: yup.string().required('Name is required'),
});

export const InvestorValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    name: yup.string().required(),
    gender: yup.string().required(),
    phoneNo: yup.string().min(10).max(10).required(),
    address: yup.string().required(),
    image: yup.mixed().optional(), // Yup won't validate this field, but it will be present in the schema
    investorType: yup.string().required(),
    investmentRange: yup.string().required(),
    domainsOfInterest: yup.array().of(yup.string()).required(),
    existingInvestments: yup.mixed().optional(), // Yup won't validate this field, but it will be present in the schema
});