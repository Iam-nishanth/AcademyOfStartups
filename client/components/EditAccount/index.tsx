import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Radio, Select } from 'antd';
import {
    ModalInputContainer,
    InputDiv,
    Input,
    Error,
    Label,
    Required,
} from "@/styles/views/StartupsStyles";
import { CommonButton } from '../Common/Button';

const schema = yup.object().shape({
    businessName: yup.string().required('Business Name is required'),
    phoneNo: yup.string().required('Phone No is required'),
    businessCategory: yup.string().required('Business Category is required'),
    registrationType: yup.string().required('Business Registration Type is required'),
    productOrService: yup.string().required('Business Type is required'),
    incNo: yup.string().required('INC No. is required'),
    companyWebsite: yup.string().url('Invalid URL').required('Website Address is required'),
    panNo: yup.string().required('Business PAN is required'),
    gstNo: yup.string().required('GST No. is required'),
    itrPerYear: yup.string().required('ITR per Year is required'),
    address: yup.string().required('Address is required'),
});

export interface BusinessFormData {
    businessName: string;
    phoneNo: string;
    businessCategory: string;
    registrationType: string;
    productOrService: string;
    incNo: string;
    companyWebsite: string;
    panNo: string;
    gstNo: string | null | undefined;
    itrPerYear: string;
    address: string;
}


const EditBusinessForm = ({ onSubmit }: { onSubmit: (data: BusinessFormData) => void }) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });



    const { business } = useAuthContext();




    const submitForm = (data: BusinessFormData) => {
        onSubmit(data);
    };


    return (
        <ModalInputContainer onSubmit={handleSubmit(submitForm)}>
            <InputDiv>
                <Label>
                    Business Name<Required>*</Required>
                </Label>
                <Controller
                    name="businessName"
                    control={control}
                    defaultValue={business?.businessName}
                    render={({ field }) => (
                        <Input placeholder="Business Name" {...field} />
                    )}
                />
                {errors.businessName && <Error>{errors.businessName.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Phone No.<Required>*</Required>
                </Label>
                <Controller
                    name="phoneNo"
                    control={control}
                    defaultValue={business?.phoneNo}
                    render={({ field }) => <Input placeholder="Phone" {...field} />}
                />
                {errors.phoneNo && <Error>{errors.phoneNo.message}</Error>}
            </InputDiv>
            <InputDiv>
                <Label>
                    Business Category<Required>*</Required>
                </Label>
                <Controller
                    name="businessCategory"
                    control={control}
                    defaultValue={business?.businessCategory}
                    render={({ field }) => (
                        <Select
                            options={[
                                { value: undefined, label: "select", disabled: true },
                                { value: "Life Style", label: "Life Style Startup" },
                                { value: "Small Scale", label: "Small Scale Startup" },
                                { value: "Large Scale", label: "Large Scale Startup" },
                                { value: "Scalable", label: "Scalable Startup" },
                                { value: "Buyable", label: "Buyable Startup" },
                                { value: "Social", label: "Social Startup" },
                            ]}
                            {...field}
                        />
                    )}
                />
                {errors.businessCategory && (
                    <Error>{errors.businessCategory.message}</Error>
                )}
            </InputDiv>

            <InputDiv>
                <Label>
                    Business Registration Type<Required>*</Required>
                </Label>
                <Controller
                    name="registrationType"
                    control={control}
                    defaultValue={business?.registrationType}
                    render={({ field }) => (
                        <Select
                            placeholder="Business Registration Type"
                            options={[
                                { value: undefined, label: "select", disabled: true },
                                { value: "Proprietorship", label: "Proprietorship" },
                                { value: "Partnership", label: "Partnership" },
                                {
                                    value: "Limited Liability Partenship",
                                    label: "Limited liability partnership (LLP)",
                                },
                                { value: "Public Limited", label: "Public Limited" },
                                {
                                    value: "Private Limited",
                                    label: "Private Limited (Pvt.Ltd.)",
                                },
                                {
                                    value: "OPC Pvt.ltd.",
                                    label: "One Person Company (OPC Pvt.Ltd.)",
                                },
                            ]}
                            {...field}
                        />
                    )}
                />
                {errors.registrationType && (
                    <Error>{errors.registrationType.message}</Error>
                )}
            </InputDiv>

            <InputDiv>
                <Label>
                    Business Type<Required>*</Required>
                </Label>
                <Controller
                    name="productOrService"
                    control={control}
                    defaultValue={business?.productOrService}
                    render={({ field }) => (
                        <Radio.Group {...field}>
                            <Radio value="Product">Product</Radio>
                            <Radio value="Service">Service</Radio>
                        </Radio.Group>
                    )}
                />
                {errors.productOrService && (
                    <Error>{errors.productOrService.message}</Error>
                )}
            </InputDiv>
            <InputDiv>
                <Label>
                    INC No.<Required>*</Required>
                </Label>
                <Controller
                    name="incNo"
                    control={control}
                    defaultValue={business?.incNo}
                    render={({ field }) => (
                        <Input placeholder="INC No. of Company" {...field} />
                    )}
                />
                {errors.incNo && <Error>{errors.incNo.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Company Website<Required>*</Required>
                </Label>
                <Controller
                    name="companyWebsite"
                    control={control}
                    defaultValue={business?.companyWebsite}
                    render={({ field }) => (
                        <Input placeholder="Company Website" {...field} />
                    )}
                />
                {errors.companyWebsite && <Error>{errors.companyWebsite.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    PAN No. of Company<Required>*</Required>
                </Label>
                <Controller
                    name="panNo"
                    control={control}
                    defaultValue={business?.panNo}
                    render={({ field }) => (
                        <Input placeholder="PAN No. of Company" {...field} />
                    )}
                />
                {errors.panNo && <Error>{errors.panNo.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>GST No.<Required>*</Required></Label>
                <Controller
                    name="gstNo"
                    control={control}
                    defaultValue={business?.gstNo}
                    render={({ field }) => <Input placeholder="GST No." {...field} />}
                />
                {errors.gstNo && <Error>{errors.gstNo.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>ITR per year<Required>*</Required></Label>
                <Controller
                    name="itrPerYear"
                    control={control}
                    defaultValue={business?.itrPerYear}
                    render={({ field }) => (
                        <Input placeholder="Income Tax Return per year" {...field} />
                    )}
                />
                {errors.itrPerYear && <Error>{errors.itrPerYear.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Address<Required>*</Required>
                </Label>
                <Controller
                    name="address"
                    control={control}
                    defaultValue={business?.address}
                    render={({ field }) => (
                        <Input placeholder="Please give complete address" {...field} />
                    )}
                />
                {errors.address && <Error>{errors.address.message}</Error>}
            </InputDiv>

            <CommonButton name="Submit" width="30%" height="40px" />

        </ModalInputContainer>
    );
}

export default EditBusinessForm