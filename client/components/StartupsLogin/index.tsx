import {
  InputContainer,
  InputDiv,
  Input,
  Error,
  Label,
  Required,
} from "@/styles/views/StartupsStyles";
import React from "react";
import { Select, Radio, message } from "antd";
import { useForm, Controller, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CommonButton } from "../Common/Button";
import axios from "axios";
export interface Datamodel {
  name: string;
  email: string;
  phoneNo: string;
  businessName: string;
  businessCategory: string;
  registrationType: string;
  productOrService: string;
  incNo: string;
  companyWebsite: string | undefined;
  panNo: string;
  gstNo: string | undefined;
  itrPerYear: string;
  address: string;
}
const phoneRegExp = /^\d{10}$/;

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNo: yup
    .string()
    .matches(phoneRegExp, "Phone number must be 10 digits")
    .required("Phone is required"),
  businessName: yup.string().required("Business Name is required"),
  businessCategory: yup.string().required("Business Category is required"),
  registrationType: yup
    .string()
    .required("Business Registration Type is required"),
  productOrService: yup.string().required("Business Type is required"),
  companyWebsite: yup.string(),
  gstNo: yup.string(),
  incNo: yup.string().required("INC No. of Company is required"),
  panNo: yup.string().required("PAN No. of Company is required"),
  itrPerYear: yup.string().required("Income Tax Return is required"),
  address: yup.string().required("Address of the company is required"),
});

export default function StartupsLogin() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: Datamodel) => {
    try {
      const loadingMessage = message.loading("Submitting form...", 0);

      const response = await axios.post("http://localhost:8080/startups", data);

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
    console.log(data);
  };

  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <Label>
          Name<Required>*</Required>
        </Label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input placeholder="Name" {...field} />}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </InputDiv>

      <InputDiv>
        <Label>
          Email<Required>*</Required>
        </Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <Input placeholder="Email" {...field} />}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </InputDiv>

      <InputDiv>
        <Label>
          phoneNo<Required>*</Required>
        </Label>
        <Controller
          name="phoneNo"
          control={control}
          defaultValue=""
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
          control={control}
          defaultValue=""
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
          defaultValue=""
          render={({ field }) => (
            <Select
              // style={{ width: 500 }}
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
          defaultValue=""
          render={({ field }) => (
            <Select
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
          render={({ field }) => (
            <Input placeholder="Company Website" {...field} />
          )}
        />
        {/* {errors.companyWebsite && <div>{errors.companyWebsite.message}</div>} */}
      </InputDiv>

      <InputDiv>
        <Label>
          PAN No. of Company<Required>*</Required>
        </Label>
        <Controller
          name="panNo"
          control={control}
          defaultValue=""
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
          control={control}
          defaultValue=""
          render={({ field }) => <Input placeholder="GST No." {...field} />}
        />
        {/* {errors.gstNo && <Error>{errors.gstNo.message}</Error>} */}
      </InputDiv>

      <InputDiv>
        <Label>ITR per year</Label>
        <Controller
          name="itrPerYear"
          control={control}
          defaultValue=""
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
          defaultValue=""
          render={({ field }) => (
            <Input placeholder="Please give complete address" {...field} />
          )}
        />
        {errors.address && <Error>{errors.address.message}</Error>}
      </InputDiv>

      <CommonButton name="Submit" width="30%" height="40px" />
    </InputContainer>
  );
}
