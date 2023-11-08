import * as yup from "yup";

const phoneRegExp = /^\d{10}$/;
const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;


export const LoginValidationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
});
export const RegisterValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    password: yup.string().matches(passwordRegex, "Password must contain at least 1 number, 1 uppercase and lowercase letter,and not less than 8 characters").required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
});

export const StartupValidationSchma = yup.object().shape({
    ownerName: yup.string().required("Name is required"),
    businessEmail: yup.string().email("Invalid email").required("Email is required"),
    phoneNo: yup
        .string()
        .matches(phoneRegExp, "Phone number must be 10 digits")
        .required("Phone is required"),
    businessName: yup.string().required("Business Name is required"),
    businessCategory: yup.string().required("Business Category is required"),
    registrationType: yup
        .string()
        .required("Business Registration Type is required"),
    productOrService: yup.string().required("Business Type is required"),
    companyWebsite: yup.string().url("Invalid URL").typeError("Invalid URL"),
    gstNo: yup.string(),
    incNo: yup.string().required("INC No. of Company is required"),
    panNo: yup.string().required("PAN No. of Company is required"),
    itrPerYear: yup.string().required("Income Tax Return is required"),
    address: yup.string().required("Address of the company is required"),
    Status: yup.string().required("Status is required"),
});


