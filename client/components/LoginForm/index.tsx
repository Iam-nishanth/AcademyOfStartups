import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/LoginForm";
import { useAuthContext } from "@/hooks/useAuthContext";

type FormData = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  axios.defaults.withCredentials = true;
  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useAuthContext()

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Perform login logic here, e.g., sending login data to the server

    const signIn = async () => {
      try {
        const loadingMessage = message.loading("Loading...", 0);
        const response = await axios.post<LoginResponse>(
          "http://localhost:8080/auth/login",
          data
        );
        console.log(response);

        if (response.status === 200) {
          loadingMessage();
          // save the user to local storage
          localStorage.setItem('user', JSON.stringify(response.data.user))

          // update the auth context
          dispatch({ type: 'LOGIN', payload: response.data.user })
          message.success("Login Successful");
          reset();
          // console.log(response.data);

          router.push({
            pathname: "/users",
          });
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

export default LoginForm;
