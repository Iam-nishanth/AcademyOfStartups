import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    AdminRegister,
    Input,
    InputDiv,
    Label,
    LoginContainer,
    Required,
} from "@/styles/components/LoginStyles";
import { CommonButton } from "@/components/Common/Button";
import axios from "@/lib/axios";
import { message } from "antd";
import * as yup from "yup";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/router";
import ImageConvert from "@/components/Common/ImageConvert";
import { Error } from "@/styles/components/FormStyles";

interface EventType {
    name: string;
    subtitle: string | undefined;
    dates: string;
    time: string;
    location: string;
    description: string | undefined;
    entryFee: string | undefined;
    paymentLink: string | undefined;
}
export const EventValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    subtitle: yup.string(),
    dates: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
    location: yup.string().required("Location is required"),
    description: yup.string(),
    entryFee: yup.string(),
    paymentLink: yup.string(),
})

const AddEvent: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<EventType>({
        resolver: yupResolver(EventValidation),
    });
    const [base64Image, setBase64Image] = React.useState<string>("");
    const { token, dispatch } = useAuthContext();
    const router = useRouter();
    const handleImageUpload = (image: string) => {
        setBase64Image(image);
    };

    const onSubmit = (data: any) => {

        const addEvent = async () => {
            const formData = new FormData();
            base64Image && formData.append("coverImage", base64Image);
            formData.append("name", data.name);
            formData.append("subtitle", data.subtitle || "");
            formData.append("dates", data.dates);
            formData.append("time", data.time);
            formData.append("location", data.location);
            formData.append("description", data.description || "");
            formData.append("entryFee", data.entryFee || "");
            formData.append("paymentLink", data.paymentLink || "");
            try {
                const loadingMessage = message.loading("Loading...", 0);
                const response = await axios.post<any>("/admin/add-event", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",

                    }
                });

                if (response.status === 201) {
                    loadingMessage();
                    message.success("Event Created");
                    reset()
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

        addEvent();
    };

    return (
        <LoginContainer>
            <AdminRegister onSubmit={handleSubmit(onSubmit)}>
                <InputDiv>
                    <Label>Event Name<Required>*</Required></Label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.name && (
                        <p style={{ color: "red" }}>{errors.name.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Subtitle</Label>
                    <Controller
                        name="subtitle"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />

                </InputDiv>
                <InputDiv>
                    <Label>Event Date<Required>*</Required></Label>
                    <Controller
                        name="dates"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.dates && (
                        <p style={{ color: "red" }}>{errors.dates.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Event Time<Required>*</Required></Label>
                    <Controller
                        name="time"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.time && (
                        <p style={{ color: "red" }}>{errors.time.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Event Location<Required>*</Required></Label>
                    <Controller
                        name="location"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.location && (
                        <p style={{ color: "red" }}>{errors.location.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Entry Fee</Label>
                    <Controller
                        name="entryFee"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.entryFee && (
                        <p style={{ color: "red" }}>{errors.entryFee.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Payment Link</Label>
                    <Controller
                        name="paymentLink"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </InputDiv>
                <InputDiv>
                    <Label>Event Description</Label>
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <textarea rows={4} {...field} />}
                    />
                </InputDiv>
                <InputDiv>
                    <Label>Cover Image :</Label>
                    <div style={{ padding: "10px 40px", display: "flex", flexDirection: "column" }}>
                        <ImageConvert onImageUpload={handleImageUpload} />
                    </div>
                    <Error>File should not be larger than 2MB</Error>
                </InputDiv>

                <InputDiv>
                    <CommonButton name="Submit" width="30%" height="40px" />
                </InputDiv>
            </AdminRegister>
        </LoginContainer>
    );
};

export default AddEvent;
