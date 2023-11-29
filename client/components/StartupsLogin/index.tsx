/* eslint-disable react/no-unescaped-entities */
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommonButton } from "../Common/Button";
import axios from "@/lib/axios";
import { StartupValidationSchma } from "@/utils/validation";
import { Datamodel } from "@/types/Startup";
import { useRouter } from "next/router";
import { useAuthContext } from "@/hooks/useAuthContext";
import { AxiosError } from "axios";
import ImageConvert from "../Common/ImageConvert";
import Image from "next/image";





const StartupsLogin = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(StartupValidationSchma,)
  });

  const { user, dispatch } = useAuthContext();
  const router = useRouter()
  const [base64Image, setBase64Image] = React.useState<string>("");

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


      const response = await axios.post("/startups/add", formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );

      if (response.status === 200) {
        loadingMessage();
        message.success("Startup Registered, Please Login again");
        reset();
        message.loading("Redirecting...", 0);
        localStorage.removeItem('user');
        localStorage.removeItem('business');
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
        message.destroy();
        router.replace('/login');
      }
    } catch (error: any) {
      console.error(error);
      message.destroy();
      if (error.response.status === 409) {
        message.error(error.response.data.message);
      }
      message.error("Some error occurred. Please try again later");
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit(onSubmit)}>
      <Required style={{ paddingBottom: "10px" }}>Please don't refresh the page until the form is submitted</Required>
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
          control={control}
          defaultValue={user?.userEmail}
          render={({ field }) => <Input {...field} placeholder="Email" disabled />}
        />
        {errors.businessEmail && <Error>{errors.businessEmail.message}</Error>}
      </InputDiv>

      <InputDiv>
        <Label>
          Phone No.<Required>*</Required>
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
          control={control}
          defaultValue=""
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
          control={control}
          render={({ field }) => (
            <Input placeholder="INC No. of Company" {...field} value={field.value.toUpperCase()}
              onChange={(e) => {
                field.onChange(e.target.value.toUpperCase());
              }}
            />
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
          defaultValue="https://"
          render={({ field }) => (
            <Input placeholder="Company Website" {...field} />
          )}
        />
        <span style={{ marginLeft: "10px", fontSize: "13px" }}>ex: https://website.com</span>
        {errors.companyWebsite && <Error>{errors.companyWebsite.message}</Error>}
      </InputDiv>

      <InputDiv>
        <Label>
          PAN No. of Company<Required>*</Required>
        </Label>
        <Controller
          name="panNo"
          control={control}
          render={({ field }) => (
            <Input placeholder="PAN No. of Company" {...field}
              value={field.value.toUpperCase()}
              onChange={(e) => {
                field.onChange(e.target.value.toUpperCase());
              }}
            />
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
          render={({ field }) => <Input placeholder="GST No." {...field}
            value={field.value?.toUpperCase()}
            onChange={(e) => {
              field.onChange(e.target.value.toUpperCase());
            }}
          />}
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
          render={({ field }) => (
            <Input placeholder="Please give complete address" {...field} />
          )}
        />
        {errors.address && <Error>{errors.address.message}</Error>}
      </InputDiv>
      <InputDiv>
        <Label>Business Logo :</Label>
        <div style={{ padding: "10px 40px", display: "flex", flexDirection: "column" }}>
          <ImageConvert onImageUpload={handleImageUpload} />
        </div>
        <Error>File should not be larger than 2MB</Error>
      </InputDiv>

      <CommonButton name="Submit" width="30%" height="40px" />
    </InputContainer>
  );
}


export default StartupsLogin