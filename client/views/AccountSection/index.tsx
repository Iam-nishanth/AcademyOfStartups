import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from '@/lib/axios';
import { Tabs, message } from 'antd';
import ModalComponent from '@/components/AccountDetailsModal';
import { CommonButton } from '@/components/Common/Button';
import { Error, FORM, Input, InputContainer, Label, Required } from '@/styles/components/FormStyles';
import { Password, PasswordInput } from '@/styles/components/LoginStyles';
import { AccountSectionContainer, AccountSectionWrapper, DetailsWrapper, PairHolder, ValueHolder } from '@/styles/views/AccountSectionStyles';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';


const PasswordSchema = yup.object().shape({
    oldPassword: yup.string().required('Old Password is required'),
    newPassword: yup.string().required('New Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords must match'),
})

const AccountSection = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(PasswordSchema),
    });
    const { user, business, token } = useAuthContext();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const showModal = () => {
        setOpen(true);
    }
    const handleBack = () => {
        router.back();
    }

    const ChangePassword = async (data: any) => {
        try {
            const loadingMessage = message.loading("Loading...", 0);
            const response = await axios.put(`/auth/user/change-password/${user?.id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                loadingMessage();
                message.success("Password Changed Successfully");
            }
        } catch (error: any) {
            message.destroy();
            message.error('Something went wrong');
            console.log(error);
        }
    }

    const AccountSectionTabs = [

        {
            label: 'Business Details',
            key: '1',
            children: (
                <DetailsWrapper>
                    <ModalComponent showModal={showModal} setOpen={setOpen} open={open} />
                    <PairHolder>
                        <strong>Business Name: </strong>
                        <ValueHolder>
                            <p>{business && business.businessName}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Email: </strong>
                        <ValueHolder>
                            <p>{business && business.businessEmail}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Phone No: </strong>
                        <ValueHolder>
                            <p>{business && business.phoneNo}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Category: </strong>
                        <ValueHolder>
                            <p>{business && business.businessCategory}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Registration Type: </strong>
                        <ValueHolder>
                            <p>{business && business.registrationType}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Category: </strong>
                        <ValueHolder>
                            <p>{business && business.businessCategory}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Type: </strong>
                        <ValueHolder>
                            <p>{business && business.productOrService}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>INC No. : </strong>
                        <ValueHolder>
                            <p>{business && business.incNo}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Website Address : </strong>
                        <ValueHolder>
                            <p>{business && business.companyWebsite}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business PAN : </strong>
                        <ValueHolder>
                            <p>{business && business.panNo}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>GST No. : </strong>
                        <ValueHolder>
                            <p>{business && (business.gstNo === '' ? 'N/A' : business.gstNo)}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>ITR per Year : </strong>
                        <ValueHolder>
                            <p>{business && business.itrPerYear}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Address: </strong>
                        <ValueHolder>
                            <p>{business && business.address}</p>
                        </ValueHolder>
                    </PairHolder>
                </DetailsWrapper>
            ),
        },
        {
            label: 'Account Details',
            key: '2',
            children: (
                <DetailsWrapper>
                    <PairHolder>
                        <strong>User Name: </strong>
                        <ValueHolder>
                            <p>{user && user.name}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>User Email: </strong>
                        <ValueHolder>
                            <p>{user && user.userEmail}</p>
                        </ValueHolder>
                    </PairHolder>
                    <hr />

                    <PairHolder>
                        <strong>Change Password:</strong>
                        <FORM onSubmit={handleSubmit(ChangePassword)} >
                            <InputContainer>
                                <Label>
                                    Old Password<Required>*</Required>
                                </Label>
                                <Controller
                                    name="oldPassword"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input placeholder="Enter your Password" type="input" {...field} />
                                    )}
                                />
                                {errors.oldPassword && <Error>{errors.oldPassword.message}</Error>}
                            </InputContainer>
                            <InputContainer>
                                <Label>
                                    New Password<Required>*</Required>
                                </Label>
                                <Controller
                                    name="newPassword"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input placeholder="Enter New Password" type="password" {...field} />
                                    )}
                                />
                                {errors.newPassword && <Error>{errors.newPassword.message}</Error>}
                            </InputContainer>
                            <InputContainer>
                                <Label>
                                    Confirm New Password<Required>*</Required>
                                </Label>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Password>
                                            <PasswordInput
                                                placeholder="Confirm New Password"
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
                                {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
                            </InputContainer>
                            <InputContainer>
                                <CommonButton name="Submit" width="30%" height="40px" />
                            </InputContainer>
                        </FORM>
                    </PairHolder>


                    <hr />

                </DetailsWrapper>
            ),
        },
    ];

    return (
        <AccountSectionContainer>
            <AccountSectionWrapper>
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={AccountSectionTabs}
                />
            </AccountSectionWrapper>
        </AccountSectionContainer>
    );
};

export default AccountSection;
