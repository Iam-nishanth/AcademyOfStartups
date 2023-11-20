import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    AdminRegister,
    Input,
    InputDiv,
    Label,
    LoginContainer,
} from "@/styles/components/LoginStyles";
import { CommonButton } from "@/components/Common/Button";
import axios from "@/lib/axios";
import { message } from "antd";
import { RegisterResponse } from "@/types/Logintypes";
import { RegisterValidationSchema } from "@/utils/validation";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/router";

type FormData = {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
};

const AddUser: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(RegisterValidationSchema),
    });
    const { token, dispatch } = useAuthContext();
    const router = useRouter();

    const onSubmit = (data: FormData) => {
        const addUser = async () => {
            try {
                const loadingMessage = message.loading("Loading...", 0);
                const response = await axios.post<RegisterResponse>(
                    "/admin/add-user",
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 201) {
                    loadingMessage();
                    message.success("User Created");
                    reset();
                }
            }
            catch (error: any) {
                message.destroy();
                if (error.response && error.response.status === 409) {
                    message.error("User already exists");
                }

                if (error.response.status === 401) {
                    message.error("Token Expired, Please Login Again");
                    localStorage.removeItem("user");
                    localStorage.removeItem("business");
                    localStorage.removeItem("token");
                    dispatch({ type: "LOGOUT" });

                    router.replace("/login");
                } else if (error.response.status === 500) {
                    message.error("Internal Server Error");
                }
            }
        };

        addUser();
    };

    return (
        <LoginContainer>
            <AdminRegister onSubmit={handleSubmit(onSubmit)}>
                <InputDiv>
                    <Label>Name</Label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </InputDiv>
                <InputDiv>
                    <Label>Email</Label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Set Password</Label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.password && (
                        <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                </InputDiv>
                <InputDiv>
                    <Label>Confirm Password</Label>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                    {errors.confirmPassword && (
                        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
                    )}
                </InputDiv>

                <InputDiv>
                    <CommonButton name="Submit" width="30%" height="40px" />
                </InputDiv>
            </AdminRegister>
        </LoginContainer>
    );
};

export default AddUser;
