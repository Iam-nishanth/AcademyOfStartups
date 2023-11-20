/* eslint-disable react/no-unescaped-entities */
import {
    InputDiv,
    Input,
    Error,
    Label,
    Required,
    AdminBusiness,
} from "@/styles/views/StartupsStyles";
import React from "react";
import { Select, Radio, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommonButton } from "../../Common/Button";
import axios from "@/lib/axios";
import { StartupValidationSchma } from "@/utils/validation";
import { Datamodel } from "@/types/Startup";
import { useRouter } from "next/router";
import { useAuthContext } from "@/hooks/useAuthContext";
import ImageConvert from "@/components/Common/ImageConvert";





const AddBusiness = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(StartupValidationSchma)
    });

    const [base64Image, setBase64Image] = React.useState<string>("");
    const { token, dispatch } = useAuthContext();
    const router = useRouter();

    const handleImageUpload = (image: string) => {
        setBase64Image(image);
    };


    const onSubmit = async (data: Datamodel) => {
        try {
            const loadingMessage = message.loading("Submitting form...", 0);
            const formData = new FormData();

            base64Image && formData.append("image", base64Image);
            formData.append("ownerName", data.ownerName);
            formData.append("businessName", data.businessName);
            formData.append("businessEmail", data.businessEmail);
            formData.append("phoneNo", data.phoneNo);
            formData.append("companyWebsite", data.companyWebsite);
            formData.append("incNo", data.incNo);
            formData.append("panNo", data.panNo);
            formData.append("itrPerYear", data.itrPerYear);
            formData.append("address", data.address);
            formData.append("registrationType", data.registrationType);
            formData.append("businessCategory", data.businessCategory);
            formData.append("productOrService", data.productOrService);
            formData.append('Status', data.Status)
            data.gstNo && formData.append("gstNo", data.gstNo);


            const response = await axios.post("/admin/add-business", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            if (response.status === 200) {
                loadingMessage();
                message.success("Startup Registered successfully");
                reset();
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
                    Full Name<Required>*</Required>
                </Label>
                <Controller
                    name="ownerName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input placeholder="Name" {...field} />}
                />
                {errors.ownerName && <Error>{errors.ownerName.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Email<Required>*</Required>
                </Label>
                <Controller
                    name="businessEmail"
                    defaultValue=""
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Email" />}
                />
                {errors.businessEmail && <Error>{errors.businessEmail.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Phone No.<Required>*</Required>
                </Label>
                <Controller
                    name="phoneNo"
                    defaultValue=""
                    control={control}
                    render={({ field }) => <Input placeholder="Phone" {...field} />}
                />
                {errors.phoneNo && <Error>{errors.phoneNo.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Business Name<Required>*</Required>
                </Label>
                <Controller
                    name="businessName"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <Input placeholder="Business Name" {...field} />
                    )}
                />
                {errors.businessName && <Error>{errors.businessName.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>
                    Business Category<Required>*</Required>
                </Label>
                <Controller
                    name="businessCategory"
                    control={control}
                    render={({ field }) => (
                        <Select
                            placeholder="Business Category"
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
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <Radio.Group className="radio" {...field}>
                            <Radio value="Product">Product-Based</Radio>
                            <Radio value="Service">Service-Based</Radio>
                        </Radio.Group>
                    )}
                />
                {errors.productOrService && (
                    <Error>{errors.productOrService.message}</Error>
                )}
            </InputDiv>

            <InputDiv >
                <Label>
                    Business Status<Required>*</Required>
                </Label>
                <Controller
                    name="Status"
                    control={control}
                    render={({ field }) => (
                        <Radio.Group className="radio"  {...field}>
                            <Radio value="Ideation">Ideation</Radio>
                            <Radio value="Bootstrapped">Bootstrapped</Radio>
                            <Radio value="MVP">MVP</Radio>
                            <Radio value="Expansion">Expansion</Radio>
                        </Radio.Group>
                    )}
                />
                {errors.Status && (
                    <Error>{errors.Status.message}</Error>
                )}
            </InputDiv>

            <InputDiv>
                <Label>
                    INC No.<Required>*</Required>
                </Label>
                <Controller
                    name="incNo"
                    defaultValue=""
                    control={control}
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
                    defaultValue="https://"
                    control={control}
                    render={({ field }) => (
                        <Input placeholder="Company Website" {...field} />
                    )}
                />
                <p style={{ fontSize: "13px", marginLeft: "10px" }}>ex: https://website.com</p>
                {errors.companyWebsite && (
                    <Error>{errors.companyWebsite.message}</Error>
                )}
            </InputDiv>

            <InputDiv>
                <Label>
                    PAN No. of Company<Required>*</Required>
                </Label>
                <Controller
                    name="panNo"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <Input placeholder="PAN No. of Company" {...field} />
                    )}
                />
                {errors.panNo && <Error>{errors.panNo.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>GST No. (Optional)</Label>
                <Controller
                    name="gstNo"
                    defaultValue=""
                    control={control}
                    render={({ field }) => <Input placeholder="GST No." {...field} />}
                />
            </InputDiv>

            <InputDiv>
                <Label>ITR per year</Label>
                <Controller
                    name="itrPerYear"
                    defaultValue=""
                    control={control}
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
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <Input placeholder="Please give complete address" {...field} />
                    )}
                />
                {errors.address && <Error>{errors.address.message}</Error>}
            </InputDiv>

            <InputDiv>
                <Label>Logo :</Label>
                <div style={{ padding: "10px 40px", display: "flex", flexDirection: "column" }}>
                    <ImageConvert onImageUpload={handleImageUpload} />
                </div>
            </InputDiv>

            <CommonButton name="Submit" width="30%" height="40px" />
        </AdminBusiness>
    );
}


export default AddBusiness