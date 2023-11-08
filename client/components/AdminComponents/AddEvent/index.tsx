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

interface EventType {
    name: string
    date: string
    time: string
    location: string
}
export const EventValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
    location: yup.string().required("Location is required"),
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

    const onSubmit = (data: EventType) => {

        const signIn = async () => {
            try {
                const loadingMessage = message.loading("Loading...", 0);
                const response = await axios.post<any>("/admin/add-event", { event: data });

                if (response.status === 201) {
                    loadingMessage();
                    message.success("Event Created");
                    reset()
                }
            } catch (error: any) {
                message.destroy();
                if (error.response && error.response.status === 409) {
                    message.error("User already exists");
                }
                else {
                    message.error("Some error occurred, please try again");
                }

                console.error(error);
            }
        };

        signIn();
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
                    <Label>Event Date<Required>*</Required></Label>
                    <Controller
                        name="date"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.date && (
                        <p style={{ color: "red" }}>{errors.date.message}</p>
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
                    <CommonButton name="Submit" width="30%" height="40px" />
                </InputDiv>
            </AdminRegister>
        </LoginContainer>
    );
};

export default AddEvent;
