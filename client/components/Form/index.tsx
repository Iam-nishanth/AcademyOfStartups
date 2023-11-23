import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { message } from "antd";
import axios from "@/lib/axios";
import {
  FORM,
  Input,
  InputContainer,
  Label,
  Required,
  TextArea,
  Error,
} from "@/styles/components/FormStyles";
import { CommonButton } from "../Common/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
});

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const loadingMessage = message.loading("Submitting form...", 0);

      const response = await axios.post("/api/contact/email", data);

      if (response.status === 200) {
        loadingMessage();
        message.success("Form submitted successfully");
        reset();
      }
    } catch (error) {
      console.error(error);
      message.destroy();

      message.error("Some error occurred");
    }
  };

  return (
    <FORM onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label htmlFor="name">
          Name<Required>*</Required>
        </Label>
        <Input id="name" type="text" {...register("name")} />
        {errors.name && <Error>{errors.name.message}</Error>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">
          Email<Required>*</Required>{" "}
        </Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <Error>{errors.email.message}</Error>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="subject">
          Subject<Required>*</Required>{" "}
        </Label>
        <TextArea id="subject" {...register("subject")} />
        {errors.subject && <Error>{errors.subject.message}</Error>}
      </InputContainer>
      <CommonButton
        name="Submit"
        width="30%"
        height="50px"
        onClick={handleSubmit(onSubmit)}
      />
    </FORM>
  );
};

export default Form;
