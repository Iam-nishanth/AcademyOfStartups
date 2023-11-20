import React from 'react'
import * as yup from 'yup'
import { Investors } from '@/types/Logintypes'
import {
    AdminBusiness,
    InputDiv,
    Input,
    Error,
    Label,
    Required,
} from "@/styles/views/StartupsStyles";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CommonButton } from '../../Common/Button';
import { Radio, Select, message } from 'antd';
import axios from '@/lib/axios';
import { domainOptions, investmentRangeOptions } from '../../InvestorForm/Data';
import ImageUpload from '@/components/Common/ImageUpload';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useRouter } from 'next/router';

const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;


const InvestorValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    gender: yup.string().required("Gender is required"),
    phoneNo: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required("Phone is required"),

    address: yup.string().required("Address is required"),
    investorType: yup.string().required("Investor type is required"),
    investmentRange: yup
        .string()
        .oneOf(investmentRangeOptions.map((option) => option.value)).required("Investment range is required"),
    domainsOfInterest: yup.array().required("Domains are required"),
    existingInvestments: yup.string(),
    password: yup.string().matches(passwordRegex, "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters").required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match"),
});



const AddInvestor = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(InvestorValidationSchema),
    });

    const [base64Image, setBase64Image] = React.useState<string>("");
    const { token, dispatch } = useAuthContext();
    const router = useRouter();

    const handleImageUpload = (image: string) => {
        setBase64Image(image);
    };


    const onSubmit = async (data: any) => {

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phoneNo", data.phoneNo);
        formData.append("password", data.password);
        formData.append("confirmPassword", data.confirmPassword);
        formData.append("address", data.address);
        formData.append("investorType", data.investorType);
        formData.append("investmentRange", data.investmentRange);
        formData.append("domainsOfInterest", JSON.stringify(data.domainsOfInterest));
        formData.append("existingInvestments", data.existingInvestments);
        formData.append("image", base64Image);
        formData.append("gender", data.gender);

        try {
            const loadingMessage = message.loading("Submitting form...", 0);
            const response = await axios.post("/admin/add-investor", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }
            );
            console.log(response);
            if (response.status === 201) {
                loadingMessage();
                message.success("Form submitted successfully");

                setTimeout(() => {
                    reset();
                    window.location.reload();
                }, 1500);
            }
        } catch (error: any) {
            message.destroy();
            console.log(error);
            if (error.response.status === 401) {
                message.error('Token Expired, Please Login Again');
                localStorage.removeItem('user');
                localStorage.removeItem('business');
                localStorage.removeItem('token');
                dispatch({ type: 'LOGOUT' });

                router.replace('/login');
            }
            else if (error.response.status === 500) {
                message.error('Internal Server Error')
            }
        }
    };


    return (
        <AdminBusiness onSubmit={handleSubmit(onSubmit)}>
            <InputDiv>
                <Label>
                    Name<Required>*</Required>
                </Label>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input placeholder="Name" {...field} />}
                />
                {errors.name && <Error>{errors.name.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Email<Required>*</Required>
                </Label>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input placeholder="Email" {...field} />}
                />
                {errors.email && <Error>{errors.email.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>Gender<Required>*</Required></Label>
                <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Radio.Group {...field}>
                            <Radio value="Male">Male</Radio>
                            <Radio value="Female">Female</Radio>
                        </Radio.Group>
                    )}
                />
                {errors.gender && <Error>{errors.gender.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Phone No.<Required>*</Required>
                </Label>
                <Controller
                    name="phoneNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input placeholder="Phone" {...field} />}
                />
                {errors.phoneNo && <Error>{errors.phoneNo.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>Investor Type<Required>*</Required></Label>
                <Controller
                    name="investorType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Radio.Group {...field}>
                            <Radio value="Angel">Angel</Radio>
                            <Radio value="Venture Capitalist">Venture Capitalist</Radio>
                        </Radio.Group>
                    )}
                />
                {errors.investorType && <Error>{errors.investorType.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>Investment Range<Required>*</Required></Label>
                <Controller
                    name="investmentRange"
                    control={control}
                    render={({ field }) => (
                        <Select
                            placeholder="select your Investment Range"
                            options={investmentRangeOptions}
                            {...field}
                        />
                    )}
                />
                {errors.investmentRange && <Error>{errors.investmentRange.message}</Error>}
            </InputDiv>



            <InputDiv>
                <Label>Interested Domains<Required>*</Required></Label>
                <Controller
                    name="domainsOfInterest"
                    control={control}
                    render={({ field }) => (
                        <Select
                            mode="multiple"
                            placeholder="select one or more domains"
                            options={domainOptions}
                            {...field}
                        />
                    )}
                />
                {errors.domainsOfInterest && <Error>{errors.domainsOfInterest.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>Existing Investments <span>(optional)</span></Label>
                <Controller
                    name="existingInvestments"
                    control={control}
                    render={({ field }) => (
                        <Input placeholder="Existing Investments" {...field} />
                    )}
                />
                {errors.existingInvestments && <Error>{errors.existingInvestments.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Address<Required>*</Required>
                </Label>
                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input placeholder="Please give complete address" {...field} />
                    )}
                />
                {errors.address && <Error>{errors.address.message}</Error>}
            </InputDiv>
            <InputDiv>
                <Label>
                    Set Password<Required>*</Required>
                </Label>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input placeholder="Enter your Password" type="password" {...field} />
                    )}
                />
                {errors.password && <Error>{errors.password.message}</Error>}
            </InputDiv>
            <InputDiv>
                <Label>
                    Confirm Password<Required>*</Required>
                </Label>
                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input placeholder="Confirm Password" type="password" {...field} />
                    )}
                />
                {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
            </InputDiv>
            <InputDiv>
                <Label>Profile Image :</Label>
                <div style={{ padding: "10px 40px" }}>
                    <ImageUpload onImageUpload={handleImageUpload} />
                </div>
            </InputDiv>


            <CommonButton name="Submit" width="30%" height="40px" />
        </AdminBusiness>
    )
}

export default AddInvestor