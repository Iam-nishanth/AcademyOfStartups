import { useAuthContext } from '@/hooks/useAuthContext';
import React, { useEffect } from 'react'
import axios from '@/lib/axios';
import { message } from 'antd';
import { Heading, SubHeading } from '@/styles/Globalstyles';
import { useRouter } from 'next/router';
import { Input } from '@/styles/components/FormStyles';
import styled from 'styled-components';
import Head from 'next/head';
import withAuth from '@/components/HighOrders/WithAuth';



const VerifyEmail = () => {

    const { user, token, dispatch } = useAuthContext();
    const otpInput = React.useRef<HTMLInputElement>(null);
    const [emailSent, setEmailSent] = React.useState(false);
    const [resendDisabled, setResendDisabled] = React.useState(false);
    const [countdown, setCountdown] = React.useState(40);

    const router = useRouter();

    const countDown = () => {
        let seconds = 40;
        (seconds)

        const countdownInterval = setInterval(() => {
            seconds--;
            setCountdown(seconds);

            if (seconds === 0) {
                setResendDisabled(false);
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    useEffect(() => {
        countDown()
        return () => {
            clearInterval(countdown);
        };
    }, [])

    const sendEmail = async () => {
        const loadingMessage = message.loading("Sending OTP to your Email...", 0);

        try {
            const response = await axios.post('/auth/verify-user', {
                email: user?.userEmail
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("OTP sent to your Email")
                setEmailSent(true)
                setResendDisabled(true)


            }
        } catch (error) {
            console.log(error)
            message.destroy();
            message.error("Some Error Occured, Try again later")
        }
    }


    const resendEmail = async () => {
        const loadingMessage = message.loading("Sending OTP to your Email...", 0);

        try {
            const response = await axios.post('/auth/verify-user/resend', {
                email: user?.userEmail
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("OTP Re-sent to your Email")
            }
        } catch (error) {
            console.log(error)
            message.destroy();
            message.error("Some Error Occured, Try again later")
        }
    }
    const verifyEmail = async () => {
        const otp = otpInput.current?.value;
        const loadingMessage = message.loading("Verifying Email...", 0);

        try {
            const response = await axios.post('/auth/verify-user/verify', {
                email: user?.userEmail,
                otp: otp
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("Email Verified")


                setTimeout(() => {
                    message.loading("Redirecting...", 0);
                    localStorage.removeItem('user');
                    localStorage.removeItem('business');
                    localStorage.removeItem('token');
                    dispatch({ type: 'LOGOUT' });
                    message.destroy();
                    router.replace('/login');
                }, 2000);


            }
        } catch (error) {
            console.log(error)
            message.destroy();
            message.error("Some Error Occured, Try again later")
        }
    }

    return (
        <>
            <Head>
                <title>Verify Email</title>
                <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <AccountSectionContainer style={{ background: 'linear-gradient(to right, #1A2980, #001336)' }} >
                    {
                        user?.isVerified === true ? (
                            <AccountSectionWrapper style={{ textAlign: 'center', height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '20px' }}>
                                <Heading style={{ color: 'white' }}>Account Verified</Heading>
                                <SubHeading>You can now login to your account</SubHeading>
                                <CommonButton onClick={() => router.push('/user/account')} >Go Back</CommonButton>
                            </AccountSectionWrapper>
                        ) : (
                            <AccountSectionWrapper style={{ textAlign: 'center', height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '20px' }}>
                                <Heading style={{ color: 'white' }}>Verify Email</Heading>
                                <SubHeading>Email will be sent to {user?.userEmail}</SubHeading>
                                {!emailSent && <CommonButton onClick={sendEmail} >Send OTP</CommonButton>}

                                {emailSent && (
                                    <>
                                        <Input type="text" ref={otpInput} style={{ textAlign: 'center' }} />
                                        <CommonButton onClick={verifyEmail}>Verify Email</CommonButton>
                                        <ResendButton disabled={resendDisabled} onClick={resendEmail}>{resendDisabled ? `Resend in ${countdown} seconds` : 'Resend'}</ResendButton>

                                    </>
                                )}

                            </AccountSectionWrapper>
                        )
                    }
                </AccountSectionContainer >
            </main>
        </>
    )
}

const AccountSectionContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const AccountSectionWrapper = styled.div`
    display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 20px 15px;
  flex-direction: column;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`
const CommonButton = styled.button`
    font-size: 14px;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: #316aff;
  width:  250px;
  height: 40px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #001439;
    transform: translateY(-5px);
  }
`

const ResendButton = styled.button`
    font-size: 14px;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  background: transparent;

  &:hover {
    color: #316aff;
  }
  &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
  }
`

export default withAuth(VerifyEmail)