import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Error,
    Input,
    InputDiv,
    Label,
    LoginContainer,
    LoginFORM,
    Password,
    PasswordInput,
} from "@/styles/components/LoginStyles";
import { CommonButton } from "../Common/Button";
import axios from "axios";
import { message } from "antd";
import { LoginResponse } from "@/types/Logintypes";
import { useAuthContext } from "@/hooks/useAuthContext";
import { LoginValidationSchema } from "@/utils/validation";

type FormData = {
    email: string;
    password: string;
};



const InvestorLogin: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(LoginValidationSchema),
    });

    axios.defaults.withCredentials = true;


    const [showPassword, setShowPassword] = useState(false);
    //   const { dispatch } = useAuthContext()

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const onSubmit = (data: FormData) => {
        console.log(data);

        const signIn = async () => {
            try {
                const loadingMessage = message.loading("Loading...", 0);
                const response = await axios.post<LoginResponse>(
                    "http://localhost:8080/auth/investor-login",
                    data
                );
                console.log(response);

                if (response.status === 200) {
                    loadingMessage();

                    message.success("Login Successful");
                    reset();
                }
            } catch (error: any) {
                message.destroy();
                if (error.response && error.response.status === 404) {
                    message.error("User not found");
                } else if (error.response && error.response.status === 401) {
                    message.error("Incorrect password");
                } else {
                    message.error("User not found");
                }
                console.error(error);
            }
        };

        signIn();
    };

    return (
        <LoginContainer>
            <LoginFORM onSubmit={handleSubmit(onSubmit)}>
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
                    <Label>Password</Label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Password>
                                <PasswordInput
                                    type={showPassword ? "text" : "password"}
                                    {...field}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    style={{ marginLeft: "8px" }}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </Password>
                        )}
                    />
                    {errors.password && (
                        <Error style={{ color: "red" }}>{errors.password.message}</Error>
                    )}
                </InputDiv>
                <InputDiv>
                    <CommonButton name="Submit" width="30%" height="40px" />
                </InputDiv>
            </LoginFORM>
        </LoginContainer>
    );
};

export default InvestorLogin;
