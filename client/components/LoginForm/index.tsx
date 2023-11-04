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
import axios from "@/lib/axios";
import { message } from "antd";
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/Logintypes";
import { useAuthContext } from "@/hooks/useAuthContext";
import { LoginValidationSchema } from "@/utils/validation";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type FormData = {
  email: string;
  password: string;
};




const LoginForm: React.FC = () => {
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
  const { dispatch } = useAuthContext()

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);

    const signIn = async () => {
      try {
        const loadingMessage = message.loading("Loading...", 0);
        const response = await axios.post<LoginResponse>("/auth/login", data);
        console.log(response);

        if (response.status === 200) {
          loadingMessage();
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('business', JSON.stringify(response.data.business))
          localStorage.setItem('token', JSON.stringify(response.data.token))
          dispatch({
            type: 'LOGIN', payload: {
              user: response.data.user,
              business: response.data.business,
              token: response.data.token
            }
          })
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
            render={({ field }) => <Input type="email" {...field} />}
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
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
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

export default LoginForm;
