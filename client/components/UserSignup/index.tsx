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
} from "../../styles/components/LoginStyles";
import { CommonButton } from "../Common/Button";
import axios from "@/lib/axios";
import { message } from "antd";
import { useRouter } from "next/router";
import { LoginResponse, RegisterResponse } from "../../types/Logintypes";
import { useAuthContext } from "../../hooks/useAuthContext";
import { LoginValidationSchema, RegisterValidationSchema } from "../../utils/validation";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type FormData = {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
};





const UserSignup: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(RegisterValidationSchema),
    });

    axios.defaults.withCredentials = true;


    const [showPassword, setShowPassword] = useState(false);
    const { dispatch } = useAuthContext()
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const onSubmit = (data: FormData) => {

        const signIn = async () => {
            try {
                const loadingMessage = message.loading("Loading...", 0);
                const response = await axios.post<RegisterResponse>("/auth/register", data);

                if (response.status === 201) {
                    loadingMessage();
                    message.success("User Created");
                    reset();
                    localStorage.setItem('user', JSON.stringify(response.data))
                    dispatch({
                        type: 'LOGIN', payload: {
                            user: response.data,
                        }
                    })

                    router.push({
                        pathname: '/user/verify',
                        query: { email: data.email },
                    });
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
            <LoginFORM onSubmit={handleSubmit(onSubmit)}>
                <InputDiv>
                    <Label>Name</Label>
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
                        render={({ field }) => <Input type="password" {...field} />}
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
                                    {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                                </button>
                            </Password>
                        )}
                    />
                    {errors.confirmPassword && (
                        <Error style={{ color: "red" }}>{errors.confirmPassword.message}</Error>
                    )}
                </InputDiv>
                <InputDiv>
                    <CommonButton name="Submit" width="30%" height="40px" />
                </InputDiv>
            </LoginFORM>
        </LoginContainer>
    );
};

export default UserSignup;
